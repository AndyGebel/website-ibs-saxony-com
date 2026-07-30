# Hostinger Git-Deploy für statische PHP/HTML-Fassung

Stand: 2026-07-30

## Ziel

Die Website wird als statische PHP/HTML-Fassung aus dem aktuellen Astro-Snapshot gebaut. Sichtbare Inhalte bleiben im Build unverändert; `scripts/build-static-php.mjs` prüft die sichtbare Textgleichheit zwischen `dist` und `dist-php`.

## Hostinger-Einstellungen

Empfohlene Git-/Build-Konfiguration:

- Repository: `AndyGebel/website-ibs-saxony-com`
- Branch: aktueller Arbeitsbranch oder später freigegebener Production-Branch
- Install Command: `npm install`
- Build Command: `npm run build`
- Output Directory: `dist-php`
- Entry File: leer lassen, falls möglich; alternativ `index.php`

`dist-php` enthält die deploybaren Dateien: PHP-Seiten, Assets, CSS, `robots.txt`, `sitemap.xml` und `.htaccess`.

## Microsoft Clarity

Die Clarity-Projekt-ID wird über Umgebungsvariablen gelesen:

- `PUBLIC_CLARITY_PROJECT_ID` bevorzugt
- alternativ `VITE_CLARITY_PROJECT_ID`
- alternativ `CLARITY_PROJECT_ID`

Beim Git-Build wird die öffentliche Projekt-ID als Fallback in die PHP-Ausgabe eingebettet, falls Hostinger PHP zur Laufzeit keine Environment-Variable bereitstellt. Ist keine ID gesetzt, wird kein Analyse-Banner und kein Clarity-Code ausgeliefert.

## Deploy-Regel

Bis zur ausdrücklichen Freigabe wird lokal gebaut und geprüft. Ein `git push` kann bei aktivem Hostinger-Git-Deploy einen produktiven Deploy auslösen und erfolgt nur nach expliziter Freigabe.
