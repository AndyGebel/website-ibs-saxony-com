import { site } from "../config/site.js";
import { routeMap, getPath } from "../i18n/routes.js";

function absolute(path) {
  return `${site.url}${path}`;
}

export function GET() {
  const urls = Object.entries(routeMap).filter(([key]) => key !== "styleguide").flatMap(([key, localized]) =>
    Object.entries(localized).map(([locale]) => {
      const path = getPath(locale, key);
      const alternates = Object.entries(localized)
        .map(([altLocale]) => {
          const hreflang = altLocale === "de" ? "de-DE" : "en-US";
          return `<xhtml:link rel="alternate" hreflang="${hreflang}" href="${absolute(getPath(altLocale, key))}" />`;
        })
        .join("");
      return `<url><loc>${absolute(path)}</loc>${alternates}<xhtml:link rel="alternate" hreflang="x-default" href="${absolute(getPath("de", key))}" /></url>`;
    })
  );

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join("\n")}
</urlset>`, {
    headers: {
      "Content-Type": "application/xml"
    }
  });
}
