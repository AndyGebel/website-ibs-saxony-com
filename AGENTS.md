---
date: 2026-07-09
tags: []
type: note
---

# IBS-Saxony Website Regeln

Diese Regeln gelten für das Astro-Projekt `ibs-saxony-react-site`.
Übergeordnet gelten die Vault-Regeln aus `K-01_IBS_Saxony/AGENTS.md`.

## Verbindliche Skills

Vor Website-, Copy-, Design-, SEO-, Datenschutz- oder QA-Arbeit sind diese
globalen Skills anzuwenden:

- `andreas-app-standards`
- `mira-design`
- `landing-page-framework-2026`
- `search-everywhere-seo-compliance`
- `mobile-first-conversion-testing`
- `deutsche-utf8-standards`
- `dsgvo-privacy-by-design`
- `react-tailwind-micro-corrections` bei kleinen Text-, i18n- oder
  Terminologiekorrekturen
- `playwright` für Browser- und Viewport-Prüfungen

Für größere Designarbeiten, Hero-Redesigns, visuelle Politur,
referenzbasierte Redesigns oder Design-Abnahmen gilt zusätzlich der lokale
Workflow `../../Workflows/High-End-Webdesign-Workflow.md`.

## Design-System

- `design.md` ist die kanonische Design- und QA-Grundlage.
- `design.html` ist die visuelle Begleitdatei und muss bei wesentlichen
  Design-System-Änderungen mit `design.md` synchron bleiben.
- Neue Farben, Radien, Typografiestufen, Layoutmuster oder CTA-Varianten
  werden zuerst im Design-System dokumentiert.
- Der High-End-Webdesign-Workflow darf `design.md` nicht umgehen:
  `design.md` bleibt kanonisch; `design.html` bleibt die visuelle
  Begleitdatei.
- Bestehende Astro-, React- und CSS-Konventionen haben Vorrang vor neuen
  Abstraktionen.

## Inhaltliche Leitplanken

- IBS-Saxony bewirbt operative Prozess-, Strukturierungs-, Daten-,
  Organisations- und Umsetzungsunterstützung.
- Keine Darstellung als Rechtsberatung, Insolvenzberatung, Steuerberatung,
  Finanzberatung oder sonstige verbindliche Fachberatung.
- `Erstberatung` nicht als CTA oder Leistungsversprechen verwenden. Zulässig
  sind je nach Kontext `Erstgespräch`, `kostenloses Erstgespräch`,
  `Prozessgespräch` oder `unverbindliches Orientierungsgespräch`.
- `KMU` und englisch `SME`/`SMEs` in sichtbaren Texten immer ausschreiben:
  `kleine und mittlere Unternehmen` bzw. `small and medium-sized companies`.
- Referenzen, Partnernennungen, Zitate, Zahlen, Produktversprechen,
  Nachhaltigkeitsaussagen, Logos und Fotos nur mit belegter Freigabe verwenden.
- Deutsche sichtbare Texte immer in echtem UTF-8 mit Umlauten schreiben.

## Qualitätsgate

Vor "fertig", "deploybereit" oder öffentlicher Freigabe:

- `npm run build`
- Begriffsscan gegen verbotene Beratungs-/Haftungsbegriffe
- Mojibake-Scan auf typische fehlkodierte UTF-8-Artefakte
- Live-/Preview-Prüfung der Hauptseiten
- Mobile-first Viewports: `320x568`, `360x640`, `390x844`, `768x1024`,
  `1024x768`, `1366x768`, `1440x900`, `1920x1080`, `2560x1440`
- Keine horizontalen Überläufe
- Tap-Ziele mindestens `44x44px`, soweit keine WCAG-Ausnahme bewusst
  dokumentiert ist
- CTA im ersten Viewport der Homepage sichtbar und eindeutig
- Datenschutz: keine Analytics-, Tracking-, Map- oder Embeds ohne passende
  Einwilligung, Dokumentation und Datenschutzhinweis
- SEO-Basics: eindeutige Titel und Descriptions, Canonicals, hreflang,
  Sitemap, robots.txt, strukturierte Daten nur passend zum sichtbaren Inhalt

## Deploy-Regel

Diese Website wird bis auf Weiteres ausschließlich lokal weiterentwickelt. Kein
Push, Merge, Hostinger-Deploy oder sonstiger Produktiv-Deploy, solange der
Projektverantwortliche keinen abschließenden Arbeitsstand ausdrücklich
freigegeben und den Deploy beauftragt hat.

Codex darf prüfen, korrigieren und berichten. Push, Merge, Hostinger-Deploy oder
andere produktive Veröffentlichungen erfolgen nur nach ausdrücklicher Freigabe
durch den Projektverantwortlichen.
