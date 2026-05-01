const API_BASE = "https://open.er-api.com/v6/latest/";
const STORAGE_KEYS = {
  from: "brnvConverterFromCurrency",
  to: "brnvConverterToCurrency",
  theme: "brnvConverterTheme",
  language: "brnvConverterLanguage"
};

const translations = {
  en: {
    documentTitle: "BRNV Currency Converter | Fast Currency Converter",
    metaDescription: "BRNV Currency Converter is a simple, fast and clean currency conversion web app with live rates, popular currencies and a premium red and white interface.",
    brandHome: "BRNV Currency Converter home",
    languageToggle: "Switch language",
    themeToDark: "Switch to dark theme",
    themeToLight: "Switch to light theme",
    heroEyebrow: "Premium exchange utility",
    heroTitle: "BRNV Currency Converter",
    heroSubtitle: "Simple, fast and clean currency conversion",
    converterTitle: "Currency converter",
    fromLabel: "From",
    toLabel: "To",
    swapCurrencies: "Swap currencies",
    loadingRates: "Loading latest exchange rates...",
    liveRatesLoaded: "Live rates loaded.",
    rateLoadError: "Please try again in a moment.",
    disclaimer: "Rates are provided for informational purposes only.",
    advertisement: "Advertisement",
    adPlaceholder: "Google Ad Banner",
    popularEyebrow: "Quick routes",
    popularTitle: "Popular conversions",
    toWord: "to",
    cooperation: "For cooperation:",
    privacy: "Privacy Policy",
    about: "About",
    contact: "Contact",
    currenciesEyebrow: "Currencies",
    selectCurrency: "Select Currency",
    closeCurrencySelector: "Close currency selector",
    searchPlaceholder: "Search currency...",
    searchResults: "Search results",
    popularCurrencies: "Popular currencies",
    allCurrencies: "All currencies",
    noCurrenciesFound: "No currencies found.",
    currencyNames: {
      USD: "US Dollar",
      EUR: "Euro",
      GBP: "British Pound",
      UAH: "Ukrainian Hryvnia",
      PLN: "Polish Zloty",
      CAD: "Canadian Dollar",
      AUD: "Australian Dollar",
      CHF: "Swiss Franc",
      JPY: "Japanese Yen",
      CNY: "Chinese Yuan",
      HKD: "Hong Kong Dollar",
      SGD: "Singapore Dollar",
      NZD: "New Zealand Dollar",
      SEK: "Swedish Krona",
      NOK: "Norwegian Krone",
      DKK: "Danish Krone",
      CZK: "Czech Koruna",
      TRY: "Turkish Lira",
      AED: "UAE Dirham"
    }
  },
  uk: {
    documentTitle: "BRNV Конвертер валют | Швидкий конвертер валют",
    metaDescription: "BRNV Конвертер валют - простий, швидкий і чистий вебдодаток для конвертації валют із живими курсами та преміальним червоно-білим інтерфейсом.",
    brandHome: "Головна BRNV Конвертера валют",
    languageToggle: "Перемкнути мову",
    themeToDark: "Увімкнути темну тему",
    themeToLight: "Увімкнути світлу тему",
    heroEyebrow: "Преміальний валютний інструмент",
    heroTitle: "BRNV Конвертер валют",
    heroSubtitle: "Проста, швидка та чиста конвертація валют",
    converterTitle: "Конвертер валют",
    fromLabel: "З",
    toLabel: "В",
    swapCurrencies: "Поміняти валюти місцями",
    loadingRates: "Завантажуємо актуальні курси...",
    liveRatesLoaded: "Актуальні курси завантажено.",
    rateLoadError: "Спробуйте ще раз за мить.",
    disclaimer: "Курси надаються лише з інформаційною метою.",
    advertisement: "Реклама",
    adPlaceholder: "Google Ad банер",
    popularEyebrow: "Швидкі напрямки",
    popularTitle: "Популярні конвертації",
    toWord: "у",
    cooperation: "Для співпраці:",
    privacy: "Політика конфіденційності",
    about: "Про нас",
    contact: "Контакти",
    currenciesEyebrow: "Валюти",
    selectCurrency: "Оберіть валюту",
    closeCurrencySelector: "Закрити вибір валюти",
    searchPlaceholder: "Пошук валюти...",
    searchResults: "Результати пошуку",
    popularCurrencies: "Популярні валюти",
    allCurrencies: "Усі валюти",
    noCurrenciesFound: "Валют не знайдено.",
    currencyNames: {
      USD: "Долар США",
      EUR: "Євро",
      GBP: "Британський фунт",
      UAH: "Українська гривня",
      PLN: "Польський злотий",
      CAD: "Канадський долар",
      AUD: "Австралійський долар",
      CHF: "Швейцарський франк",
      JPY: "Японська єна",
      CNY: "Китайський юань",
      HKD: "Гонконгський долар",
      SGD: "Сингапурський долар",
      NZD: "Новозеландський долар",
      SEK: "Шведська крона",
      NOK: "Норвезька крона",
      DKK: "Данська крона",
      CZK: "Чеська крона",
      TRY: "Турецька ліра",
      AED: "Дирхам ОАЕ"
    }
  }
};

const currencies = [
  { code: "USD", name: "US Dollar", flag: "🇺🇸" },
  { code: "EUR", name: "Euro", flag: "🇪🇺" },
  { code: "GBP", name: "British Pound", flag: "🇬🇧" },
  { code: "UAH", name: "Ukrainian Hryvnia", flag: "🇺🇦" },
  { code: "PLN", name: "Polish Zloty", flag: "🇵🇱" },
  { code: "CAD", name: "Canadian Dollar", flag: "🇨🇦" },
  { code: "AUD", name: "Australian Dollar", flag: "🇦🇺" },
  { code: "CHF", name: "Swiss Franc", flag: "🇨🇭" },
  { code: "JPY", name: "Japanese Yen", flag: "🇯🇵" },
  { code: "CNY", name: "Chinese Yuan", flag: "🇨🇳" },
  { code: "HKD", name: "Hong Kong Dollar", flag: "🇭🇰" },
  { code: "SGD", name: "Singapore Dollar", flag: "🇸🇬" },
  { code: "NZD", name: "New Zealand Dollar", flag: "🇳🇿" },
  { code: "SEK", name: "Swedish Krona", flag: "🇸🇪" },
  { code: "NOK", name: "Norwegian Krone", flag: "🇳🇴" },
  { code: "DKK", name: "Danish Krone", flag: "🇩🇰" },
  { code: "CZK", name: "Czech Koruna", flag: "🇨🇿" },
  { code: "TRY", name: "Turkish Lira", flag: "🇹🇷" },
  { code: "AED", name: "UAE Dirham", flag: "🇦🇪" }
];

const popularConversions = [
  ["EUR", "USD"],
  ["USD", "EUR"],
  ["EUR", "UAH"],
  ["USD", "UAH"],
  ["GBP", "EUR"],
  ["PLN", "UAH"],
  ["CNY", "USD"],
  ["CAD", "USD"],
  ["AUD", "USD"]
];

const state = {
  fromCurrency: localStorage.getItem(STORAGE_KEYS.from) || "EUR",
  toCurrency: localStorage.getItem(STORAGE_KEYS.to) || "USD",
  language: "en",
  activeInput: "from",
  selectingSide: "from",
  ratesCache: new Map(),
  isReady: false,
  requestToken: 0
};

const els = {
  html: document.documentElement,
  metaDescription: document.querySelector('meta[name="description"]'),
  ogTitle: document.querySelector('meta[property="og:title"]'),
  ogDescription: document.querySelector('meta[property="og:description"]'),
  languageToggle: document.getElementById("languageToggle"),
  languageLabel: document.getElementById("languageLabel"),
  themeToggle: document.getElementById("themeToggle"),
  themeIcon: document.querySelector(".theme-toggle__icon"),
  statusLine: document.getElementById("statusLine"),
  converterFields: document.getElementById("converterFields"),
  fromRow: document.getElementById("fromRow"),
  toRow: document.getElementById("toRow"),
  fromAmount: document.getElementById("fromAmount"),
  toAmount: document.getElementById("toAmount"),
  fromButton: document.getElementById("fromCurrencyButton"),
  toButton: document.getElementById("toCurrencyButton"),
  fromFlag: document.getElementById("fromFlag"),
  toFlag: document.getElementById("toFlag"),
  fromCode: document.getElementById("fromCode"),
  toCode: document.getElementById("toCode"),
  forwardRate: document.getElementById("forwardRate"),
  reverseRate: document.getElementById("reverseRate"),
  swapButton: document.getElementById("swapButton"),
  modal: document.getElementById("currencyModal"),
  currencySearch: document.getElementById("currencySearch"),
  currencyList: document.getElementById("currencyList"),
  popularGrid: document.getElementById("popularGrid")
};

function t(key) {
  return translations[state.language][key] || translations.en[key] || key;
}

function getCurrencyName(code) {
  return translations[state.language].currencyNames[code] || translations.en.currencyNames[code] || code;
}

function trackEvent(name, params = {}) {
  if (typeof window.gtag === "function") {
    window.gtag("event", name, params);
  }
}

function getCurrency(code) {
  return currencies.find((currency) => currency.code === code) || currencies[0];
}

function detectInitialLanguage() {
  const savedLanguage = localStorage.getItem(STORAGE_KEYS.language);
  if (savedLanguage === "uk" || savedLanguage === "en") {
    return savedLanguage;
  }

  return "en";
}

function applyLanguage(language, shouldSave = false) {
  state.language = language;
  els.html.lang = language === "uk" ? "uk" : "en";
  els.languageLabel.textContent = language === "uk" ? "EN" : "UA";
  document.title = t("documentTitle");

  if (els.metaDescription) els.metaDescription.content = t("metaDescription");
  if (els.ogTitle) els.ogTitle.content = t("heroTitle");
  if (els.ogDescription) els.ogDescription.content = t("heroSubtitle");

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
    element.dataset.i18nAttr.split(",").forEach((pair) => {
      const [attribute, key] = pair.split(":").map((part) => part.trim());
      if (attribute && key) {
        element.setAttribute(attribute, t(key));
      }
    });
  });

  applyTheme(els.html.dataset.theme || "light");
  renderPopularConversions();
  renderCurrencyList();

  if (state.isReady) {
    setStatus(t("liveRatesLoaded"));
  } else {
    setStatus(t("loadingRates"));
  }

  if (shouldSave) {
    trackEvent("language_changed", { language });
  }
}

function formatAmount(value) {
  if (!Number.isFinite(value)) return "";
  return new Intl.NumberFormat("en-US", {
    useGrouping: false,
    maximumFractionDigits: value >= 100 ? 2 : 4
  }).format(value);
}

function formatRate(value) {
  if (!Number.isFinite(value)) return "...";
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: value >= 10 ? 4 : 6
  }).format(value);
}

function formatPopularRate(value) {
  if (!Number.isFinite(value)) return "N/A";
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: value >= 10 ? 2 : 4,
    minimumFractionDigits: value >= 10 ? 0 : 2
  }).format(value);
}

function getSearchText(currency) {
  const names = Object.values(translations)
    .map((translation) => translation.currencyNames[currency.code])
    .filter(Boolean);

  return [currency.code, currency.name, ...names].join(" ").toLowerCase();
}

function parseInputValue(input) {
  const normalized = input.value.replace(",", ".");
  const value = Number.parseFloat(normalized);
  return Number.isFinite(value) ? value : 0;
}

function applyTheme(theme, shouldSave = false) {
  els.html.dataset.theme = theme;
  els.themeIcon.textContent = theme === "dark" ? "☾" : "☀";
  els.themeToggle.setAttribute("aria-label", theme === "dark" ? t("themeToLight") : t("themeToDark"));

  if (shouldSave) {
    localStorage.setItem(STORAGE_KEYS.theme, theme);
    trackEvent("theme_changed", { theme });
  }
}

function initTheme() {
  const savedTheme = localStorage.getItem(STORAGE_KEYS.theme);
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  applyTheme(savedTheme || systemTheme);
}

async function fetchRates(base) {
  if (state.ratesCache.has(base)) {
    return state.ratesCache.get(base);
  }

  const response = await fetch(`${API_BASE}${base}`);
  if (!response.ok) {
    throw new Error("Could not load exchange rates.");
  }

  const data = await response.json();
  if (data.result !== "success" || !data.rates) {
    throw new Error("Exchange rate service returned an invalid response.");
  }

  const rates = { ...data.rates, [base]: 1 };
  state.ratesCache.set(base, rates);
  return rates;
}

async function getRate(from, to) {
  const rates = await fetchRates(from);
  const rate = rates[to];
  if (!Number.isFinite(rate)) {
    throw new Error(`Rate for ${from} to ${to} is not available.`);
  }
  return rate;
}

function setStatus(message, isError = false) {
  els.statusLine.textContent = message;
  els.statusLine.classList.toggle("is-error", isError);
}

function updateCurrencyButtons() {
  const from = getCurrency(state.fromCurrency);
  const to = getCurrency(state.toCurrency);

  els.fromFlag.textContent = from.flag;
  els.toFlag.textContent = to.flag;
  els.fromCode.textContent = from.code;
  els.toCode.textContent = to.code;
}

function animateValue(input) {
  input.classList.remove("value-pop");
  void input.offsetWidth;
  input.classList.add("value-pop");
}

async function updateConversion(source = state.activeInput, shouldTrack = false) {
  const requestToken = ++state.requestToken;
  updateCurrencyButtons();
  setStatus(t("loadingRates"));

  try {
    const forward = await getRate(state.fromCurrency, state.toCurrency);
    const reverse = await getRate(state.toCurrency, state.fromCurrency);
    if (requestToken !== state.requestToken) return;

    if (source === "from") {
      const converted = parseInputValue(els.fromAmount) * forward;
      els.toAmount.value = converted ? formatAmount(converted) : "";
      animateValue(els.toAmount);
    } else if (source === "to") {
      const converted = parseInputValue(els.toAmount) * reverse;
      els.fromAmount.value = converted ? formatAmount(converted) : "";
      animateValue(els.fromAmount);
    }

    els.forwardRate.textContent = `1 ${state.fromCurrency} = ${formatRate(forward)} ${state.toCurrency}`;
    els.reverseRate.textContent = `1 ${state.toCurrency} = ${formatRate(reverse)} ${state.fromCurrency}`;
    setStatus(t("liveRatesLoaded"));
    state.isReady = true;

    if (shouldTrack) {
      trackEvent("currency_conversion", {
        from_currency: state.fromCurrency,
        to_currency: state.toCurrency,
        source
      });
    }
  } catch (error) {
    if (requestToken !== state.requestToken) return;
    setStatus(`${error.message} ${t("rateLoadError")}`, true);
  }
}

async function renderPopularConversions() {
  els.popularGrid.innerHTML = "";

  popularConversions.forEach(([from, to]) => {
    const card = document.createElement("button");
    card.className = "popular-card pressable";
    card.type = "button";
    const fromCurrency = getCurrency(from);
    const toCurrency = getCurrency(to);
    card.innerHTML = `
      <span class="popular-card__icons" aria-hidden="true">
        <span>${fromCurrency.flag}</span>
        <span>${toCurrency.flag}</span>
      </span>
      <span class="popular-card__meta">
        <span class="popular-card__pair">${from} ${t("toWord")} ${to}</span>
        <span class="popular-card__names">${getCurrencyName(from)} / ${getCurrencyName(to)}</span>
      </span>
      <span class="popular-rate" data-pair="${from}-${to}">...</span>
    `;
    card.addEventListener("click", () => {
      state.fromCurrency = from;
      state.toCurrency = to;
      state.activeInput = "from";
      localStorage.setItem(STORAGE_KEYS.from, from);
      localStorage.setItem(STORAGE_KEYS.to, to);
      updateConversion("from", true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    els.popularGrid.appendChild(card);

    getRate(from, to)
      .then((rate) => {
        card.querySelector(".popular-rate").textContent = formatPopularRate(rate);
      })
      .catch(() => {
        card.querySelector(".popular-rate").textContent = "N/A";
      });
  });
}

function renderCurrencyList() {
  const query = els.currencySearch.value.trim().toLowerCase();
  const filtered = currencies.filter((currency) => {
    return getSearchText(currency).includes(query);
  });

  const sections = query
    ? [{ title: t("searchResults"), items: filtered }]
    : [
        { title: t("popularCurrencies"), items: currencies },
        { title: t("allCurrencies"), items: currencies }
      ];

  els.currencyList.innerHTML = "";

  sections.forEach((section) => {
    const heading = document.createElement("p");
    heading.className = "list-heading";
    heading.textContent = section.title;
    els.currencyList.appendChild(heading);

    if (!section.items.length) {
      const empty = document.createElement("p");
      empty.className = "currency-option__name";
      empty.textContent = t("noCurrenciesFound");
      els.currencyList.appendChild(empty);
      return;
    }

    section.items.forEach((currency) => {
      const option = document.createElement("button");
      option.className = "currency-option pressable";
      option.type = "button";
      option.innerHTML = `
        <span class="currency-option__flag">${currency.flag}</span>
        <span class="currency-option__meta">
          <span class="currency-option__code">${currency.code}</span>
          <span class="currency-option__name">${getCurrencyName(currency.code)}</span>
        </span>
      `;
      option.addEventListener("click", () => selectCurrency(currency.code));
      els.currencyList.appendChild(option);
    });
  });
}

function openCurrencyModal(side) {
  state.selectingSide = side;
  els.modal.classList.add("is-open");
  els.modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  els.currencySearch.value = "";
  renderCurrencyList();
  setTimeout(() => els.currencySearch.focus(), 80);
  trackEvent("currency_selector_opened", { side });
}

function closeCurrencyModal() {
  els.modal.classList.remove("is-open");
  els.modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function selectCurrency(code) {
  if (state.selectingSide === "from") {
    state.fromCurrency = code;
    localStorage.setItem(STORAGE_KEYS.from, code);
    state.activeInput = "from";
  } else {
    state.toCurrency = code;
    localStorage.setItem(STORAGE_KEYS.to, code);
    state.activeInput = "to";
  }

  closeCurrencyModal();
  updateConversion(state.activeInput, true);
}

function animateRows() {
  els.fromRow.classList.add("is-moving");
  els.toRow.classList.add("is-moving");
  setTimeout(() => {
    els.fromRow.classList.remove("is-moving");
    els.toRow.classList.remove("is-moving");
  }, 230);
}

function swapCurrencies() {
  const previousFrom = state.fromCurrency;
  state.fromCurrency = state.toCurrency;
  state.toCurrency = previousFrom;
  localStorage.setItem(STORAGE_KEYS.from, state.fromCurrency);
  localStorage.setItem(STORAGE_KEYS.to, state.toCurrency);

  const previousFromValue = els.fromAmount.value;
  els.fromAmount.value = els.toAmount.value;
  els.toAmount.value = previousFromValue;

  els.swapButton.classList.add("is-rotating");
  animateRows();
  setTimeout(() => els.swapButton.classList.remove("is-rotating"), 360);

  updateConversion("preserve", true);
  trackEvent("currency_swap", {
    from_currency: state.fromCurrency,
    to_currency: state.toCurrency
  });
}

function bindEvents() {
  els.themeToggle.addEventListener("click", () => {
    const nextTheme = els.html.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(nextTheme, true);
  });

  els.languageToggle.addEventListener("click", () => {
    applyLanguage(state.language === "uk" ? "en" : "uk", true);
  });

  els.fromAmount.addEventListener("input", () => {
    state.activeInput = "from";
    updateConversion("from", true);
  });

  els.toAmount.addEventListener("input", () => {
    state.activeInput = "to";
    updateConversion("to", true);
  });

  els.fromButton.addEventListener("click", () => openCurrencyModal("from"));
  els.toButton.addEventListener("click", () => openCurrencyModal("to"));
  els.swapButton.addEventListener("click", swapCurrencies);
  els.currencySearch.addEventListener("input", renderCurrencyList);

  document.querySelectorAll("[data-close-modal]").forEach((element) => {
    element.addEventListener("click", closeCurrencyModal);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeCurrencyModal();
    }
  });
}

function initAds() {
  const adSlot = document.querySelector(".adsbygoogle");
  const clientId = adSlot?.dataset.adClient || "";
  if (!adSlot || clientId.includes("XXXXXXXXXXXXXXXX")) {
    return;
  }

  try {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  } catch {
    // AdSense may be blocked locally; the placeholder remains layout-safe.
  }
}

function init() {
  initTheme();
  applyLanguage(detectInitialLanguage());
  bindEvents();
  els.fromAmount.value = "100";
  updateCurrencyButtons();
  updateConversion("from");
  initAds();
}

init();
