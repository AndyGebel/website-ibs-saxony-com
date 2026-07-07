import { site } from "../config/site.js";
import { getPath } from "../i18n/routes.js";

const common = {
  de: {
    nav: {
      services: "Leistungen",
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
      title: "IBS-Saxony | Mehr wirksame Arbeitszeit durch klare Abläufe",
      description: "IBS-Saxony reduziert Reibung in wachsenden Abläufen, verbindet Systeme und macht digitale Arbeit für Mittelstand, Landwirtschaft und regionale Projekte nutzbar.",
      hero: {
        kicker: "Prozessoptimierung und Systemintegration in Sachsen",
        heading: "Mehr wirksame Arbeitszeit. Weniger Reibung.",
        text: "IBS-Saxony hilft kleinen und mittleren Unternehmen, Landwirtschaftsbetrieben und regionalen Projekten, wachsende Abläufe zu ordnen, Systeme zu verbinden und digitale Werkzeuge so einzuführen, dass Teams im Alltag spürbar entlastet werden.",
        primary: "Kostenloses Erstgespräch anfragen",
        secondary: "Leistungsfelder prüfen",
        note: "Kostenloser, unverbindlicher Start: Wir klären operativ, wo Aufwand, Reibung und Datenbrüche entstehen; Fachfragen bleiben bei den zuständigen Fachleuten.",
        proof: [
          ["Abläufe", "Arbeitswege sichtbar machen"],
          ["Systeme", "Datenbrüche reduzieren"],
          ["Teams", "Routinearbeit entlasten"]
        ],
        chips: ["Mittelstand", "Landwirtschaft", "Regionale Projekte"],
        panel: {
          title: "Operativer Startpunkt",
          text: "Ein klares Prozessbild zeigt, welche Schritte sofort Ordnung schaffen und welche Themen Fachprüfung brauchen.",
          items: ["Ist-Ablauf erfassen", "Engpässe priorisieren", "Nächste Maßnahme festlegen"]
        }
      },
      sections: [
        {
          type: "problem",
          title: "Wenn Abläufe wachsen, wächst oft auch die Reibung.",
          text: "Viele Teams verlieren Zeit, weil Informationen in mehreren Systemen liegen, Nachweise manuell zusammengesucht werden oder neue Software nicht zum echten Arbeitsalltag passt. Wir beginnen deshalb bei den Abläufen, nicht bei der nächsten Tool-Liste.",
          points: ["Weniger doppelte Dateneingaben", "Klarere Zuständigkeiten und Übergaben", "Digitale Lösungen, die im Alltag nutzbar bleiben"]
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
          title: "Vier Hebel für mehr wirksame Arbeitszeit",
          cards: [
            ["Prozesse aufnehmen", "Wir machen sichtbar, wo Arbeit hängen bleibt, welche Schritte doppelt laufen und welche Entscheidungen bessere Daten brauchen."],
            ["Systeme verbinden", "ERP, Warenwirtschaft, Buchhaltung, Dokumentation und Fachsoftware werden so gedacht, dass Daten sauberer fließen."],
            ["Teams entlasten", "Routineaufgaben, Suchzeiten und Medienbrüche werden reduziert, damit Fachkräfte wieder mehr wirksame Arbeitszeit haben."],
            ["Smart Farming & Betriebsdaten", "Für Landwirtschaftsbetriebe werden digitale Dokumentation, Schlagkartei-Logik und Betriebsdaten so strukturiert, dass sie praktisch nutzbar bleiben."]
          ]
        },
        {
          type: "process",
          title: "So beginnt die Zusammenarbeit ohne Großprojekt",
          text: "Der erste Schritt bleibt bewusst klein: verstehen, priorisieren, dann nur die Maßnahmen starten, die schnell Klarheit oder Entlastung bringen.",
          steps: [
            ["1", "Abläufe ansehen", "Wir erfassen, welche Arbeitsschritte, Systeme und Datenquellen heute beteiligt sind."],
            ["2", "Engpässe priorisieren", "Gemeinsam trennen wir schnelle Verbesserungen von Themen, die mehr Prüfung oder Freigabe brauchen."],
            ["3", "Umsetzung vorbereiten", "Sie erhalten eine klare nächste Maßnahme: Prozessänderung, Schnittstelle, Dokumentationsstruktur oder Projektplan."]
          ]
        },
        {
          type: "products",
          hidden: true,
          title: "Werkzeuge entstehen aus echten Abläufen",
          text: "IBS-DocuFlow, PDF Toolkit und landwirtschaftliche Datenstrukturen werden nicht als Selbstzweck betrachtet. Sie sollen dort helfen, wo Dokumente, Nachweise, Freigaben und Entscheidungen heute unnötig Arbeit erzeugen.",
          cta: "Arbeitsweise kennenlernen"
        }
      ],
      faq: [
        ["Was passiert im Erstgespräch?", "Wir sprechen über Ihren aktuellen Ablauf, beteiligte Systeme, wiederkehrende Reibungspunkte und mögliche erste operative Verbesserungen. Daraus entsteht keine rechtliche, steuerliche, finanzielle oder insolvenzbezogene Bewertung, sondern eine praktische Orientierung für die nächsten Schritte."],
        ["Ist das Erstgespräch kostenlos?", "Ja. Das erste Orientierungsgespräch ist kostenlos und unverbindlich. Es dient dazu, operative Ansatzpunkte zu erkennen und zu prüfen, ob eine Zusammenarbeit sinnvoll ist."],
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
      ]
    },
    references: {
      title: "Arbeitsbeispiele | IBS-Saxony",
      description: "Beispielhafte Einsatzfelder für operative Prozessoptimierung, Digitalisierung und Datenstrukturierung durch IBS-Saxony.",
      heading: "Arbeitsfelder, in denen operative Ordnung Wirkung entfaltet",
      intro: "Die Beispiele zeigen typische Aufgabenstellungen. Konkrete Kundenreferenzen, Zitate, Kennzahlen oder Partnernennungen veröffentlichen wir erst nach belegter Freigabe.",
      noticeTitle: "Freigabe vor Referenz",
      notice: "IBS-Saxony stellt öffentliche Kundenstimmen und konkrete Projekterfolge nur dar, wenn dafür ein belastbarer Beleg und eine Freigabe vorliegen. Bis dahin bleiben die Beispiele bewusst allgemein und datensparsam.",
      cases: [
        ["Prozess- und Dokumentationsabläufe", "Abläufe aufnehmen, Medienbrüche sichtbar machen und Unterlagen so strukturieren, dass Zuständigkeiten und nächste Schritte klarer werden."],
        ["Landwirtschaftliche Betriebsdaten", "Schlagkartei-Logik, Nachweise und Betriebsdaten so ordnen, dass Dokumentation und praktische Entscheidungen besser vorbereitet werden."],
        ["Projekt- und Kundenkoordination", "Aufträge, Kontakte, Vorlagen und Projektstände übersichtlicher zusammenführen, damit Teams weniger suchen und sauberer übergeben."]
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
      title: "IBS-Saxony | More effective working time through clearer workflows",
      description: "IBS-Saxony reduces friction in growing workflows, connects systems and makes digital work usable for small and medium-sized companies, agriculture and regional projects.",
      hero: {
        kicker: "Process optimization and systems integration in Saxony",
        heading: "More effective working time. Less friction.",
        text: "IBS-Saxony helps small and medium-sized companies, agricultural businesses and regional projects organize growing workflows, connect systems and introduce digital tools so teams feel real relief in daily work.",
        primary: "Request free initial call",
        secondary: "Review services",
        note: "Free, non-binding start: we clarify operational effort, friction and data gaps; specialist questions remain with qualified advisors.",
        proof: [
          ["Workflows", "Make work paths visible"],
          ["Systems", "Reduce data breaks"],
          ["Teams", "Relieve routine work"]
        ],
        chips: ["Small and medium-sized companies", "Agriculture", "Regional projects"],
        panel: {
          title: "Operational starting point",
          text: "A clear process map shows which steps can create order quickly and which topics need specialist review.",
          items: ["Capture current workflow", "Prioritize bottlenecks", "Define next measure"]
        }
      },
      sections: [
        {
          type: "problem",
          title: "When workflows grow, friction often grows with them.",
          text: "Many teams lose time because information sits in several systems, documentation is collected manually or new software does not fit the real workflow. We therefore start with the process, not with another tool list.",
          points: ["Less duplicate data entry", "Clearer responsibilities and handovers", "Digital solutions that remain usable"]
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
          title: "Four levers for more effective working time",
          cards: [
            ["Map processes", "We reveal where work stalls, which steps are duplicated and which decisions need better data."],
            ["Connect systems", "ERP, inventory, accounting, documentation and specialist tools are planned so data flows more cleanly."],
            ["Relieve teams", "Routine work, search time and media breaks are reduced so skilled people regain effective working time."],
            ["Smart Farming & operational data", "For agricultural businesses, digital documentation, field-record logic and operational data are structured so they remain practical to use."]
          ]
        },
        {
          type: "process",
          title: "How collaboration starts without a large project",
          text: "The first step is deliberately small: understand, prioritize and then start only the measures that quickly create clarity or relief.",
          steps: [
            ["1", "Review workflows", "We identify the work steps, systems and data sources involved today."],
            ["2", "Prioritize bottlenecks", "Together we separate quick improvements from topics that require more review or approval."],
            ["3", "Prepare implementation", "You receive one clear next measure: process change, interface, documentation structure or project plan."]
          ]
        },
        {
          type: "products",
          hidden: true,
          title: "Tools are built from real workflows",
          text: "IBS-DocuFlow, PDF Toolkit and agricultural data structures are not treated as ends in themselves. They should help where documents, proof, approvals and decisions create unnecessary work today.",
          cta: "Learn how we work"
        }
      ],
      faq: [
        ["What happens in the initial call?", "We discuss your current workflow, involved systems, recurring friction points and possible first operational improvements. The result is practical orientation, not legal, tax, financial or insolvency-related assessment."],
        ["Is the initial call free?", "Yes. The first orientation call is free and non-binding. It helps identify operational starting points and whether collaboration makes sense."],
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
      ]
    },
    references: {
      title: "Work examples | IBS-Saxony",
      description: "Example fields for operational process optimization, digitalization and data structuring by IBS-Saxony.",
      heading: "Work fields where operational order creates impact",
      intro: "These examples describe typical tasks. Concrete client references, quotes, metrics or partner mentions are published only after documented approval.",
      noticeTitle: "Approval before reference use",
      notice: "IBS-Saxony publishes client quotes and concrete project results only when reliable evidence and approval are available. Until then, examples remain deliberately general and data-minimal.",
      cases: [
        ["Process and documentation workflows", "Map workflows, reveal media breaks and structure documents so responsibilities and next steps become clearer."],
        ["Agricultural operational data", "Organize field-record logic, documentation and operational data so practical decisions and records are better prepared."],
        ["Project and customer coordination", "Bring orders, contacts, templates and project status into a clearer structure so teams search less and hand over work more cleanly."]
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
