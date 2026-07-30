# Hostinger Git-Deploy für statische PHP/HTML-Fassung

Stand: 2026-07-30

## Ziel

Die Website wird als statische PHP/HTML-Fassung aus dem aktuellen Astro-Snapshot gebaut. Sichtbare Inhalte bleiben im Build unverändert; `scripts/build-static-php.mjs` prüft die sichtbare Textgleichheit zwischen `dist` und `dist-php`.

## Hostinger-Einstellungen

Aktuelle Git-Konfiguration laut Hostinger-Dashboard:

- Repository: `ibs-saxony` / `AndyGebel/website-ibs-saxony-com`
- Branch: `main`
- Deployment-Ziel: `public_html`
- Bereitstellung: automatisch oder manuell über Hostinger

Hostinger legt bei dieser statischen PHP/HTML-Fassung den Repository-Root in `public_html`. Deshalb werden die deploybaren Dateien beim lokalen Build zusätzlich direkt in den Repo-Root gespiegelt:

- `index.php`
- `404.php`
- `.htaccess`
- `robots.txt`
- `sitemap.xml`
- `_astro/`
- `assets/`
- `de/`
- `en/`

`dist-php` bleibt als reproduzierbares Build-Artefakt erhalten. Die produktive Auslieferung funktioniert jedoch auch dann, wenn Hostinger nur den Repository-Root nach `public_html` kopiert.


## Kontaktformular

Das klassische Kontaktformular liegt als statischer PHP-Endpunkt unter `contact-submit.php` im Webroot. Es sendet Textmails über PHP `mail()` und speichert keine Formularinhalte in einer Website-Datenbank.

Konfiguration:

- Standardempfänger: `info@ibs-saxony.com`
- Optionaler Empfänger per Environment: `IBS_CONTACT_FORM_RECIPIENT`
- Optionaler technischer Absender per Environment: `IBS_CONTACT_FORM_SENDER`

Die Domain `ibs-sachsen.de.com` zeigte beim DNS-Check am 2026-07-30 einen Null-MX-Eintrag (`.`). Diese Adresse sollte erst als Formularziel verwendet werden, wenn dort ein empfangsfähiges Postfach beziehungsweise gültige MX-Einträge eingerichtet sind.

## Microsoft Clarity

Die Clarity-Projekt-ID wird über Umgebungsvariablen gelesen:

- `PUBLIC_CLARITY_PROJECT_ID` bevorzugt
- alternativ `VITE_CLARITY_PROJECT_ID`
- alternativ `CLARITY_PROJECT_ID`

Beim Git-Build wird die öffentliche Projekt-ID als Fallback in die PHP-Ausgabe eingebettet, falls Hostinger PHP zur Laufzeit keine Environment-Variable bereitstellt. Ist keine ID gesetzt, wird kein Analyse-Banner und kein Clarity-Code ausgeliefert.

## Deploy-Regel

Bis zur ausdrücklichen Freigabe wird lokal gebaut und geprüft. Ein `git push` kann bei aktivem Hostinger-Git-Deploy einen produktiven Deploy auslösen und erfolgt nur nach expliziter Freigabe.
