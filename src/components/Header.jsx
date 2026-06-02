import { useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "../config/site.js";

export default function Header({ locale, labels, navItems, currentPath, alternateHref }) {
  const [open, setOpen] = useState(false);
  const alternateLabel = locale === "de" ? "EN" : "DE";

  return (
    <header className="site-header" data-menu-open={open}>
      <a className="brand" href={`/${locale}/`} aria-label="IBS-Saxony Startseite">
        <img src={site.assets.logo} alt="IBS-Saxony" />
      </a>
      <nav className="desktop-nav" aria-label="Hauptnavigation">
        {navItems.map((item) => (
          <a key={item.key} href={item.href} aria-current={currentPath === item.href ? "page" : undefined}>
            {item.label}
          </a>
        ))}
      </nav>
      <div className="header-actions">
        <a className="lang-switch" href={alternateHref} aria-label={labels.languageLabel}>
          {alternateLabel}
        </a>
        <a className="button button-small button-gold" href={`/${locale}/${locale === "de" ? "kontakt" : "contact"}`}>
          {labels.cta}
        </a>
        <button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-nav">
          {open ? <X size={24} /> : <Menu size={24} />}
          <span className="sr-only">Menu</span>
        </button>
      </div>
      <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile Navigation">
        {navItems.map((item) => (
          <a key={item.key} href={item.href}>
            {item.label}
          </a>
        ))}
        <a href={alternateHref}>{alternateLabel}</a>
        <a className="button button-gold" href={`/${locale}/${locale === "de" ? "kontakt" : "contact"}`}>
          {labels.cta}
        </a>
      </nav>
    </header>
  );
}
