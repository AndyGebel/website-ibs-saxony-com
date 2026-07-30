import { site } from "../config/site.js";
import { getPath } from "../i18n/routes.js";
import { supportPages } from "./supportPages.js";

const common = {
  de: {
    nav: {
      services: "Leistungen",
      processDocs: "Abläufe",
      references: "Arbeitsbeispiele",
      about: "Über uns",
      contact: "Kontakt",
      styleguide: "Styleguide",
      cta: "Kostenloses Erstgespräch",
      languageLabel: "Sprache wechseln"
    },
    footer: {
      quickLinks: "Schnellzugriff",
      legal: "Rechtliches",
      contact: "Kontakt",
      social: "Social",
      rights: "Alle Rechte vorbehalten.",
      advisoryDisclaimerLabel: "Rechtlicher Hinweis",
      advisoryDisclaimer: "IBS-Saxony erbringt keine Rechtsberatung, Insolvenzberatung, Steuerberatung, Finanzberatung oder sonstige verbindliche Fachberatung. Unsere Unterstützung bezieht sich auf operative Abläufe, Daten, Organisation und Umsetzung; rechtliche, steuerliche, insolvenzrechtliche oder finanzielle Fragen sind durch zugelassene Fachleute zu prüfen."
    },
    consent: {
      title: "Analyse-Cookies akzeptieren?",
      text: "Wir nutzen Google Analytics und Microsoft Clarity nur, wenn Sie aktiv zustimmen. So sehen wir, welche Inhalte hilfreich sind, ohne vor Ihrer Zustimmung Tracking zu laden.",
      accept: "Ich stimme zu",
      decline: "Nur notwendige Einstellungen",
      privacy: "Datenschutz lesen",
      reset: "Cookie-Einstellungen ändern"
    },
    legalNotice: "Die deutsche Fassung ist rechtlich maßgeblich."
  },
  en: {
    nav: {
      services: "Services",
      processDocs: "Workflows",
      references: "Work examples",
      about: "About",
      contact: "Contact",
      styleguide: "Styleguide",
      cta: "Free initial call",
      languageLabel: "Switch language"
    },
    footer: {
      quickLinks: "Quick links",
      legal: "Legal",
      contact: "Contact",
      social: "Social",
      rights: "All rights reserved.",
      advisoryDisclaimerLabel: "Legal notice",
      advisoryDisclaimer: "IBS-Saxony does not provide legal, insolvency, tax, financial or other binding professional advice. Our support is limited to operational workflows, data, organization and implementation; legal, tax, insolvency or financial questions must be reviewed by qualified professionals."
    },
    consent: {
      title: "Accept analytics cookies?",
      text: "We only load Google Analytics and Microsoft Clarity after your active consent. This helps us understand which content is useful without tracking before you opt in.",
      accept: "I agree",
      decline: "Necessary settings only",
      privacy: "Read privacy policy",
      reset: "Change cookie settings"
    },
    legalNotice: "The German version is legally binding and prevails."
  }
};

const pages = {
  de: {
    home: {
      title: "IBS-Saxony | In 7 Tagen zum ersten Entlastungsschritt",
      description: "IBS-Saxony macht operative Reibung in einem realen Ablauf sichtbar und bereitet im 7-Tage-Start den ersten umsetzbaren Schritt für kleine und mittlere Unternehmen in Sachsen vor.",
      hero: {
        kicker: "Prozessoptimierung und Systemintegration in Sachsen",
        heading: "7-Tage-Start. Ersten Engpass greifbar machen.",
        text: "IBS-Saxony startet mit einem realen Ablauf: 30 Minuten Erstgespräch, 48 Stunden Engpassbild und danach eine kleine Startmaßnahme. So wird schnell sichtbar, ob und wo Arbeitszeit zurückkommen kann.",
        primary: "7-Tage-Start kostenlos prüfen",
        secondary: "Arbeitsbeispiele ansehen",
        secondaryRoute: "references",
        note: "Kostenloses Erstgespräch. Kein Workshop-Marathon. Kostenpflichtige Arbeit startet erst nach schriftlich bestätigtem Preisrahmen.",
        proof: [
          ["30 Minuten", "ein Ablauf und eine verantwortliche Person reichen für den Einstieg"],
          ["48 Stunden", "Engpassbild mit Zeitfressern, Doppeleingaben und Übergaben"],
          ["7 Tage", "erste Startmaßnahme oder klare Entscheidung gegen ein Projekt"]
        ],
        chips: ["0 € Erstgespräch", "48 Stunden Engpassbild", "Preisrahmen vor Folgeauftrag"],
        panel: {
          title: "Was nach 7 Tagen klar sein soll",
          text: "Aus einem diffusen Reibungsgefühl wird ein konkreter Ablauf mit Engpass, Verantwortlichkeit und kleiner nächster Maßnahme.",
          items: ["Ablauf ausgewählt", "Zeitfresser markiert", "Startmaßnahme festgelegt"]
        }
      },
      sections: [
        {
          type: "problem",
          title: "Wenn Abläufe wachsen, wächst oft auch die Reibung.",
          text: "Der Verlust wirkt klein: eine Datei suchen, eine Zahl noch einmal eintippen, auf eine Freigabe warten, einen Beleg nachreichen. Wiederholt sich das jede Woche, verschwindet Arbeitszeit, die eigentlich für Kunden, Betrieb und Entscheidungen gebraucht wird.",
          points: ["Doppeleingaben kosten Konzentration", "Suchzeiten unterbrechen Facharbeit", "Unklare Übergaben verzögern Entscheidungen"]
        },
        {
          type: "offer",
          title: "Ein Ablauf. Ein Gespräch. Kein Workshop-Marathon.",
          text: "Der Einstieg braucht keine monatelange Analyse und keine interne Projektgruppe. Wir nehmen einen echten Ablauf aus Ihrem Betrieb und prüfen ihn auf operative Reibung, Datenbrüche und den kleinsten sinnvollen nächsten Schritt.",
          cards: [
            ["30 Minuten Einstieg", "Wir wählen einen Ablauf, der heute spürbar Zeit kostet, und klären, wer dafür im Alltag zuständig ist."],
            ["Eine verantwortliche Person reicht", "Für den Start muss nicht das ganze Team in Meetings sitzen. Eine Person mit Prozesswissen genügt meistens."],
            ["Vorhandenes Material nutzen", "Screenshots, Tabellen, Belege, Aufgabenlisten oder kurze Bildschirmfreigaben reichen oft für den ersten Überblick."],
            ["Nächster Schritt in 48 Stunden", "Sie erhalten ein kompaktes Engpassbild: ändern, strukturieren, verbinden, automatisieren oder bewusst nichts starten."]
          ]
        },
        {
          type: "timeline",
          title: "Typischer Zeitrahmen bis zum ersten spürbaren Ergebnis",
          text: "Der 7-Tage-Start ist kein fertiges Digitalisierungsprojekt. Er schafft Klarheit, senkt Abstimmungsaufwand und bringt eine erste kleine Maßnahme auf den Tisch.",
          cards: [
            ["Tag 1: Ablauf festlegen", "Im kostenlosen Erstgespräch wählen wir einen konkreten Ablauf mit sichtbarer Reibung."],
            ["Nach 48 Stunden: Engpassbild", "Sie sehen, wo Suchzeit, Doppeleingaben, Wartezeit oder Systembrüche entstehen."],
            ["Bis Tag 7: Startmaßnahme", "Wir bereiten eine kleine Maßnahme vor, die ohne Großprojekt getestet oder umgesetzt werden kann."],
            ["Danach: bewusst entscheiden", "Weiter geht es nur, wenn Nutzen, Aufwand, Umfang und Preisrahmen klar genug sind."]
          ]
        },
        {
          type: "proof",
          title: "Bestätigte Arbeitsbeispiele aus Landwirtschaft und Frischekistenvertrieb",
          text: "Zwei freigegebene Referenzen zeigen, wie IBS-Saxony operative Abläufe in echte Entlastung übersetzt: von schlagbezogener Dokumentation bis Kommissionierung und Auslieferung.",
          cards: [
            {
              title: "LWB Landehre Christian Peschel",
              subtitle: "Gewürzproduktion und Ackerbau",
              logo: "/assets/reference-logo-lwb-landehre.webp",
              logoAlt: "Logo LWB Landehre",
              result: "Schlagsoftware aktualisiert die Schlagkartei aus Arbeitsaufgaben je Schlag.",
              text: "IBS-Saxony unterstützt beim Aufbau einer Gewürzproduktion und bei digitalen Abläufen im Ackerbau. Arbeitsaufgaben werden schlagbezogen strukturiert, damit Dokumentation und Betriebsdaten näher an der tatsächlichen Arbeit bleiben.",
              proofPoints: ["Aufbau Gewürzproduktion", "Schlagbezogene Aufgabenlogik", "Aktualisierung der Schlagkartei"]
            },
            {
              title: "Obsthof Ibisch, Birgit Herrmann",
              subtitle: "Frischekistenvertrieb, Kommissionierung und Auslieferung",
              logo: "/assets/reference-logo-obsthof-ibisch.png",
              logoAlt: "Logo Obsthof Ibisch",
              result: "2026-Umsetzung mit Ziel: ca. 30 % weniger Arbeitszeit im digitalisierten Ablauf.",
              text: "Der Frischekistenvertrieb wird in 2026 vom Auftrag über Kommissionierung bis zur Auslieferung digitalisiert. Ziel ist, manuelle Abstimmung zu reduzieren und den Tagesablauf planbarer zu machen.",
              proofPoints: ["Digitale Auftragsstruktur in 2026", "Kommissionierung bis Auslieferung", "Ziel: ca. 30 % Arbeitszeit einsparen"]
            }
          ]
        },
        {
          type: "pricing",
          title: "Was kostet die eigentliche Arbeit?",
          text: "Das Erstgespräch kostet 0 €. Danach beginnt keine bezahlte Arbeit automatisch: Vor jedem Folgeauftrag werden Ziel, Umfang, nächstes Ergebnis und Preisrahmen schriftlich geklärt.",
          cards: [
            ["0 € Erstgespräch", "Ein konkreter Ablauf, 30 Minuten Zeit und vorhandene Unterlagen reichen für die erste operative Einschätzung."],
            ["Preisrahmen vor Start", "Wenn ein 7-Tage-Start sinnvoll ist, wird vor Beginn festgelegt, was geprüft oder vorbereitet wird und welcher Kostenrahmen dafür gilt."],
            ["Begrenzter Umsetzungsblock", "Kleine Maßnahmen werden als klar abgegrenzter Arbeitsblock gedacht: ein Ablauf, ein Ergebnis, eine bewusste Freigabe."],
            ["Etappen statt offener Aufwand", "Größere Systemintegration oder Smart-Farming-Projekte werden in nachvollziehbare Etappen zerlegt, damit Nutzen, Aufwand und Stopppunkte sichtbar bleiben."]
          ]
        },
        {
          type: "audiences",
          title: "Für Unternehmen, die praktisch digitalisieren wollen",
          text: "IBS-Saxony verbindet Prozessdenken, regionale Nähe und technisches Verständnis. Besonders stark ist der Ansatz dort, wo Verwaltung, Betrieb, Fläche, Kundenkontakt und Nachweise zusammenlaufen.",
          cards: [
            ["Mittelstand", "Bessere Übersicht über Aufträge, Dokumente, Zuständigkeiten und wiederkehrende Verwaltungsaufgaben."],
            ["Landwirtschaft", "Strukturierte Daten, digitale Dokumentation, Schlagkartei-Logik und Smart-Farming-Prozesse mit Praxisbezug."],
            ["Regionale Projekte", "Koordination von Partnern, Produktdaten, Energie-, Agrar- und Vermarktungsprozessen in nachvollziehbaren Abläufen."]
          ]
        },
        {
          type: "services",
          title: "Vier Hebel, die aus Reibung wieder Arbeitszeit machen",
          cards: [
            ["Abläufe sichtbar machen", "Nicht das Produkt steht am Anfang, sondern der Ablauf, in dem heute Zeit verloren geht."],
            ["Datenübergaben ordnen", "ERP, Warenwirtschaft, Buchhaltung, Dokumentation und Fachsoftware werden so gedacht, dass weniger manuell übertragen wird."],
            ["Teams entlasten", "Routinearbeit, Suchzeiten und Medienbrüche werden reduziert, damit Fachkräfte wieder näher an Kunden, Betrieb und Entscheidungen arbeiten."],
            ["Smart Farming & Betriebsdaten", "Für Landwirtschaftsbetriebe werden digitale Dokumentation, Schlagkartei-Logik und Betriebsdaten so strukturiert, dass sie praktisch nutzbar bleiben."]
          ]
        },
        {
          type: "risk",
          title: "Niedriger Aufwand, klare Entscheidung",
          text: "Sie sollen nicht nach einem Gespräch in ein unübersichtliches Projekt rutschen. Der Einstieg ist bewusst klein, damit Ihr Team nicht erst mehrere Meetings vorbereiten muss.",
          cards: [
            ["0 € Erstgespräch", "Der erste Prozess-Check ist kostenlos und unverbindlich."],
            ["Kein Vorbereitungspaket", "Ein realer Ablauf und vorhandene Unterlagen reichen für den ersten Blick meistens aus."],
            ["Ein Arbeitsblock statt Meeting-Serie", "Wir bündeln Rückfragen und machen den nächsten Schritt so klein wie möglich."],
            ["Keine Projektfreigabe ohne Klarheit", "Ein Folgeauftrag startet erst, wenn Ziel, Umfang und Preisrahmen schriftlich bestätigt sind."],
            ["Fachfragen bleiben bei Fachleuten", "Rechtliche, steuerliche, insolvenzrechtliche oder finanzielle Bewertungen werden nicht ersetzt."]
          ]
        },
        {
          type: "process",
          title: "So wird in 7 Tagen aus Reibung ein Startpunkt",
          text: "Der erste Schritt bleibt bewusst klein: einen Ablauf ansehen, Engpässe priorisieren und nur dann weitermachen, wenn ein operativer Hebel sichtbar ist.",
          steps: [
            ["1", "Ablauf auswählen", "30 Minuten reichen, um einen wiederkehrenden Ablauf und die wichtigsten Beteiligten zu benennen."],
            ["2", "Engpassbild erstellen", "Innerhalb von 48 Stunden ordnen wir Zeitfresser, Datenbrüche, Übergaben und offene Fragen."],
            ["3", "Startmaßnahme umsetzen oder stoppen", "Bis Tag 7 steht eine kleine Maßnahme oder die bewusste Entscheidung, kein Projekt zu starten."]
          ]
        }
      ],
      finalCta: {
        kicker: "Nächster Schritt",
        title: "In einer Woche kann der erste Engpass greifbar sein.",
        text: "Im kostenlosen Erstgespräch prüfen wir einen realen Ablauf und klären, ob ein 7-Tage-Start sinnvoll ist."
      },
      faq: [
        ["Was passiert im Erstgespräch?", "Wir sprechen 30 Minuten über einen konkreten Ablauf, beteiligte Systeme, wiederkehrende Reibungspunkte und mögliche erste operative Verbesserungen. Daraus entsteht keine rechtliche, steuerliche, finanzielle oder insolvenzbezogene Bewertung, sondern eine praktische Orientierung für die nächsten Schritte."],
        ["Ist das Erstgespräch kostenlos?", "Ja. Das erste Orientierungsgespräch ist kostenlos und unverbindlich. Es dient dazu, operative Ansatzpunkte zu erkennen und zu prüfen, ob eine Zusammenarbeit sinnvoll ist."],
        ["Wie schnell sieht man ein Ergebnis?", "Wenn ein konkreter Ablauf und die wichtigsten Informationen verfügbar sind, entsteht typischerweise innerhalb von 48 Stunden ein Engpassbild. Bis Tag 7 kann eine kleine Startmaßnahme vorbereitet oder getestet werden. Größere Umsetzungen hängen vom Umfang ab."],
        ["Wie viel Aufwand entsteht für unser Team?", "Für den Einstieg reicht meistens eine verantwortliche Person mit Prozesswissen. Wir nutzen vorhandene Unterlagen, Screenshots, Tabellen oder kurze Bildschirmfreigaben und vermeiden unnötige Meeting-Serien."],
        ["Was kostet die eigentliche Arbeit?", "Das Erstgespräch kostet 0 €. Für bezahlte Folgearbeit gibt es vor dem Start einen schriftlichen Preisrahmen mit Ziel, Umfang und nächstem Ergebnis. Ohne bestätigten Preisrahmen beginnt keine kostenpflichtige Arbeit."],
        ["Wie viel Zeit kann realistisch zurückkommen?", "Das hängt vom Ablauf ab. Wir versprechen keine pauschale Stundenersparnis. Ziel des Erstgesprächs ist, den ersten konkreten Hebel sichtbar zu machen, der wiederkehrende Suchzeit, Doppeleingaben oder Wartezeiten reduziert."],
        ["Gibt es eine Garantie?", "Es gibt keine pauschale Erfolgsgarantie. Die Risikoumkehr liegt im kontrollierten Start: Das Erstgespräch ist kostenlos, ein Folgeauftrag startet nur nach klarer Freigabe und wenn kein sinnvoller operativer Ansatz sichtbar wird, empfehlen wir keinen Auftrag."],
        ["Unterstützen Sie auch in angespannten Unternehmensphasen?", "Ja, operativ: Wir helfen dabei, Abläufe, Unterlagen, Daten und Zuständigkeiten zu ordnen, damit Teams wieder handlungsfähiger werden. Fachliche Bewertungen und verbindliche Entscheidungen bleiben bei den jeweils zugelassenen Fachleuten."],
        ["Arbeiten Sie auch mit kleinen Betrieben?", "Ja. Gerade kleinere Teams profitieren von klaren Abläufen, weil Suchzeiten, Doppeleingaben und unklare Zuständigkeiten sofort spürbar sind."],
        ["Brauchen wir technisches Vorwissen?", "Nein. Wir übersetzen technische Themen in verständliche Schritte und achten darauf, dass Ihr Team die Lösung praktisch nutzen kann."],
        ["Welche Regionen betreut IBS-Saxony?", "Der Schwerpunkt liegt auf Sachsen sowie angrenzenden Projekten in Sachsen-Anhalt und Thüringen. Remote-Abstimmungen sind möglich, wenn sie zum Vorhaben passen."]
      ]
    },
    services: {
      title: "Leistungen | IBS-Saxony",
      description: "Prozessoptimierung, Schnittstellen, Mitarbeiterentlastung und Smart Farming für Unternehmen in Sachsen.",
      heading: "Leistungen für mehr wirksame Arbeitszeit",
      intro: "Wir verbinden Analyse, Strukturierung und Umsetzung. Jede Leistung beginnt dort, wo wachsende Abläufe Reibung erzeugen, und endet erst, wenn der neue Ablauf praktisch nutzbar ist.",
      serviceBlocks: [
        ["Abläufe verbessern", "Wir machen sichtbar, wo Arbeit hängen bleibt, welche Schritte doppelt laufen und welche Entscheidungen durch bessere Daten vorbereitet werden können."],
        ["Schnittstellen schaffen", "Wir verbinden isolierte Systeme und reduzieren manuelle Übertragung zwischen ERP, Warenwirtschaft, Buchhaltung, Dokumentation und Fachsoftware."],
        ["Mitarbeiter entlasten", "Automatisierung nimmt Routineaufgaben aus dem Tagesgeschäft, damit Fachkräfte sich auf Kunden, Produktion und Entwicklung konzentrieren können."],
        ["Smart Farming entwickeln", "Von digitaler Schlagkartei bis datenbasierter Betriebsführung: Wir wählen Technologien so aus, dass sie zu Hof, Team, Nachweisen und praktischer Umsetzung passen."]
      ],
      comparisonTitle: "Vorher und nachher",
      comparison: [
        ["Zeitaufwand", "Manuelle Suche und Doppeleingaben", "Klare Abläufe und automatisierte Übergaben"],
        ["Datenqualität", "Mehrere Versionen derselben Information", "Eine verlässliche Datenbasis"],
        ["Skalierung", "Mehr Wachstum bedeutet mehr Verwaltungsdruck", "Systeme wachsen mit, ohne proportional mehr Aufwand"]
      ],
      relatedTitle: "Spezialseite für dokumentennahe Abläufe",
      relatedText: "Für Betriebe, bei denen Nachweise, Freigaben, Dateien und Zuständigkeiten den Alltag bremsen, gibt es eine eigene Übersicht zu Prozess- und Dokumentationsabläufen.",
      relatedCta: "Prozess- und Dokumentationsabläufe ansehen",
      relatedRoute: "processDocs"
    },
    processDocs: {
      title: "Prozess- und Dokumentationsabläufe | IBS-Saxony",
      description: "IBS-Saxony ordnet operative Prozess- und Dokumentationsabläufe: Arbeitsschritte, Datenquellen, Zuständigkeiten, Freigaben und nächste Maßnahmen ohne Großprojekt.",
      heading: "Prozess- und Dokumentationsabläufe klar ordnen",
      intro: "Wenn ERP, E-Mails, Dateien, Nachweise und Fachsoftware nebeneinander laufen, entsteht Reibung. IBS-Saxony macht sichtbar, welche Arbeitsschritte, Datenquellen, Dokumente und Zuständigkeiten heute beteiligt sind und welcher nächste operative Schritt Entlastung bringen kann.",
      heroPoints: ["System-Silos sichtbar machen", "Nachweise schneller finden", "Freigaben und Zuständigkeiten klären"],
      problemTitle: "Wenn Dokumente wandern, wächst oft die Reibung.",
      problemText: "Viele Teams verlieren Zeit nicht durch eine große Schwachstelle, sondern durch viele kleine Brüche: Daten werden doppelt gepflegt, Nachweise manuell gesucht, Freigaben bleiben hängen oder neue Tools passen nicht zum echten Arbeitsalltag.",
      problemCards: [
        ["System-Silos", "Informationen liegen in mehreren Systemen. Daraus entstehen Doppeleingaben, abweichende Datenstände und Rückfragen."],
        ["Manuelle Suche", "Nachweise, Dateien und Kennzahlen werden händisch zusammengesucht. Zuständigkeiten sind nicht immer eindeutig."],
        ["Software-Mismatch", "Neue digitale Werkzeuge helfen wenig, wenn sie nicht zum tatsächlichen Ablauf, Team und Dokumentationsbedarf passen."]
      ],
      flowTitle: "Vom Reibungspunkt zum nächsten umsetzbaren Ablauf",
      flowText: "Der Einstieg bleibt bewusst klein: Wir betrachten einen realen Ablauf, trennen schnelle Verbesserungen von Themen mit weiterem Prüfbedarf und bereiten den nächsten operativen Schritt vor.",
      flowSteps: [
        ["1", "Abläufe ansehen", "Wir erfassen, welche Arbeitsschritte, Systeme, Dokumente und Datenquellen heute beteiligt sind."],
        ["2", "Engpässe priorisieren", "Wir markieren Suchzeiten, Doppeleingaben, unklare Übergaben und Stellen, an denen Fachprüfung nötig sein kann."],
        ["3", "Umsetzung vorbereiten", "Sie erhalten eine klare nächste Maßnahme: Prozessänderung, Dokumentenstruktur, Schnittstelle, Vorlage oder Projektplan."]
      ],
      schema: {
        title: "Schema: Drei Hebel für weniger Reibung",
        text: "Das Schema fasst den Arbeitsansatz visuell zusammen: Prozesse sichtbar machen, Systeme nahtlos verbinden, Teams spürbar entlasten und daraus ein fokussiertes Vorgehen ableiten.",
        image: "/assets/ibs-saxony-schema-mehr-wirksame-arbeitszeit.webp",
        alt: "Schema zur Prozessoptimierung mit drei Hebeln: Prozesse sichtbar machen, Systeme nahtlos verbinden und Teams spürbar entlasten. Ergänzt durch Fokus auf praktische Digitalisierung, 3-Schritte-Weg und regionale Nähe in Sachsen.",
        caption: "Visuelle Übersicht aus dem IBS-Saxony Schema zur Prozessoptimierung."
      },
      deliverableTitle: "Was am Ende greifbar wird",
      deliverables: [
        ["Ablaufkarte", "Ein verständlicher Überblick, wer was wann braucht, wo Daten entstehen und wo Dokumente weitergegeben werden."],
        ["Dokumentenstruktur", "Eine Ordnung für Dateien, Nachweise, Freigaben und wiederkehrende Unterlagen, die im Alltag gefunden werden muss."],
        ["Rollen und Übergaben", "Klare operative Zuständigkeiten, damit Rückfragen, Wartezeiten und doppelte Pflege reduziert werden."],
        ["Nächster Arbeitsblock", "Eine kleine umsetzbare Maßnahme mit Ziel, Umfang und Preisrahmen vor kostenpflichtigem Start."]
      ],
      focusTitle: "Besonders hilfreich für",
      focusCards: [
        ["Kleine und mittlere Unternehmen", "Aufträge, Dokumente, E-Mails und Zuständigkeiten werden so geordnet, dass weniger Zeit in Verwaltung und Suche verschwindet."],
        ["Landwirtschaft", "Digitale Dokumentation, Schlagkartei-Logik, Betriebsdaten und Nachweise werden näher an den tatsächlichen Arbeitsaufgaben strukturiert."],
        ["Regionale Projekte", "Partner, Produktdaten, Energie-, Agrar- und Vermarktungsprozesse werden in nachvollziehbare Abläufe gebracht."]
      ],
      boundaryTitle: "Klare operative Grenzen",
      boundaryText: "IBS-Saxony unterstützt bei operativen Abläufen, Daten, Dokumenten, Organisation und Umsetzung. Wir erbringen keine Rechtsberatung, Insolvenzberatung, Steuerberatung, Finanzberatung oder sonstige verbindliche Fachberatung. Rechtliche, steuerliche, insolvenzrechtliche oder finanzielle Fragen sind durch zugelassene Fachleute zu prüfen.",
      ctaTitle: "Aus Reibung wird ein klarer Ablauf.",
      ctaText: "Im kostenlosen Erstgespräch prüfen wir, welcher dokumentennahe oder operative Engpass zuerst entlastet werden sollte."
    },
    references: {
      title: "Arbeitsbeispiele | IBS-Saxony",
      description: "Bestätigte Arbeitsbeispiele für operative Prozessoptimierung, Digitalisierung und Datenstrukturierung durch IBS-Saxony.",
      heading: "Bestätigte Referenzen, die operative Wirkung zeigen",
      intro: "Diese Arbeitsbeispiele sind zur Referenznutzung bestätigt. Sie zeigen, wie IBS-Saxony gewachsene Abläufe in Landwirtschaft, Vertrieb, Kommissionierung und Auslieferung operativ strukturiert.",
      noticeTitle: "Belastbar, aber datensparsam",
      notice: "Die genannten Betriebe werden als Referenzen geführt. Weitere interne Details, personenbezogene Daten, Vertragsinhalte oder zusätzliche Zahlen veröffentlichen wir nur, wenn sie ausdrücklich freigegeben sind.",
      cases: [
        {
          title: "LWB Landehre Christian Peschel",
          subtitle: "Gewürzproduktion und Ackerbau",
          logo: "/assets/reference-logo-lwb-landehre.webp",
          logoAlt: "Logo LWB Landehre",
          result: "Schlagsoftware aktualisiert die Schlagkartei aus Arbeitsaufgaben je Schlag.",
          text: "IBS-Saxony unterstützt beim Aufbau einer Gewürzproduktion und bei Softwareabläufen für den Ackerbau. Aufgaben werden schlagbezogen strukturiert, damit Dokumentation und Betriebsdaten aus der realen Arbeit heraus gepflegt werden können.",
          proofPoints: ["Aufbau Gewürzproduktion", "Schlagbezogene Aufgabenlogik", "Aktualisierung der Schlagkartei"]
        },
        {
          title: "Obsthof Ibisch, Birgit Herrmann",
          subtitle: "Frischekistenvertrieb, Kommissionierung und Auslieferung",
          logo: "/assets/reference-logo-obsthof-ibisch.png",
          logoAlt: "Logo Obsthof Ibisch",
          result: "2026-Umsetzung mit Ziel: ca. 30 % weniger Arbeitszeit im digitalisierten Ablauf.",
          text: "Der Frischekistenvertrieb wird in 2026 vom Auftrag bis zur Kommissionierung und Auslieferung digitalisiert. Ziel ist, manuelle Abstimmung zu reduzieren, Übergaben klarer zu machen und im digitalen Ablauf rund 30 % Arbeitszeit einzusparen.",
          proofPoints: ["Digitale Auftragsstruktur in 2026", "Kommissionierung bis Auslieferung", "Ziel: rund 30 % Arbeitszeit einsparen"]
        }
      ]
    },
    about: {
      title: "Über IBS-Saxony | Digitalisierung mit Praxisbezug",
      description: "IBS-Saxony begleitet Unternehmen in Sachsen mit klarer Sprache, regionaler Nähe und praktischer Umsetzung.",
      heading: "Wir sind IBS-Saxony",
      intro: "Ihr Partner für integrierte Unternehmenslösungen in Sachsen: nahbar, technisch stark und konsequent auf praktikable Umsetzung ausgerichtet.",
      values: [
        ["Ehrlichkeit & Klarheit", "Wir sagen, was machbar ist, was warten sollte und welche Schritte zuerst Wirkung bringen."],
        ["Praxisorientierung", "Eine Lösung ist erst gut, wenn sie im Betrieb angenommen wird und den Alltag vereinfacht."],
        ["Langfristige Partnerschaft", "Wir begleiten nicht nur Konzepte, sondern Einführung, Schulung und Weiterentwicklung."]
      ],
      ceoText: "Andreas Gebel verbindet Erfahrung in Prozessoptimierung, IT- und Prozesspraxis und Landwirtschaftstechnologie mit einem klaren Anspruch: komplexe Themen verständlich machen und gemeinsam tragfähige Lösungen bauen."
    },
    contact: {
      title: "Kontakt | IBS-Saxony kostenloses Erstgespräch anfragen",
      description: "Kontaktieren Sie IBS-Saxony per E-Mail, Telefon oder WhatsApp für ein kostenloses, unverbindliches Prozessgespräch.",
      heading: "Kostenloses Erstgespräch zu Ihren Abläufen",
      intro: "Das erste Prozessgespräch ist kostenlos und unverbindlich. Wir klären operative Abläufe, beteiligte Systeme und sinnvolle nächste Schritte. Rechtliche, steuerliche, insolvenzrechtliche oder finanzielle Einzelfragen gehören zu den jeweils zuständigen Fachleuten.",
      options: [
        ["E-Mail", site.company.email, site.company.emailHref],
        ["Telefon", site.company.phone, site.company.phoneHref],
        ["WhatsApp", "Direktnachricht starten", site.company.whatsappHref]
      ],
      note: "Beim Klick auf WhatsApp verlassen Sie diese Website und öffnen einen externen Dienst. IBS-Saxony erbringt keine Rechtsberatung, Insolvenzberatung, Steuerberatung, Finanzberatung oder sonstige verbindliche Fachberatung."
    },
    imprint: {
      title: "Impressum | IBS-Saxony",
      description: "Impressum der IBS-Saxony UG (haftungsbeschränkt).",
      heading: "Impressum"
    },
    privacy: {
      title: "Datenschutz | IBS-Saxony",
      description: "Datenschutzerklärung der IBS-Saxony UG mit Informationen zu Hosting, Kontaktaufnahme, externen Links, Google Analytics und Microsoft Clarity nach Einwilligung.",
      heading: "Datenschutzerklärung"
    },
    styleguide: {
      title: "Styleguide | IBS-Saxony",
      description: "Wiederverwendbarer Brand- und UI-Styleguide für IBS-Saxony.",
      heading: "IBS-Saxony Styleguide",
      intro: "Ein kompaktes System für Website, Präsentationen und digitale Oberflächen: klar, technisch präzise und vertrauenswürdig."
    }
  },
  en: {
    home: {
      title: "IBS-Saxony | First relief step within a 7-day start",
      description: "IBS-Saxony makes operational friction visible in one real workflow and prepares the first actionable step within a 7-day start for small and medium-sized companies in Saxony.",
      hero: {
        kicker: "Process optimization and systems integration in Saxony",
        heading: "7-day start. Make the first bottleneck tangible.",
        text: "IBS-Saxony starts with one real workflow: 30 minutes initial call, a bottleneck snapshot within 48 hours and then one small starting measure. This quickly shows whether and where working time can be regained.",
        primary: "Check the 7-day start for free",
        secondary: "View work examples",
        secondaryRoute: "references",
        note: "Free initial call. No workshop marathon. Paid work starts only after a written price range has been confirmed.",
        proof: [
          ["30 minutes", "one workflow and one responsible person are enough to start"],
          ["48 hours", "bottleneck snapshot with time drains, duplicate entry and handovers"],
          ["7 days", "first starting measure or a clear decision against a project"]
        ],
        chips: ["0 € initial call", "48-hour bottleneck snapshot", "price range before follow-up work"],
        panel: {
          title: "What should be clear after 7 days",
          text: "A vague feeling of friction becomes one concrete workflow with bottleneck, responsibility and a small next measure.",
          items: ["Workflow selected", "Time drains marked", "Starting measure defined"]
        }
      },
      sections: [
        {
          type: "problem",
          title: "When workflows grow, friction often grows with them.",
          text: "The loss often looks small: searching for a file, entering a number again, waiting for approval, finding a missing document. Repeated every week, this consumes working time that should be spent on customers, operations and decisions.",
          points: ["Duplicate entry costs concentration", "Search time interrupts skilled work", "Unclear handovers slow decisions"]
        },
        {
          type: "offer",
          title: "One workflow. One call. No workshop marathon.",
          text: "The entry point does not require months of analysis or an internal project group. We take one real workflow from your business and check it for operational friction, data breaks and the smallest useful next step.",
          cards: [
            ["30-minute entry", "We select one workflow that currently costs visible time and clarify who owns it day to day."],
            ["One responsible person is enough", "The whole team does not need to sit in meetings at the start. One person with process knowledge is usually enough."],
            ["Use existing material", "Screenshots, spreadsheets, documents, task lists or short screen shares are often enough for the first overview."],
            ["Next step within 48 hours", "You receive a compact bottleneck snapshot: change, structure, connect, automate or deliberately do nothing."]
          ]
        },
        {
          type: "timeline",
          title: "Typical timeframe until the first tangible result",
          text: "The 7-day start is not a finished digitalization project. It creates clarity, reduces coordination effort and puts one small measure on the table.",
          cards: [
            ["Day 1: select workflow", "In the free initial call, we select one concrete workflow with visible friction."],
            ["After 48 hours: bottleneck snapshot", "You see where search time, duplicate entry, waiting time or system breaks occur."],
            ["By day 7: starting measure", "We prepare one small measure that can be tested or implemented without a large project."],
            ["Then: decide deliberately", "Work continues only when benefit, effort, scope and price range are clear enough."]
          ]
        },
        {
          type: "proof",
          title: "Verified work examples from agriculture and fresh-box distribution",
          text: "Two approved references show how IBS-Saxony turns operational workflows into practical relief: from field-specific documentation to picking and delivery.",
          cards: [
            {
              title: "LWB Landehre Christian Peschel",
              subtitle: "Spice production and arable farming",
              logo: "/assets/reference-logo-lwb-landehre.webp",
              logoAlt: "LWB Landehre logo",
              result: "Field software updates the field record from work tasks per field.",
              text: "IBS-Saxony supports the build-up of spice production and digital workflows for arable farming. Work tasks are structured by field so documentation and operational data stay closer to actual work.",
              proofPoints: ["Spice-production setup", "Field-specific task logic", "Field-record updates"]
            },
            {
              title: "Obsthof Ibisch, Birgit Herrmann",
              subtitle: "Fresh-box distribution, picking and delivery",
              logo: "/assets/reference-logo-obsthof-ibisch.png",
              logoAlt: "Obsthof Ibisch logo",
              result: "2026 implementation target: approx. 30% less working time in the digital workflow.",
              text: "The fresh-box distribution workflow is scheduled to be digitalized in 2026 from order handling through picking to delivery. The goal is to reduce manual coordination and make the daily workflow easier to plan.",
              proofPoints: ["Digital order structure in 2026", "Picking through delivery", "target: approx. 30% working time saved"]
            }
          ]
        },
        {
          type: "pricing",
          title: "What does the actual work cost?",
          text: "The initial call costs 0 €. Paid work does not start automatically afterwards: before any follow-up work, goal, scope, next result and price range are confirmed in writing.",
          cards: [
            ["0 € initial call", "One concrete workflow, 30 minutes and existing material are enough for the first operational assessment."],
            ["Price range before start", "If a 7-day start makes sense, the scope and cost range are defined before the work begins."],
            ["Limited implementation block", "Small measures are treated as clearly defined work blocks: one workflow, one result and one deliberate approval."],
            ["Stages instead of open effort", "Larger systems integration or smart-farming projects are split into traceable stages so benefit, effort and stop points remain visible."]
          ]
        },
        {
          type: "audiences",
          title: "For companies that want practical digitalization",
          text: "IBS-Saxony combines process thinking, regional proximity and technical understanding. The approach is strongest where operations, documentation, customers and compliance meet.",
          cards: [
            ["Small and medium-sized companies", "Better overview of orders, documents, responsibilities and recurring administrative tasks."],
            ["Agriculture", "Structured data, digital documentation, field-record logic and practical smart-farming processes."],
            ["Regional projects", "Coordination of partners, product data, energy, agriculture and sales processes in traceable workflows."]
          ]
        },
        {
          type: "services",
          title: "Four levers that turn friction back into working time",
          cards: [
            ["Make workflows visible", "The work starts with the workflow where time is currently lost, not with a product."],
            ["Organize data handovers", "ERP, inventory, accounting, documentation and specialist tools are planned so less is transferred manually."],
            ["Relieve teams", "Routine work, search time and media breaks are reduced so skilled people work closer to customers, operations and decisions."],
            ["Smart Farming & operational data", "For agricultural businesses, digital documentation, field-record logic and operational data are structured so they remain practical to use."]
          ]
        },
        {
          type: "risk",
          title: "Low effort, clear decision",
          text: "You should not slide from one conversation into an unclear project. The entry point is deliberately small so your team does not have to prepare several meetings first.",
          cards: [
            ["0 € initial call", "The first process check is free and non-binding."],
            ["No preparation package", "One real workflow and existing documents are usually enough for the first look."],
            ["One work block instead of a meeting series", "We bundle questions and make the next step as small as possible."],
            ["No project without clarity", "Follow-up work starts only after goal, scope and price range are confirmed in writing."],
            ["Specialist questions stay with specialists", "Legal, tax, insolvency-related or financial assessments are not replaced."]
          ]
        },
        {
          type: "process",
          title: "How friction becomes a starting point in 7 days",
          text: "The first step is deliberately small: review one workflow, prioritize bottlenecks and continue only when an operational lever is visible.",
          steps: [
            ["1", "Select workflow", "30 minutes are enough to name one recurring workflow and the key people involved."],
            ["2", "Create bottleneck snapshot", "Within 48 hours, we organize time drains, data breaks, handovers and open questions."],
            ["3", "Implement or stop", "By day 7, there is one small measure or the deliberate decision not to start a project."]
          ]
        }
      ],
      finalCta: {
        kicker: "Next step",
        title: "Within one week, the first bottleneck can be tangible.",
        text: "In the free initial call, we review one real workflow and clarify whether a 7-day start makes sense."
      },
      faq: [
        ["What happens in the initial call?", "We spend 30 minutes on one concrete workflow, involved systems, recurring friction points and possible first operational improvements. The result is practical orientation, not legal, tax, financial or insolvency-related assessment."],
        ["Is the initial call free?", "Yes. The first orientation call is free and non-binding. It helps identify operational starting points and whether collaboration makes sense."],
        ["How quickly can we see a result?", "When one concrete workflow and the key information are available, a bottleneck snapshot is typically created within 48 hours. By day 7, one small starting measure can be prepared or tested. Larger implementation depends on scope."],
        ["How much effort is required from our team?", "At the start, one responsible person with process knowledge is usually enough. We use existing documents, screenshots, spreadsheets or short screen shares and avoid unnecessary meeting series."],
        ["What does the actual work cost?", "The initial call costs 0 €. For paid follow-up work, a written price range with goal, scope and next result is provided before the start. No paid work begins without confirmed pricing."],
        ["How much time can realistically be regained?", "That depends on the workflow. We do not promise a generic number of saved hours. The goal of the initial call is to make the first concrete lever visible, reducing recurring search time, duplicate entry or waiting time."],
        ["Is there a guarantee?", "There is no generic success guarantee. The risk reversal is the controlled start: the initial call is free, follow-up work starts only after clear approval and if no useful operational starting point is visible, we do not recommend a project."],
        ["Do you support companies in strained business phases?", "Yes, operationally: we help structure workflows, documents, data and responsibilities so teams can regain capacity to act. Specialist assessments and binding decisions remain with the respective qualified advisors."],
        ["Do you work with smaller businesses?", "Yes. Smaller teams often feel the effect of clearer workflows especially quickly."],
        ["Do we need technical knowledge?", "No. We translate technical topics into understandable steps and make sure your team can use the solution in practice."],
        ["Which regions does IBS-Saxony cover?", "The focus is Saxony and nearby projects in Saxony-Anhalt and Thuringia. Remote coordination is possible when it fits the project."]
      ]
    },
    services: {
      title: "Services | IBS-Saxony",
      description: "Process optimization, interfaces, workload reduction and Smart Farming for companies in Saxony.",
      heading: "Services for more effective working time",
      intro: "We combine analysis, structuring and implementation. Every service starts where growing workflows create friction and ends only when the new workflow is practical.",
      serviceBlocks: [
        ["Improve workflows", "We reveal where work stalls, which steps are duplicated and which decisions can be better prepared with clearer data."],
        ["Create interfaces", "We connect isolated systems and reduce manual transfer between ERP, inventory, accounting, documentation and specialist software."],
        ["Relieve teams", "Automation removes routine tasks so skilled people can focus on customers, production and development."],
        ["Develop Smart Farming", "From digital field records to data-driven farm management, we select technologies that fit the farm, team, documentation needs and practical rollout."]
      ],
      comparisonTitle: "Before and after",
      comparison: [
        ["Time required", "Manual search and duplicate entry", "Clear workflows and automated handovers"],
        ["Data quality", "Several versions of the same information", "One reliable data base"],
        ["Scaling", "Growth increases administrative pressure", "Systems grow with the business"]
      ],
      relatedTitle: "Special page for document-heavy workflows",
      relatedText: "For companies where records, approvals, files and responsibilities slow daily work, there is a dedicated overview of process and documentation workflows.",
      relatedCta: "View process and documentation workflows",
      relatedRoute: "processDocs"
    },
    processDocs: {
      title: "Process and documentation workflows | IBS-Saxony",
      description: "IBS-Saxony structures operational process and documentation workflows: work steps, data sources, responsibilities, approvals and next measures without a large project.",
      heading: "Structure process and documentation workflows clearly",
      intro: "When ERP, emails, files, records and specialist software run side by side, friction grows. IBS-Saxony makes visible which work steps, data sources, documents and responsibilities are involved today and which next operational step can bring relief.",
      heroPoints: ["Make system silos visible", "Find records faster", "Clarify approvals and responsibilities"],
      problemTitle: "When documents travel, friction often grows.",
      problemText: "Teams often lose time not because of one large weakness, but because of many small breaks: data is maintained twice, records are searched manually, approvals get stuck or new tools do not fit the real workday.",
      problemCards: [
        ["System silos", "Information lives in several systems. This creates duplicate entry, inconsistent data and repeated questions."],
        ["Manual search", "Records, files and figures are gathered by hand. Responsibilities are not always clear."],
        ["Software mismatch", "New digital tools help little when they do not fit the actual workflow, team and documentation need."]
      ],
      flowTitle: "From friction point to the next actionable workflow",
      flowText: "The entry point stays deliberately small: we review one real workflow, separate quick improvements from topics needing further specialist review and prepare the next operational step.",
      flowSteps: [
        ["1", "Review workflows", "We capture which work steps, systems, documents and data sources are involved today."],
        ["2", "Prioritize bottlenecks", "We mark search time, duplicate entry, unclear handovers and points where specialist review may be needed."],
        ["3", "Prepare implementation", "You receive one clear next measure: workflow change, document structure, interface, template or project plan."]
      ],
      deliverableTitle: "What becomes tangible",
      deliverables: [
        ["Workflow map", "A clear overview of who needs what and when, where data is created and where documents move."],
        ["Document structure", "An order for files, records, approvals and recurring documents that need to be found in daily work."],
        ["Roles and handovers", "Clear operational responsibilities to reduce questions, waiting time and duplicate maintenance."],
        ["Next work block", "One small actionable measure with goal, scope and price range before any paid start."]
      ],
      focusTitle: "Especially useful for",
      focusCards: [
        ["Small and medium-sized companies", "Orders, documents, emails and responsibilities are structured so less time disappears into administration and search."],
        ["Agriculture", "Digital documentation, field-record logic, operational data and records are structured closer to actual work tasks."],
        ["Regional projects", "Partners, product data, energy, agriculture and sales processes are turned into traceable workflows."]
      ],
      boundaryTitle: "Clear operational boundaries",
      boundaryText: "IBS-Saxony supports operational workflows, data, documents, organization and implementation. We do not provide legal, insolvency, tax, financial or other binding professional advice. Legal, tax, insolvency or financial questions must be reviewed by qualified professionals.",
      ctaTitle: "Friction becomes a clear workflow.",
      ctaText: "In the free initial call, we review which documentation-heavy or operational bottleneck should be relieved first."
    },
    references: {
      title: "Work examples | IBS-Saxony",
      description: "Verified work examples for operational process optimization, digitalization and data structuring by IBS-Saxony.",
      heading: "Verified references with operational impact",
      intro: "These work examples are approved for reference use. They show how IBS-Saxony structures grown workflows in agriculture, distribution, picking and delivery.",
      noticeTitle: "Credible, but data-minimal",
      notice: "The named businesses are used as references. Further internal details, personal data, contractual content or additional metrics are published only when explicitly approved.",
      cases: [
        {
          title: "LWB Landehre Christian Peschel",
          subtitle: "Spice production and arable farming",
          logo: "/assets/reference-logo-lwb-landehre.webp",
          logoAlt: "LWB Landehre logo",
          result: "Field software updates the field record from work tasks per field.",
          text: "IBS-Saxony supports the build-up of spice production and software workflows for arable farming. Tasks are structured by field so documentation and operational data can be maintained from the actual work process.",
          proofPoints: ["Spice-production setup", "Field-specific task logic", "Field-record updates"]
        },
        {
          title: "Obsthof Ibisch, Birgit Herrmann",
          subtitle: "Fresh-box distribution, picking and delivery",
          logo: "/assets/reference-logo-obsthof-ibisch.png",
          logoAlt: "Obsthof Ibisch logo",
          result: "2026 implementation target: approx. 30% less working time in the digital workflow.",
          text: "The fresh-box distribution workflow is scheduled to be digitalized in 2026 from order handling through picking and delivery. The goal is to reduce manual coordination, make handovers clearer and save around 30% working time in the digital workflow.",
          proofPoints: ["Digital order structure in 2026", "Picking through delivery", "target: around 30% working time saved"]
        }
      ]
    },
    about: {
      title: "About IBS-Saxony | Practical digitalization",
      description: "IBS-Saxony supports companies in Saxony with clear language, regional proximity and practical implementation.",
      heading: "We are IBS-Saxony",
      intro: "Your partner for integrated business solutions in Saxony: approachable, technically strong and focused on implementation that works.",
      values: [
        ["Honesty & clarity", "We say what is feasible, what should wait and which steps create impact first."],
        ["Practical orientation", "A solution is only good when it is accepted in the business and makes everyday work easier."],
        ["Long-term partnership", "We support concepts, rollout, training and continuous improvement."]
      ],
      ceoText: "Andreas Gebel combines experience in process optimization, IT and process practice and agricultural technology with a clear standard: make complex topics understandable and build durable solutions together."
    },
    contact: {
      title: "Contact | Request a free IBS-Saxony initial call",
      description: "Contact IBS-Saxony by email, phone or WhatsApp for a free, non-binding initial process call.",
      heading: "Free initial call about your workflows",
      intro: "The first process call is free and non-binding. We clarify operational workflows, involved systems and practical next steps. Legal, tax, insolvency-related or financial questions remain with the respective qualified professionals.",
      options: [
        ["Email", site.company.email, site.company.emailHref],
        ["Phone", site.company.phone, site.company.phoneHref],
        ["WhatsApp", "Start direct message", site.company.whatsappHref]
      ],
      note: "When clicking WhatsApp, you leave this website and open an external service. IBS-Saxony does not provide legal, insolvency, tax, financial or other binding professional advice."
    },
    imprint: {
      title: "Imprint | IBS-Saxony",
      description: "Imprint of IBS-Saxony UG (haftungsbeschränkt).",
      heading: "Imprint"
    },
    privacy: {
      title: "Privacy policy | IBS-Saxony",
      description: "Privacy policy of IBS-Saxony UG with information on hosting, contact, external links, Google Analytics and Microsoft Clarity after consent.",
      heading: "Privacy policy"
    },
    styleguide: {
      title: "Styleguide | IBS-Saxony",
      description: "Reusable brand and UI styleguide for IBS-Saxony.",
      heading: "IBS-Saxony Styleguide",
      intro: "A compact system for websites, presentations and digital interfaces: clear, precise and trustworthy."
    }
  }
};

export function t(locale) {
  return common[locale] || common.de;
}

export function page(locale, key) {
  return pages[locale]?.[key] || supportPages[locale]?.[key] || pages.de[key] || supportPages.de[key];
}

export function navItems(locale) {
  const labels = t(locale).nav;
  return [
    ["services", labels.services],
    ["processDocs", labels.processDocs],
    ["references", labels.references],
    ["about", labels.about],
    ["contact", labels.contact]
  ].map(([key, label]) => ({ key, label, href: getPath(locale, key) }));
}

export function legalContent(locale) {
  const isDe = locale === "de";
  return {
    imprint: [
      [isDe ? "Angaben gemäß § 5 DDG" : "Information according to German law", `${site.company.legalName}\n${site.company.street}\n${site.company.city}\n${site.company.country}`],
      [isDe ? "Vertreten durch" : "Represented by", site.company.ceo],
      [isDe ? "Kontakt" : "Contact", `Telefon: ${site.company.phone}\nE-Mail: ${site.company.email}`],
      [isDe ? "Registereintrag" : "Commercial register", `${site.company.court}\n${site.company.hrb}`],
      [isDe ? "Umsatzsteuer-ID" : "VAT ID", site.company.vatId],
      [isDe ? "Verantwortlich für den Inhalt" : "Responsible for content", `${site.company.ceo}\n${site.company.street}\n${site.company.city}`]
    ],
    privacy: [
      [
        isDe ? "1. Datenschutz auf einen Blick" : "1. Privacy at a glance",
        isDe
          ? "Wir verarbeiten personenbezogene Daten nur, soweit dies für Betrieb, Sicherheit, Kontaktaufnahme und - nach aktiver Einwilligung - Reichweitenmessung und Nutzungsanalyse dieser Website erforderlich ist. Ohne aktive Einwilligung werden keine Analytics-Skripte geladen."
          : "We process personal data only as required for operating and securing this website, handling contact requests and - after active consent - measuring reach and usage of this website. No analytics scripts are loaded without active consent."
      ],
      [
        isDe ? "2. Verantwortlicher" : "2. Controller",
        `${site.company.legalName}\n${site.company.street}\n${site.company.city}\n${site.company.country}\nE-Mail: ${site.company.email}\nTelefon: ${site.company.phone}`
      ],
      [
        isDe ? "3. Hosting und Server-Logs" : "3. Hosting and server logs",
        isDe
          ? "Beim Aufruf der Website verarbeitet der Hosting-Anbieter technisch notwendige Zugriffsdaten, insbesondere IP-Adresse, Datum und Uhrzeit des Abrufs, aufgerufene Datei, Referrer, Browser- und Betriebssysteminformationen, Statuscodes und übertragene Datenmengen. Die Verarbeitung dient der sicheren Auslieferung, Stabilität und Missbrauchserkennung der Website. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Server-Logdaten werden nur so lange gespeichert, wie dies für Betrieb, Sicherheit und Fehleranalyse erforderlich ist."
          : "When the website is accessed, the hosting provider processes technically necessary access data, in particular IP address, date and time of access, requested file, referrer, browser and operating system information, status codes and transferred data volume. Processing serves secure delivery, stability and abuse detection. The legal basis is Art. 6(1)(f) GDPR. Server log data is retained only as long as required for operation, security and troubleshooting."
      ],
      [
        isDe ? "4. Kontaktaufnahme" : "4. Contact",
        isDe
          ? "Wenn Sie uns per E-Mail, Telefon oder WhatsApp kontaktieren, verarbeiten wir die von Ihnen übermittelten Angaben zur Bearbeitung Ihrer Anfrage und für mögliche Anschlussfragen. Rechtsgrundlage ist je nach Inhalt der Anfrage Art. 6 Abs. 1 lit. b DSGVO oder Art. 6 Abs. 1 lit. f DSGVO. WhatsApp ist ein externer Dienst; beim Klick auf den WhatsApp-Link verlassen Sie diese Website."
          : "If you contact us by email, phone or WhatsApp, we process the information you provide to handle your request and possible follow-up questions. Depending on the content of the request, the legal basis is Art. 6(1)(b) GDPR or Art. 6(1)(f) GDPR. WhatsApp is an external service; clicking the WhatsApp link leaves this website."
      ],
      [
        isDe ? "5. Einwilligung und lokale Speicherung" : "5. Consent and local storage",
        isDe
          ? "Ihre Entscheidung zu Analyse-Cookies wird lokal in Ihrem Browser gespeichert, damit die Website Ihre Auswahl berücksichtigen kann. Sie können diese Entscheidung über „Cookie-Einstellungen ändern“ zurücksetzen. Technisch notwendige Speicherungen erfolgen auf Grundlage von § 25 Abs. 2 TDDDG; einwilligungsbedürftige Analyse-Cookies oder vergleichbare Technologien werden nur nach Einwilligung gemäß § 25 Abs. 1 TDDDG eingesetzt."
          : "Your analytics cookie choice is stored locally in your browser so the website can respect your selection. You can reset this choice via “Change cookie settings”. Technically necessary storage is based on Section 25(2) TDDDG; analytics cookies or comparable technologies requiring consent are used only after consent under Section 25(1) TDDDG."
      ],
      [
        isDe ? "6. Google Analytics nach Einwilligung" : "6. Google Analytics after consent",
        isDe
          ? "Google Analytics wird nur geladen, wenn auf dieser Website eine Measurement-ID konfiguriert ist und Sie aktiv auf „Ich stimme zu“ klicken. Vorher wird kein Analytics-Script eingebunden. Anbieter ist Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. Google kann Daten auch an Google LLC in den USA übermitteln. Die Nutzung erfolgt zur statistischen Reichweitenmessung und Verbesserung der Website auf Grundlage Ihrer Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO. Die IP-Anonymisierung ist technisch aktiviert. Sie können Ihre Einwilligung jederzeit über „Cookie-Einstellungen ändern“ widerrufen."
          : "Google Analytics is loaded only if a measurement ID is configured for this website and you actively click “I agree”. Before that, no analytics script is embedded. The provider is Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland. Google may also transfer data to Google LLC in the United States. Analytics is used for statistical reach measurement and website improvement based on your consent under Art. 6(1)(a) GDPR. IP anonymization is technically enabled. You may withdraw your consent at any time via “Change cookie settings”."
      ],
      [
        isDe ? "7. Microsoft Clarity nach Einwilligung" : "7. Microsoft Clarity after consent",
        isDe
          ? "Microsoft Clarity wird nur geladen, wenn auf dieser Website eine Clarity-Projekt-ID konfiguriert ist und Sie aktiv auf „Ich stimme zu“ klicken. Vorher wird kein Clarity-Script eingebunden. Anbieter ist Microsoft Ireland Operations Limited, One Microsoft Place, South County Business Park, Leopardstown, Dublin 18, Irland. Clarity kann technische Nutzungsdaten und Interaktionen wie Seitenaufrufe, Klicks, Scrollverhalten und Darstellungsdaten erfassen, um die Benutzerfreundlichkeit der Website zu verbessern. Die Nutzung erfolgt auf Grundlage Ihrer Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO. Beim Laden übermitteln wir an Clarity ein Consent-v2-Signal für Analyse-Speicherung; Werbespeicherung wird nicht freigegeben. Sie können Ihre Einwilligung jederzeit über „Cookie-Einstellungen ändern“ widerrufen."
          : "Microsoft Clarity is loaded only if a Clarity project ID is configured for this website and you actively click “I agree”. Before that, no Clarity script is embedded. The provider is Microsoft Ireland Operations Limited, One Microsoft Place, South County Business Park, Leopardstown, Dublin 18, Ireland. Clarity may collect technical usage data and interactions such as page views, clicks, scrolling behavior and rendering data to improve website usability. Processing is based on your consent under Art. 6(1)(a) GDPR. When loading Clarity, we send a consent-v2 signal for analytics storage; advertising storage is not granted. You may withdraw your consent at any time via “Change cookie settings”."
      ],
      [
        isDe ? "8. Externe Links" : "8. External links",
        isDe
          ? "Diese Website verlinkt auf externe Dienste wie YouTube oder WhatsApp. Beim reinen Besuch dieser Website werden dadurch keine Inhalte dieser Dienste eingebettet. Erst wenn Sie einen externen Link anklicken, verlassen Sie diese Website; für die anschließende Verarbeitung gelten die Datenschutzinformationen des jeweiligen Anbieters."
          : "This website links to external services such as YouTube or WhatsApp. Merely visiting this website does not embed content from these services. Only when you click an external link do you leave this website; subsequent processing is governed by the privacy information of the respective provider."
      ],
      [
        isDe ? "9. Speicherdauer" : "9. Retention",
        isDe
          ? "Kontaktanfragen speichern wir nur so lange, wie dies zur Bearbeitung der Anfrage und für mögliche gesetzliche Aufbewahrungs- oder Nachweispflichten erforderlich ist. Technische Serverdaten werden nur für Betrieb, Sicherheit und Fehleranalyse vorgehalten. Einwilligungsentscheidungen bleiben lokal in Ihrem Browser gespeichert, bis Sie diese löschen oder zurücksetzen. Analyseanbieter speichern Daten nach ihren eigenen Speicher- und Löschfristen; Einzelheiten ergeben sich aus den Datenschutzinformationen der jeweiligen Anbieter."
          : "Contact requests are retained only as long as required to handle the request and meet possible statutory retention or documentation obligations. Technical server data is kept only for operation, security and troubleshooting. Consent choices remain stored locally in your browser until you delete or reset them. Analytics providers store data according to their own retention and deletion periods; details are available in the respective providers' privacy information."
      ],
      [
        isDe ? "10. Ihre Rechte" : "10. Your rights",
        isDe
          ? "Sie haben im Rahmen der gesetzlichen Voraussetzungen Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit, Widerspruch gegen Verarbeitungen auf Grundlage berechtigter Interessen sowie Widerruf erteilter Einwilligungen mit Wirkung für die Zukunft. Sie haben außerdem das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren. Zuständig für Sachsen ist die Sächsische Datenschutz- und Transparenzbeauftragte, Maternistraße 17, 01067 Dresden, www.datenschutz.sachsen.de."
          : "Subject to legal requirements, you have rights of access, rectification, erasure, restriction of processing, data portability, objection to processing based on legitimate interests and withdrawal of consent with future effect. You also have the right to lodge a complaint with a data protection supervisory authority. For Saxony, the competent authority is the Sächsische Datenschutz- und Transparenzbeauftragte, Maternistraße 17, 01067 Dresden, www.datenschutz.sachsen.de."
      ],
      [
        isDe ? "11. Keine automatisierte Entscheidungsfindung" : "11. No automated decision-making",
        isDe
          ? "Eine automatisierte Entscheidungsfindung einschließlich Profiling im Sinne von Art. 22 DSGVO findet auf dieser Website nicht statt."
          : "Automated decision-making, including profiling within the meaning of Art. 22 GDPR, does not take place on this website."
      ]
    ]
  };
}
