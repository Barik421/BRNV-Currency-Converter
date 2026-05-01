const CONSENT_STORAGE_KEY = "brnvCookieConsent";
const ADSENSE_CLIENT_ID = "ca-pub-3597944314037621";

function getSavedConsent() {
  try {
    return localStorage.getItem(CONSENT_STORAGE_KEY);
  } catch {
    return null;
  }
}

function saveConsent(value) {
  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, value);
  } catch {
    // If storage is unavailable, keep the current page session functional.
  }
}

function updateGoogleConsent(value) {
  if (typeof window.gtag !== "function") return;

  const granted = value === "accepted";
  window.gtag("consent", "update", {
    analytics_storage: granted ? "granted" : "denied",
    ad_storage: granted ? "granted" : "denied",
    ad_user_data: granted ? "granted" : "denied",
    ad_personalization: granted ? "granted" : "denied"
  });
}

function loadAdSense() {
  if (getSavedConsent() !== "accepted") return;
  if (document.querySelector(`script[src*="${ADSENSE_CLIENT_ID}"]`)) return;

  const script = document.createElement("script");
  script.async = true;
  script.crossOrigin = "anonymous";
  script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`;
  script.addEventListener("load", () => {
    window.dispatchEvent(new CustomEvent("brnv:adsense-ready"));
  });
  document.head.append(script);
}

function setConsent(value) {
  saveConsent(value);
  updateGoogleConsent(value);
  document.documentElement.dataset.consent = value;
  window.dispatchEvent(new CustomEvent("brnv:consent-changed", { detail: { value } }));

  if (value === "accepted") {
    loadAdSense();
  }
}

function createConsentBanner() {
  const banner = document.createElement("section");
  banner.className = "consent-banner";
  banner.setAttribute("aria-label", "Cookie consent");
  banner.innerHTML = `
    <div class="consent-copy">
      <p class="consent-eyebrow">Privacy choices</p>
      <h2>Cookies, analytics and ads</h2>
      <p>BRNV Converter uses Google Analytics to understand visits and Google AdSense to show ads. You can accept or reject optional analytics and advertising cookies.</p>
      <a href="privacy.html">Privacy Policy</a>
    </div>
    <div class="consent-actions">
      <button class="text-button text-button--secondary pressable" type="button" data-consent-choice="rejected">Reject</button>
      <button class="text-button pressable" type="button" data-consent-choice="accepted">Accept all</button>
    </div>
  `;

  banner.querySelectorAll("[data-consent-choice]").forEach((button) => {
    button.addEventListener("click", () => {
      setConsent(button.dataset.consentChoice);
      banner.classList.add("is-hiding");
      window.setTimeout(() => banner.remove(), 220);
    });
  });

  document.body.append(banner);
  window.requestAnimationFrame(() => banner.classList.add("is-visible"));
}

function initConsent() {
  const savedConsent = getSavedConsent();

  if (savedConsent === "accepted" || savedConsent === "rejected") {
    document.documentElement.dataset.consent = savedConsent;
    updateGoogleConsent(savedConsent);

    if (savedConsent === "accepted") {
      loadAdSense();
    }

    return;
  }

  document.documentElement.dataset.consent = "pending";
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", createConsentBanner, { once: true });
  } else {
    createConsentBanner();
  }
}

window.BRNVConsent = {
  canUseAds: () => getSavedConsent() === "accepted",
  setConsent,
  loadAdSense
};

initConsent();
