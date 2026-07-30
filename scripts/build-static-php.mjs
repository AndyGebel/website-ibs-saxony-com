import { cp, mkdir, readdir, readFile, rm, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const sourceDir = path.join(root, "dist");
const outputDir = path.join(root, "dist-php");
const rootDeployEntries = ["_astro", "assets", "de", "en", "404.php", "index.php", "robots.txt", "sitemap.xml"];
const buildGaMeasurementId = process.env.VITE_GA_MEASUREMENT_ID || process.env.PUBLIC_GA_MEASUREMENT_ID || process.env.GA_MEASUREMENT_ID || "";
const buildClarityProjectId = process.env.PUBLIC_CLARITY_PROJECT_ID || process.env.VITE_CLARITY_PROJECT_ID || process.env.CLARITY_PROJECT_ID || "";

const consentCopy = {
  de: {
    title: "Analyse-Cookies akzeptieren?",
    text: "Wir nutzen Google Analytics und Microsoft Clarity nur, wenn Sie aktiv zustimmen. So sehen wir, welche Inhalte hilfreich sind, ohne vor Ihrer Zustimmung Tracking zu laden.",
    accept: "Ich stimme zu",
    decline: "Nur notwendige Einstellungen",
    privacy: "Datenschutz lesen",
    privacyHref: "/de/datenschutz"
  },
  en: {
    title: "Accept analytics cookies?",
    text: "We only load Google Analytics and Microsoft Clarity after your active consent. This helps us understand which content is useful without tracking before you opt in.",
    accept: "I agree",
    decline: "Necessary settings only",
    privacy: "Read privacy policy",
    privacyHref: "/en/privacy"
  }
};

function phpPrelude() {
  return `<?php
$ibsGaMeasurementId = getenv('VITE_GA_MEASUREMENT_ID') ?: getenv('PUBLIC_GA_MEASUREMENT_ID') ?: getenv('GA_MEASUREMENT_ID') ?: ${JSON.stringify(buildGaMeasurementId)};
$ibsClarityProjectId = getenv('PUBLIC_CLARITY_PROJECT_ID') ?: getenv('VITE_CLARITY_PROJECT_ID') ?: getenv('CLARITY_PROJECT_ID') ?: ${JSON.stringify(buildClarityProjectId)};
$ibsAnalyticsConfig = [
  'measurementId' => $ibsGaMeasurementId,
  'clarityProjectId' => $ibsClarityProjectId,
];
$ibsHasAnalytics = $ibsGaMeasurementId !== '' || $ibsClarityProjectId !== '';
?>
`;
}

function analyticsHeadSnippet() {
  return `<?php if ($ibsHasAnalytics): ?>
    <script>
      window.IBS_ANALYTICS_CONFIG = <?php echo json_encode($ibsAnalyticsConfig, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE); ?>;
      if (window.IBS_ANALYTICS_CONFIG.clarityProjectId) {
        window.clarity = window.clarity || function clarity() {
          (window.clarity.q = window.clarity.q || []).push(arguments);
        };
        window.clarity("consentv2", { ad_Storage: "denied", analytics_Storage: "denied" });
      }
    </script>
<?php endif; ?>`;
}

function consentBanner(locale) {
  const copy = consentCopy[locale] || consentCopy.de;
  return `<?php if ($ibsHasAnalytics): ?>
    <aside class="consent-banner" aria-label="${escapeAttribute(copy.title)}">
      <div>
        <h2>${escapeHtml(copy.title)}</h2>
        <p>${escapeHtml(copy.text)}</p>
        <a href="${copy.privacyHref}">${escapeHtml(copy.privacy)}</a>
      </div>
      <div class="consent-actions">
        <button class="button button-gold consent-primary" type="button">${escapeHtml(copy.accept)}</button>
        <button class="button button-secondary" type="button">${escapeHtml(copy.decline)}</button>
      </div>
    </aside>
<?php endif; ?>`;
}

function decodeEntities(value) {
  return value
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCharCode(parseInt(code, 16)));
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function escapeAttribute(value) {
  return escapeHtml(value);
}

function stripTags(value) {
  return decodeEntities(
    value
      .replace(/<script\b[\s\S]*?<\/script>/gi, " ")
      .replace(/<style\b[\s\S]*?<\/style>/gi, " ")
      .replace(/<noscript\b[\s\S]*?<\/noscript>/gi, " ")
      .replace(/<[^>]+>/g, " ")
  ).replace(/\s+/g, " ").trim();
}

function visibleText(html) {
  return stripTags(
    html
      .replace(/<\?php[\s\S]*?\?>/g, " ")
      .replace(/<aside\b[^>]*class="[^"]*\bconsent-banner\b[^"]*"[\s\S]*?<\/aside>/gi, " ")
      .replace(/<!--[\s\S]*?-->/g, " ")
  );
}

function stripAstroRuntime(html) {
  return html
    .replace(/<style>\s*astro-island[\s\S]*?<\/style>/gi, "")
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, (script) =>
      /customElements\.define\("astro-island"|astro-island|Astro\.hydrate|Astro\.only|Astro\.visible/.test(script) ? "" : script
    )
    .replace(/<astro-island\b[^>]*>/gi, "")
    .replace(/<\/astro-island>/gi, "")
    .replace(/<!--astro:end-->/g, "");
}

function faqSchema(html, locale) {
  const items = [];
  const faqPattern = /<details\b[^>]*class="[^"]*\bfaq-item\b[^"]*"[^>]*>[\s\S]*?<summary>[\s\S]*?<h3>([\s\S]*?)<\/h3>[\s\S]*?<\/summary>[\s\S]*?<p>([\s\S]*?)<\/p>[\s\S]*?<\/details>/gi;
  let match;
  while ((match = faqPattern.exec(html))) {
    const question = stripTags(match[1]);
    const answer = stripTags(match[2]);
    if (question && answer) {
      items.push({
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer
        }
      });
    }
  }

  if (!items.length) return "";
  return `<script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: locale,
    mainEntity: items
  })}</script>`;
}

function localeFromHtml(html) {
  const match = html.match(/<html\s+lang="([^"]+)"/i);
  return match ? match[1] : "de";
}

function transformHtml(file, html) {
  const locale = localeFromHtml(html);
  const originalVisible = visibleText(html);
  let transformed = stripAstroRuntime(html);

  const schema = faqSchema(transformed, locale);
  if (schema) {
    transformed = transformed.replace("</head>", `    ${schema}\n    ${analyticsHeadSnippet()}\n  </head>`);
  } else {
    transformed = transformed.replace("</head>", `    ${analyticsHeadSnippet()}\n  </head>`);
  }

  if (!/class="[^"]*\bconsent-banner\b/.test(transformed)) {
    transformed = transformed.replace("</body>", `${consentBanner(locale)}\n    <script src="/assets/static-site.js" defer></script>\n  </body>`);
  } else {
    transformed = transformed.replace("</body>", `    <script src="/assets/static-site.js" defer></script>\n  </body>`);
  }

  transformed = `${phpPrelude()}${transformed}`;

  const transformedVisible = visibleText(transformed);
  if (originalVisible !== transformedVisible) {
    throw new Error(`Visible content changed while generating ${file}`);
  }

  return transformed;
}

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(fullPath)));
    } else {
      files.push(fullPath);
    }
  }
  return files;
}

function targetFor(file) {
  const relative = path.relative(sourceDir, file);
  if (relative.toLowerCase().endsWith(".html")) {
    return path.join(outputDir, relative.replace(/\.html$/i, ".php"));
  }
  return path.join(outputDir, relative);
}

async function copyFile(file) {
  const relative = path.relative(sourceDir, file);
  if (relative.toLowerCase().endsWith(".html")) return;
  if (/^_astro[\\/].*\.js$/i.test(relative)) return;
  if (/\.map$/i.test(relative)) return;
  const target = targetFor(file);
  await mkdir(path.dirname(target), { recursive: true });
  await cp(file, target);
}

async function writePhpFile(file) {
  const target = targetFor(file);
  const html = await readFile(file, "utf8");
  const php = transformHtml(path.relative(sourceDir, file), html);
  await mkdir(path.dirname(target), { recursive: true });
  await writeFile(target, php, "utf8");
}

async function writeHtaccess() {
  const htaccess = `DirectoryIndex index.php index.html
ErrorDocument 404 /404.php

<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule ^(.+)/$ $1/index.php [L]
</IfModule>

<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set Referrer-Policy "strict-origin-when-cross-origin"
  Header set X-Frame-Options "SAMEORIGIN"
  <FilesMatch "\\.(css|js|webp|png|jpg|jpeg|svg|ico)$">
    Header set Cache-Control "public, max-age=31536000, immutable"
  </FilesMatch>
</IfModule>
`;
  await writeFile(path.join(outputDir, ".htaccess"), htaccess, "utf8");
}


async function writeRootHtaccess() {
  const htaccess = `DirectoryIndex index.php index.html
ErrorDocument 404 /404.php
Options -Indexes

<FilesMatch "^(package(-lock)?\\.json|tsconfig\\.json|astro\\.config\\.mjs|design\\.(md|html)|AGENTS\\.md|npm-debug\\.log.*)$">
  Require all denied
</FilesMatch>

<IfModule mod_rewrite.c>
  RewriteEngine On

  RewriteRule ^(\\.astro|\\.git|dist|dist-php|docs|node_modules|output|public|scripts|src|test-results)(/|$) - [F,L]

  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{DOCUMENT_ROOT}/$1/index.php -f
  RewriteRule ^(.+?)/?$ $1/index.php [L]

  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule ^.*$ /404.php [L]
</IfModule>

<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set Referrer-Policy "strict-origin-when-cross-origin"
  Header set X-Frame-Options "SAMEORIGIN"
  <FilesMatch "\\.(css|js|webp|png|jpg|jpeg|svg|ico)$">
    Header set Cache-Control "public, max-age=31536000, immutable"
  </FilesMatch>
</IfModule>
`;
  await writeFile(path.join(root, ".htaccess"), htaccess, "utf8");
}

async function syncRootDeploy() {
  for (const entry of rootDeployEntries) {
    await rm(path.join(root, entry), { recursive: true, force: true });
  }

  const entries = await readdir(outputDir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name === ".htaccess") continue;
    await cp(path.join(outputDir, entry.name), path.join(root, entry.name), { recursive: true });
  }

  await writeRootHtaccess();
}

async function main() {
  const sourceInfo = await stat(sourceDir).catch(() => null);
  if (!sourceInfo?.isDirectory()) {
    throw new Error("dist directory not found. Run astro build before build:php.");
  }

  await rm(outputDir, { recursive: true, force: true });
  await mkdir(outputDir, { recursive: true });

  const files = await walk(sourceDir);
  for (const file of files) await copyFile(file);
  for (const file of files.filter((item) => item.toLowerCase().endsWith(".html"))) {
    await writePhpFile(file);
  }
  await writeHtaccess();
  await syncRootDeploy();

  const phpFiles = (await walk(outputDir)).filter((file) => file.toLowerCase().endsWith(".php"));
  console.log(`Generated ${phpFiles.length} PHP files in ${path.relative(root, outputDir)} and synced static PHP/HTML deployment files to the repository root with unchanged visible content.`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
