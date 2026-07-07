import { useEffect, useState } from "react";

const STORAGE_KEY = "ibs-saxony-analytics-consent";

function loadGoogleAnalytics(measurementId) {
  if (!measurementId || window.__ibsSaxonyGaLoaded) return;
  window.__ibsSaxonyGaLoaded = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", measurementId, {
    anonymize_ip: true,
    cookie_flags: "SameSite=None;Secure"
  });
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
  document.head.appendChild(script);
}

function setClarityConsent(analyticsGranted) {
  if (!window.clarity) return;
  window.clarity("consentv2", {
    ad_Storage: "denied",
    analytics_Storage: analyticsGranted ? "granted" : "denied"
  });
}

function loadMicrosoftClarity(projectId) {
  if (!projectId || window.__ibsSaxonyClarityLoaded) return;
  window.__ibsSaxonyClarityLoaded = true;
  window.clarity = window.clarity || function clarity() {
    (window.clarity.q = window.clarity.q || []).push(arguments);
  };
  setClarityConsent(true);

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.clarity.ms/tag/${encodeURIComponent(projectId)}`;
  document.head.appendChild(script);
}

function loadAnalytics({ measurementId, clarityProjectId }) {
  loadGoogleAnalytics(measurementId);
  loadMicrosoftClarity(clarityProjectId);
}

export default function ConsentBanner({ copy, privacyHref, measurementId, clarityProjectId }) {
  const [choice, setChoice] = useState(null);
  const hasAnalyticsTools = Boolean(measurementId || clarityProjectId);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    setChoice(stored);
    if (stored === "accepted") {
      loadAnalytics({ measurementId, clarityProjectId });
    }
  }, [measurementId, clarityProjectId]);

  useEffect(() => {
    const reset = () => {
      localStorage.removeItem(STORAGE_KEY);
      setClarityConsent(false);
      if (window.clarity) {
        window.clarity("consent", false);
      }
      setChoice(null);
    };
    window.addEventListener("ibs-saxony-reset-consent", reset);
    return () => window.removeEventListener("ibs-saxony-reset-consent", reset);
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setChoice("accepted");
    loadAnalytics({ measurementId, clarityProjectId });
  };

  const decline = () => {
    localStorage.setItem(STORAGE_KEY, "declined");
    setClarityConsent(false);
    setChoice("declined");
  };

  if (choice || !hasAnalyticsTools) return null;

  return (
    <aside className="consent-banner" aria-label={copy.title}>
      <div>
        <h2>{copy.title}</h2>
        <p>{copy.text}</p>
        <a href={privacyHref}>{copy.privacy}</a>
      </div>
      <div className="consent-actions">
        <button className="button button-gold consent-primary" type="button" onClick={accept}>
          {copy.accept}
        </button>
        <button className="button button-secondary" type="button" onClick={decline}>
          {copy.decline}
        </button>
      </div>
    </aside>
  );
}
