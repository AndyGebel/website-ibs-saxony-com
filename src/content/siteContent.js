import { site } from "../config/site.js";
import { getPath } from "../i18n/routes.js";

const common = {
  de: {
    nav: {
      services: "Leistungen",
      references: "Referenzen",
      about: "Über uns",
      contact: "Kontakt",
      styleguide: "Styleguide",
      cta: "Erstberatung buchen",
      languageLabel: "Sprache wechseln"
    },
    footer: {
      quickLinks: "Schnellzugriff",
      legal: "Rechtliches",
      contact: "Kontakt",
      social: "Social",
      rights: "Alle Rechte vorbehalten."
    },
    consent: {
      title: "Analyse-Cookies akzeptieren?",
      text: "Wir nutzen Google Analytics nur, wenn Sie aktiv zustimmen. So sehen wir, welche Inhalte hilfreich sind, ohne vor Ihrer Zustimmung Tracking zu laden.",
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
      references: "References",
      about: "About",
      contact: "Contact",
      styleguide: "Styleguide",
      cta: "Book consultation",
      languageLabel: "Switch language"
    },
    footer: {
      quickLinks: "Quick links",
      legal: "Legal",
      contact: "Contact",
      social: "Social",
      rights: "All rights reserved."
    },
    consent: {
      title: "Accept analytics cookies?",
      text: "We only load Google Analytics after your active consent. This helps us understand which content is useful without tracking before you opt in.",
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
      title: "IBS-Saxony | Prozessoptimierung & Digitalisierung in Sachsen",
      description: "IBS-Saxony vereinfacht Abläufe, verbindet Systeme und schafft digitale Arbeitsweisen für Mittelstand, Landwirtschaft und wachsende Teams in Sachsen.",
      hero: {
        heading: "Prozesse vereinfachen. Potenziale nutzen.",
        text: "Wir helfen Unternehmen in Sachsen, tägliche Abläufe klarer, schneller und sinnvoller zu gestalten. Mit strukturierten Prozessen, integrierten Systemen und digitalen Werkzeugen entsteht Raum für Arbeit, die wirklich zählt.",
        primary: "Kostenlose Erstberatung buchen",
        secondary: "Leistungen ansehen"
      },
      sections: [
        {
          type: "problem",
          title: "Wenn Abläufe wachsen, wächst oft auch die Reibung.",
          text: "Informationen liegen in mehreren Systemen, Routineaufgaben binden Fachkräfte und wichtige Entscheidungen dauern länger als nötig. IBS-Saxony bringt Ordnung in diese Schnittstellen: praktisch, verständlich und so umgesetzt, dass Ihr Team die Lösung im Alltag nutzt.",
          points: ["Weniger manuelle Doppeleingaben", "Klare Verantwortlichkeiten und Datenflüsse", "Digitale Werkzeuge, die zum Betrieb passen"]
        },
        {
          type: "services",
          title: "Vier Leistungsfelder, ein Ziel: mehr wirksame Arbeitszeit.",
          cards: [
            ["Prozessoptimierung", "Wir analysieren Abläufe, identifizieren Engpässe und gestalten Arbeitsschritte so, dass weniger Zeit in Verwaltung verloren geht."],
            ["Systemintegration", "ERP, Warenwirtschaft, Buchhaltung und Fachsysteme werden so verbunden, dass Daten sauber fließen."],
            ["Smart Farming", "Digitale Dokumentation, Feldmanagement und datenbasierte Entscheidungen für landwirtschaftliche Betriebe."],
            ["IBS-DocuFlow", "KI-gestützte Dokumentenverwaltung, angepasst an Ihre Organisation und Ihre Freigabeprozesse."]
          ]
        },
        {
          type: "products",
          title: "Digitale Werkzeuge aus der Praxis",
          text: "Mit IBS-DocuFlow und ergänzenden Werkzeugen wie dem PDF Toolkit entstehen Lösungen, die nicht in Präsentationen enden, sondern echte Arbeitslast reduzieren.",
          cta: "Mehr über unsere Arbeitsweise"
        }
      ],
      faq: [
        ["Was kostet eine Prozessoptimierung?", "Nach einer kostenlosen Erstberatung erhalten Sie eine realistische Einschätzung. Der Umfang hängt von Systemlandschaft, Prozesskomplexität und Umsetzungsgrad ab."],
        ["Arbeiten Sie auch mit kleinen Betrieben?", "Ja. Gerade kleinere Teams profitieren von klaren Abläufen, weil jede eingesparte Routineaufgabe sofort spürbar wird."],
        ["Brauchen wir technisches Vorwissen?", "Nein. Wir übersetzen technische Themen in verständliche Schritte und begleiten Einführung, Schulung und Optimierung."]
      ]
    },
    services: {
      title: "Leistungen | IBS-Saxony",
      description: "Prozessoptimierung, Schnittstellen, Mitarbeiterentlastung und Smart Farming für Unternehmen in Sachsen.",
      heading: "Leistungen, die Arbeit einfacher machen",
      intro: "Wir verbinden Beratung und Umsetzung. Jede Leistung beginnt mit einer klaren Analyse und endet erst, wenn der neue Ablauf praktisch nutzbar ist.",
      serviceBlocks: [
        ["Abläufe verbessern", "Wir machen sichtbar, wo Arbeit hängen bleibt, welche Schritte doppelt laufen und welche Entscheidungen durch bessere Daten schneller werden."],
        ["Schnittstellen schaffen", "Wir verbinden isolierte Systeme und reduzieren manuelle Übertragung zwischen ERP, Warenwirtschaft, Buchhaltung, Dokumentation und Fachsoftware."],
        ["Mitarbeiter entlasten", "Automatisierung nimmt Routineaufgaben aus dem Tagesgeschäft, damit Fachkräfte sich auf Kunden, Produktion und Entwicklung konzentrieren können."],
        ["Smart Farming entwickeln", "Von digitaler Schlagkartei bis datenbasierter Betriebsführung: Wir wählen Technologien so aus, dass sie zum Hof, Team und Förderkontext passen."]
      ],
      comparisonTitle: "Vorher und nachher",
      comparison: [
        ["Zeitaufwand", "Manuelle Suche und Doppeleingaben", "Klare Abläufe und automatisierte Übergaben"],
        ["Datenqualität", "Mehrere Versionen derselben Information", "Eine verlässliche Datenbasis"],
        ["Skalierung", "Mehr Wachstum bedeutet mehr Verwaltungsdruck", "Systeme wachsen mit, ohne proportional mehr Aufwand"]
      ]
    },
    references: {
      title: "Referenzen & Projekterfolge | IBS-Saxony",
      description: "Kundenstimmen und anonymisierte Projekterfolge aus Prozessoptimierung, Digitalisierung und Smart Farming.",
      heading: "Ergebnisse, die im Alltag ankommen",
      intro: "Unsere Projekte sind pragmatisch: weniger Reibung, bessere Übersicht und digitale Lösungen, die von Menschen tatsächlich genutzt werden.",
      quote: "Die Zusammenarbeit mit IBS-Saxony hat unsere Arbeitsweise grundlegend verändert. Wir haben klare Prozesse, vernetzte Systeme und endlich Zeit für strategische Themen.",
      author: "Christian Peschel, LWB Landehre Sachsen",
      cases: [
        ["Maschinenbau", "ERP und Produktionsplanung wurden sauber verbunden. Aufträge sind transparenter, Fehlerquellen sinken."],
        ["Landwirtschaft", "Digitale Dokumentation und Feldmanagement reduzieren Nachweisaufwand und verbessern Entscheidungen."],
        ["Handwerk", "Zentrale Projektübersicht, CRM-Struktur und Angebotsvorlagen schaffen mehr Tempo im Tagesgeschäft."]
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
      ceoText: "Andreas Gebel verbindet Erfahrung in Prozessoptimierung, IT-Beratung und Landwirtschaftstechnologie mit einem klaren Anspruch: komplexe Themen verständlich machen und gemeinsam tragfähige Lösungen bauen."
    },
    contact: {
      title: "Kontakt | IBS-Saxony Erstberatung buchen",
      description: "Kontaktieren Sie IBS-Saxony per E-Mail, Telefon oder WhatsApp für eine kostenlose Erstberatung.",
      heading: "Lassen Sie uns über Ihre Abläufe sprechen",
      intro: "Ein erstes Gespräch ist unverbindlich. Wir klären, wo der größte Hebel liegt, welche Systeme beteiligt sind und welche nächsten Schritte sinnvoll sind.",
      options: [
        ["E-Mail", site.company.email, site.company.emailHref],
        ["Telefon", site.company.phone, site.company.phoneHref],
        ["WhatsApp", "Direktnachricht starten", site.company.whatsappHref]
      ],
      note: "Beim Klick auf WhatsApp verlassen Sie diese Website und öffnen einen externen Dienst."
    },
    imprint: {
      title: "Impressum | IBS-Saxony",
      description: "Impressum der IBS-Saxony UG (haftungsbeschränkt).",
      heading: "Impressum"
    },
    privacy: {
      title: "Datenschutz | IBS-Saxony",
      description: "Datenschutzerklärung der IBS-Saxony UG mit Informationen zu Kontaktaufnahme, Hosting und Google Analytics nach Einwilligung.",
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
      title: "IBS-Saxony | Process optimization & digital workflows",
      description: "IBS-Saxony simplifies workflows, connects systems and builds digital working methods for companies in Saxony.",
      hero: {
        heading: "Simplify processes. Unlock potential.",
        text: "We help companies in Saxony make daily operations clearer, faster and more meaningful. Structured processes, integrated systems and practical digital tools create room for the work that matters.",
        primary: "Book a free consultation",
        secondary: "Explore services"
      },
      sections: [
        {
          type: "problem",
          title: "When workflows grow, friction often grows with them.",
          text: "Information sits in several systems, routine work absorbs skilled people and decisions take longer than they should. IBS-Saxony brings order into these interfaces with practical implementation your team can use every day.",
          points: ["Less manual duplicate entry", "Clear responsibilities and data flows", "Digital tools that fit your operation"]
        },
        {
          type: "services",
          title: "Four service areas, one goal: more effective working time.",
          cards: [
            ["Process optimization", "We analyze workflows, identify bottlenecks and redesign steps so less time is lost in administration."],
            ["Systems integration", "ERP, inventory, accounting and specialist tools are connected so data can flow cleanly."],
            ["Smart Farming", "Digital documentation, field management and data-driven decisions for agricultural businesses."],
            ["IBS-DocuFlow", "AI-supported document management adapted to your organization and approval flows."]
          ]
        },
        {
          type: "products",
          title: "Digital tools built from practice",
          text: "With IBS-DocuFlow and complementary tools such as PDF Toolkit, solutions reduce real workload instead of ending as slide decks.",
          cta: "Learn how we work"
        }
      ],
      faq: [
        ["What does process optimization cost?", "After a free consultation, you receive a realistic estimate. Scope depends on systems, process complexity and implementation depth."],
        ["Do you work with smaller businesses?", "Yes. Smaller teams often feel the effect of streamlined routine work especially quickly."],
        ["Do we need technical knowledge?", "No. We translate technical topics into understandable steps and support rollout, training and optimization."]
      ]
    },
    services: {
      title: "Services | IBS-Saxony",
      description: "Process optimization, interfaces, workload reduction and Smart Farming for companies in Saxony.",
      heading: "Services that make work easier",
      intro: "We combine consulting and implementation. Every service starts with clear analysis and ends only when the new workflow is practical.",
      serviceBlocks: [
        ["Improve workflows", "We reveal where work stalls, which steps are duplicated and which decisions become faster with better data."],
        ["Create interfaces", "We connect isolated systems and reduce manual transfer between ERP, inventory, accounting, documentation and specialist software."],
        ["Relieve teams", "Automation removes routine tasks so skilled people can focus on customers, production and development."],
        ["Develop Smart Farming", "From digital field records to data-driven farm management, we select technologies that fit the farm, team and compliance context."]
      ],
      comparisonTitle: "Before and after",
      comparison: [
        ["Time required", "Manual search and duplicate entry", "Clear workflows and automated handovers"],
        ["Data quality", "Several versions of the same information", "One reliable data base"],
        ["Scaling", "Growth increases administrative pressure", "Systems grow with the business"]
      ]
    },
    references: {
      title: "References & project results | IBS-Saxony",
      description: "Testimonials and anonymized project results from process optimization, digitalization and Smart Farming.",
      heading: "Results that arrive in everyday work",
      intro: "Our projects are pragmatic: less friction, better overview and digital solutions people actually use.",
      quote: "Working with IBS-Saxony fundamentally changed how we work. We now have clear processes, connected systems and finally time for strategic topics.",
      author: "Christian Peschel, LWB Landehre Saxony",
      cases: [
        ["Mechanical engineering", "ERP and production planning were connected cleanly. Orders are more transparent and error sources decrease."],
        ["Agriculture", "Digital documentation and field management reduce reporting effort and improve decisions."],
        ["Craft business", "Central project overview, CRM structure and offer templates bring more speed into daily work."]
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
      ceoText: "Andreas Gebel combines experience in process optimization, IT consulting and agricultural technology with a clear standard: make complex topics understandable and build durable solutions together."
    },
    contact: {
      title: "Contact | Book an IBS-Saxony consultation",
      description: "Contact IBS-Saxony by email, phone or WhatsApp for a free initial consultation.",
      heading: "Let’s talk about your workflows",
      intro: "The first conversation is non-binding. We clarify where the biggest leverage is, which systems are involved and which next steps make sense.",
      options: [
        ["Email", site.company.email, site.company.emailHref],
        ["Phone", site.company.phone, site.company.phoneHref],
        ["WhatsApp", "Start direct message", site.company.whatsappHref]
      ],
      note: "When clicking WhatsApp, you leave this website and open an external service."
    },
    imprint: {
      title: "Imprint | IBS-Saxony",
      description: "Imprint of IBS-Saxony UG (haftungsbeschränkt).",
      heading: "Imprint"
    },
    privacy: {
      title: "Privacy policy | IBS-Saxony",
      description: "Privacy policy of IBS-Saxony UG with information on contact, hosting and Google Analytics after consent.",
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
  return pages[locale]?.[key] || pages.de[key];
}

export function navItems(locale) {
  const labels = t(locale).nav;
  return [
    ["services", labels.services],
    ["references", labels.references],
    ["about", labels.about],
    ["contact", labels.contact]
  ].map(([key, label]) => ({ key, label, href: getPath(locale, key) }));
}

export function legalContent(locale) {
  const isDe = locale === "de";
  return {
    imprint: [
      [isDe ? "Angaben gemäß § 5 TMG" : "Information according to German law", `${site.company.legalName}\n${site.company.street}\n${site.company.city}\n${site.company.country}`],
      [isDe ? "Vertreten durch" : "Represented by", site.company.ceo],
      [isDe ? "Kontakt" : "Contact", `Telefon: ${site.company.phone}\nE-Mail: ${site.company.email}`],
      [isDe ? "Registereintrag" : "Commercial register", `${site.company.court}\n${site.company.hrb}`],
      [isDe ? "Umsatzsteuer-ID" : "VAT ID", site.company.vatId],
      [isDe ? "Verantwortlich für den Inhalt" : "Responsible for content", `${site.company.ceo}\n${site.company.street}\n${site.company.city}`]
    ],
    privacy: [
      [isDe ? "1. Datenschutz auf einen Blick" : "1. Privacy at a glance", isDe ? "Wir verarbeiten personenbezogene Daten nur, soweit dies für Betrieb, Sicherheit, Kontaktaufnahme und - nach Einwilligung - Reichweitenmessung dieser Website erforderlich ist." : "We process personal data only as required for operating and securing this website, handling contact requests and - after consent - measuring reach."],
      [isDe ? "2. Verantwortlicher" : "2. Controller", `${site.company.legalName}\n${site.company.street}\n${site.company.city}\n${site.company.email}`],
      [isDe ? "3. Hosting und Server-Logs" : "3. Hosting and server logs", isDe ? "Beim Aufruf der Website verarbeitet der Hosting-Anbieter technische Zugriffsdaten wie IP-Adresse, Zeitpunkt, aufgerufene Datei und Browserinformationen, um die Website sicher auszuliefern." : "When the website is accessed, the hosting provider processes technical access data such as IP address, time, requested file and browser information to deliver the website securely."],
      [isDe ? "4. Kontaktaufnahme" : "4. Contact", isDe ? "Wenn Sie uns per E-Mail, Telefon oder WhatsApp kontaktieren, verarbeiten wir Ihre Angaben zur Bearbeitung Ihrer Anfrage. WhatsApp ist ein externer Dienst; beim Klick verlassen Sie diese Website." : "If you contact us by email, phone or WhatsApp, we process your information to handle your request. WhatsApp is an external service; clicking it leaves this website."],
      [isDe ? "5. Google Analytics nach Einwilligung" : "5. Google Analytics after consent", isDe ? "Google Analytics wird erst geladen, wenn Sie aktiv auf „Ich stimme zu“ klicken. Vorher wird kein Analytics-Script eingebunden. Ihre Entscheidung wird lokal in Ihrem Browser gespeichert und kann über die Cookie-Einstellungen geändert werden." : "Google Analytics is loaded only after you actively click “I agree”. Before that, no analytics script is embedded. Your decision is stored locally in your browser and can be changed via the cookie settings."],
      [isDe ? "6. Ihre Rechte" : "6. Your rights", isDe ? "Sie haben im Rahmen der gesetzlichen Voraussetzungen Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Widerspruch und Datenübertragbarkeit." : "Subject to legal requirements, you have rights of access, rectification, erasure, restriction, objection and data portability."]
    ]
  };
}
