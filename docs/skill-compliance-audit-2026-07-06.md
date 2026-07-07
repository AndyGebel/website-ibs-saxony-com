# Skill-Compliance-Audit IBS-Saxony Website

Datum: 2026-07-06

## Umfang

Geprüft wurde die lokale Preview unter `http://localhost:4323` für:

- `/de/`
- `/de/leistungen/`
- `/de/referenzen/`
- `/de/ueber-uns/`
- `/de/kontakt/`
- `/de/impressum/`
- `/de/datenschutz/`
- `/en/`
- `/en/services/`
- `/en/references/`
- `/en/about/`
- `/en/contact/`
- `/en/imprint/`
- `/en/privacy/`

Zusätzlich wurde die öffentliche Root-Domain über Websuche/Snapshot geprüft.

## Verbindliche Skills

Für diese Website sind im Projekt verbindlich festgelegt:

- `andreas-app-standards`
- `mira-design`
- `landing-page-framework-2026`
- `search-everywhere-seo-compliance`
- `mobile-first-conversion-testing`
- `deutsche-utf8-standards`
- `dsgvo-privacy-by-design`
- `react-tailwind-micro-corrections`
- `playwright`

Die Regeln sind in `AGENTS.md`, `design.md` und `design.html` verankert.

## Korrekturen aus dem Audit

- Header-, Footer- und Consent-Tap-Ziele auf mindestens `44x44px` gebracht.
- Benannte Kundenreferenz, Landehre-Zitat und konkrete Ergebnisbehauptungen aus
  dem öffentlichen React/Astro-Content entfernt.
- Referenzseite zu freigabefreien Arbeitsbeispielen mit klarem
  Freigabehinweis umgestellt.
- Der ausgeblendete Produkt-/Werkzeugabschnitt bleibt per `hidden: true`
  deaktiviert.

## Lokale technische Ergebnisse

- `npm run build`: bestanden.
- Astro-Check: 0 Fehler, 0 Warnings, 2 bekannte Type-Hints in
  `PageRenderer.astro`.
- Mojibake-Scan: keine Treffer.
- Kritische Beratungsbegriffe: keine Treffer in Leistungs-/CTA-Sprache.
- Begriffe `Rechtsberatung`, `Insolvenzberatung`, `Steuerberatung` und
  `Finanzberatung`: nur in den beabsichtigten Disclaimer-Stellen.
- Analytics/Tracking: keine externen Google-Analytics-, Clarity-, Font- oder
  Maps-Requests vor Consent in der lokalen Browserprüfung.
- `.env.example`: enthält `VITE_GA_MEASUREMENT_ID=`.
- Assets: Hero-WebP ca. 48 KB; keine externen Fonts.

## Mobile-First- und Accessibility-Gate

Geprüfte Viewports:

- `320x568`
- `360x640`
- `390x844`
- `768x1024`
- `1024x768`
- `1366x768`
- `1440x900`
- `1920x1080`
- `2560x1440`

Ergebnis:

- Keine horizontalen Überläufe.
- Page Shell bleibt auf Desktop/Ultrawide bei maximal `1440px`.
- Homepage-CTA ist im ersten Viewport sichtbar.
- Keine Tap-Ziel-Verstöße in Header, Footer, Hero, Kontakt und Consent.
- 14 geprüfte Routen liefern lokal Status 200.
- Pro Route genau ein `h1`.
- Keine sichtbaren Bilder ohne Alt-Text.
- Keine Links oder Buttons ohne zugänglichen Namen.
- `x-default` hreflang vorhanden.

## SEO- und Datenschutzstatus lokal

Bestanden:

- Eindeutige Titles und Meta Descriptions.
- Canonicals vorhanden.
- hreflang für DE/EN plus x-default vorhanden.
- `robots.txt` und `sitemap.xml` vorhanden.
- LocalBusiness-JSON-LD vorhanden.
- Datenschutzhinweis beschreibt Google Analytics nach Einwilligung.
- Footer-Disclaimer ist siteweit sichtbar.

Grenzen:

- Externe Search-Everywhere-Signale wie Google Business Profile, LinkedIn,
  YouTube-Sichtbarkeit, Partnerseiten, Search Console und AI-Zitate wurden nicht
  vollständig geprüft.
- Topic-Cluster sind noch dünn; aktuell gibt es vor allem die Kernseiten.

## Live-/Public-Blocker

Die lokale Preview erfüllt die geprüften Gates. Die öffentlich gefundene
Root-Domain `https://ibs-saxony.com/` liefert jedoch noch eine alte Version mit
u. a. `Erstberatung`, konkreter Landehre-Case-Study, Erfolgsbehauptungen und
abweichenden Stammdaten aus. Diese öffentliche Version entspricht nicht den hier
festgelegten Skills.

Die Website wird bewusst vorerst nicht deployed. Bis ein abschließender
Arbeitsstand erreicht und vom Projektverantwortlichen ausdrücklich freigegeben
ist, wird ausschließlich lokal weitergearbeitet.

Erst nach dieser Abschlussfreigabe darf die neue statische Astro-Version
veröffentlicht werden; dann muss die Root-Domain auf die neue `/de/`-Struktur
bzw. den neuen Build zeigen.

## Abschlussbewertung

Lokale Preview: bestanden.

Öffentliche Website: nicht bestanden, solange die alte Root-Version noch
ausgeliefert oder indexiert wird.

Push/Deploy wurde nicht ausgeführt.
