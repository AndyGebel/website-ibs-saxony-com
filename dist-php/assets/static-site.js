(function () {
  const CONSENT_KEY = "ibs-saxony-analytics-consent";
  const CLARITY_DENIED = { ad_Storage: "denied", analytics_Storage: "denied" };
  const CLARITY_GRANTED = { ad_Storage: "denied", analytics_Storage: "granted" };

  function bySelector(selector) {
    return document.querySelector(selector);
  }

  function setupMenu() {
    const header = bySelector(".site-header");
    const button = bySelector(".menu-button");
    if (!header || !button) return;

    function setOpen(open) {
      header.dataset.menuOpen = open ? "true" : "false";
      button.setAttribute("aria-expanded", open ? "true" : "false");
    }

    button.addEventListener("click", () => {
      setOpen(header.dataset.menuOpen !== "true");
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") setOpen(false);
    });

    header.querySelectorAll(".mobile-nav a").forEach((link) => {
      link.addEventListener("click", () => setOpen(false));
    });
  }

  function ensureClarityQueue() {
    window.clarity =
      window.clarity ||
      function clarity() {
        (window.clarity.q = window.clarity.q || []).push(arguments);
      };
    window.clarity("consentv2", CLARITY_DENIED);
  }

  function setClarityConsent(granted) {
    if (!window.clarity) return;
    window.clarity("consentv2", granted ? CLARITY_GRANTED : CLARITY_DENIED);
  }

  function clearClarityCookies() {
    const host = window.location.hostname;
    const domains = ["", host, `.${host}`];
    const parts = host.split(".");
    if (parts.length > 2) domains.push(`.${parts.slice(-2).join(".")}`);

    ["_clck", "_clsk"].forEach((name) => {
      domains.forEach((domain) => {
        document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax${domain ? `; domain=${domain}` : ""}`;
      });
    });
  }

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

  function loadMicrosoftClarity(projectId) {
    if (!projectId || window.__ibsSaxonyClarityLoaded) return;
    ensureClarityQueue();
    window.__ibsSaxonyClarityLoaded = true;

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.clarity.ms/tag/${encodeURIComponent(projectId)}`;
    document.head.appendChild(script);

    setClarityConsent(true);
  }

  function loadAnalytics() {
    const config = window.IBS_ANALYTICS_CONFIG || {};
    loadGoogleAnalytics(config.measurementId);
    loadMicrosoftClarity(config.clarityProjectId);
  }

  function setupConsent() {
    const config = window.IBS_ANALYTICS_CONFIG || {};
    const hasAnalyticsTools = Boolean(config.measurementId || config.clarityProjectId);
    const banner = bySelector(".consent-banner");

    if (!hasAnalyticsTools) {
      if (banner) banner.remove();
      return;
    }

    if (config.clarityProjectId) ensureClarityQueue();

    const stored = window.localStorage.getItem(CONSENT_KEY);
    if (stored === "accepted") {
      if (banner) banner.remove();
      loadAnalytics();
      return;
    }

    if (stored === "declined") {
      if (banner) banner.remove();
      setClarityConsent(false);
      clearClarityCookies();
      return;
    }

    if (!banner) return;
    banner.hidden = false;

    const acceptButton = banner.querySelector(".consent-primary");
    const declineButton = banner.querySelector(".consent-actions .button-secondary");

    if (acceptButton) {
      acceptButton.addEventListener("click", () => {
        window.localStorage.setItem(CONSENT_KEY, "accepted");
        banner.remove();
        loadAnalytics();
      });
    }

    if (declineButton) {
      declineButton.addEventListener("click", () => {
        window.localStorage.setItem(CONSENT_KEY, "declined");
        setClarityConsent(false);
        clearClarityCookies();
        banner.remove();
      });
    }

    window.addEventListener("ibs-saxony-reset-consent", () => {
      window.localStorage.removeItem(CONSENT_KEY);
      setClarityConsent(false);
      clearClarityCookies();
      window.location.reload();
    });
  }

  function contactType(href) {
    if (href.startsWith("mailto:")) return "email";
    if (href.startsWith("tel:")) return "phone";
    if (href.includes("wa.me/")) return "whatsapp";
    return null;
  }

  function setupContactTracking() {
    document.addEventListener("click", (event) => {
      const link = event.target.closest("a[href]");
      if (!link || window.localStorage.getItem(CONSENT_KEY) !== "accepted") return;

      const type = contactType(link.href);
      if (!type) return;

      if (typeof window.gtag === "function") {
        window.gtag("event", "contact_click", {
          contact_type: type,
          page_path: window.location.pathname
        });
      }

      if (typeof window.clarity === "function") {
        window.clarity("event", `conversion_contact_${type}`);
      }
    });
  }


  function setupContactForm() {
    const status = bySelector("[data-form-status]");
    const formState = new URLSearchParams(window.location.search).get("formular");

    if (status && formState) {
      const isSuccess = formState === "gesendet" || formState === "sent";
      const isError = formState === "fehler" || formState === "error";
      if (isSuccess || isError) {
        status.textContent = isSuccess ? status.dataset.success : status.dataset.error;
        status.classList.add(isSuccess ? "form-status-success" : "form-status-error");
        status.hidden = false;
      }
    }

    document.querySelectorAll("[data-contact-form]").forEach((form) => {
      form.addEventListener("submit", () => {
        if (window.localStorage.getItem(CONSENT_KEY) !== "accepted") return;

        if (typeof window.gtag === "function") {
          window.gtag("event", "contact_form_submit", {
            page_path: window.location.pathname
          });
        }

        if (typeof window.clarity === "function") {
          window.clarity("event", "conversion_contact_form");
        }
      });
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    setupMenu();
    setupConsent();
    setupContactTracking();
    setupContactForm();
  });
})();
