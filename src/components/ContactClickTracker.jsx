import { useEffect } from "react";

const CONSENT_KEY = "ibs-saxony-analytics-consent";

function contactType(href) {
  if (href.startsWith("mailto:")) return "email";
  if (href.startsWith("tel:")) return "phone";
  if (href.includes("wa.me/")) return "whatsapp";
  return null;
}

export default function ContactClickTracker() {
  useEffect(() => {
    function handleClick(event) {
      const link = event.target.closest("a[href]");
      if (!link) return;

      const type = contactType(link.href);
      if (!type || localStorage.getItem(CONSENT_KEY) !== "accepted" || typeof window.gtag !== "function") {
        return;
      }

      window.gtag("event", "contact_click", {
        contact_type: type,
        page_path: window.location.pathname
      });
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}

