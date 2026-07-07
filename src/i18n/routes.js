export const routeMap = {
  home: { de: "", en: "" },
  services: { de: "leistungen", en: "services" },
  processDocs: { de: "prozess-und-dokumentationsablaeufe", en: "process-and-documentation-workflows" },
  references: { de: "referenzen", en: "references" },
  about: { de: "ueber-uns", en: "about" },
  contact: { de: "kontakt", en: "contact" },
  imprint: { de: "impressum", en: "imprint" },
  privacy: { de: "datenschutz", en: "privacy" },
  styleguide: { de: "styleguide", en: "styleguide" }
};

export function getPath(locale, key) {
  const slug = routeMap[key]?.[locale] ?? "";
  return `/${locale}/${slug}`.replace(/\/$/, "/");
}

export function resolveRoute(locale, slug = "") {
  const cleanSlug = (slug || "").replace(/^\/|\/$/g, "");
  return Object.entries(routeMap).find(([, routes]) => routes[locale] === cleanSlug)?.[0] || null;
}

export function alternatePath(currentLocale, routeKey) {
  const other = currentLocale === "de" ? "en" : "de";
  return getPath(other, routeKey);
}

export function allLocalizedPaths() {
  return Object.entries(routeMap).flatMap(([key, routes]) =>
    Object.entries(routes).map(([lang, slug]) => ({
      key,
      lang,
      slug,
      path: getPath(lang, key)
    }))
  );
}
