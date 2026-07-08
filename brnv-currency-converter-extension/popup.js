const API_BASE = "https://open.er-api.com/v6/latest/";
const CRYPTO_API = "https://api.coingecko.com/api/v3/simple/price";
const WEBSITE_URL = "https://brnvconverter.com";
const STORAGE_KEY = "brnvCurrencyConverterState";

const currencies = [
  { code: "USD", name: "US Dollar", flag: "🇺🇸", aliases: "долар доллар долар сша доллар сша американський долар американский доллар" },
  { code: "EUR", name: "Euro", flag: "🇪🇺", aliases: "євро евро" },
  { code: "GBP", name: "British Pound", flag: "🇬🇧", aliases: "фунт британський фунт британский фунт фунт стерлінгів фунт стерлингов" },
  { code: "UAH", name: "Ukrainian Hryvnia", flag: "🇺🇦", aliases: "гривня гривна українська гривня украинская гривна" },
  { code: "PLN", name: "Polish Zloty", flag: "🇵🇱", aliases: "злотий злотый польський злотий польский злотый" },
  { code: "CAD", name: "Canadian Dollar", flag: "🇨🇦", aliases: "канадський долар канадский доллар долар канада доллар канада" },
  { code: "AUD", name: "Australian Dollar", flag: "🇦🇺", aliases: "австралійський долар австралийский доллар долар австралія доллар австралия" },
  { code: "CHF", name: "Swiss Franc", flag: "🇨🇭", aliases: "франк швейцарський франк швейцарский франк" },
  { code: "JPY", name: "Japanese Yen", flag: "🇯🇵", aliases: "єна иена японська єна японская иена" },
  { code: "CNY", name: "Chinese Yuan", flag: "🇨🇳", aliases: "юань китайський юань китайский юань" },
  { code: "HKD", name: "Hong Kong Dollar", flag: "🇭🇰", aliases: "гонконгський долар гонконгский доллар долар гонконг доллар гонконг" },
  { code: "SGD", name: "Singapore Dollar", flag: "🇸🇬", aliases: "сингапурський долар сингапурский доллар долар сингапур доллар сингапур" },
  { code: "NZD", name: "New Zealand Dollar", flag: "🇳🇿", aliases: "новозеландський долар новозеландский доллар долар нова зеландія доллар новая зеландия" },
  { code: "SEK", name: "Swedish Krona", flag: "🇸🇪", aliases: "крона шведська крона шведская крона" },
  { code: "NOK", name: "Norwegian Krone", flag: "🇳🇴", aliases: "крона норвезька крона норвежская крона" },
  { code: "DKK", name: "Danish Krone", flag: "🇩🇰", aliases: "крона данська крона датская крона" },
  { code: "CZK", name: "Czech Koruna", flag: "🇨🇿", aliases: "крона чеська крона чешская крона" },
  { code: "TRY", name: "Turkish Lira", flag: "🇹🇷", aliases: "ліра лира турецька ліра турецкая лира" },
  { code: "AED", name: "UAE Dirham", flag: "🇦🇪", aliases: "дирхам дірхам дирхам оае дирхам оаэ дирхам емірати дирхам эмираты" },
  { code: "BTC", name: "Bitcoin", flag: "₿", aliases: "bitcoin btc біткоїн биткоин біткоін биткоін" },
  { code: "ETH", name: "Ethereum", flag: "Ξ", aliases: "ethereum eth ефіріум эфириум ефір эфир" },
  { code: "USDT", name: "Tether", flag: "₮", aliases: "tether usdt тезер тетер stablecoin стейблкоїн стейблкоин" },
  { code: "USDC", name: "USD Coin", flag: "$", aliases: "usd coin usdc stablecoin стейблкоїн стейблкоин" },
  { code: "BNB", name: "BNB", flag: "◆", aliases: "bnb binance coin бінанс бинанс" },
  { code: "SOL", name: "Solana", flag: "◎", aliases: "solana sol солана" },
  { code: "XRP", name: "XRP", flag: "✕", aliases: "xrp ripple ріпл рипл" },
  { code: "DOGE", name: "Dogecoin", flag: "Ð", aliases: "dogecoin doge догі доги" },
  { code: "ADA", name: "Cardano", flag: "₳", aliases: "cardano ada кардано" },
  { code: "TRX", name: "TRON", flag: "T", aliases: "tron trx трон" },
  { code: "TON", name: "Toncoin", flag: "◈", aliases: "ton toncoin тон" },
  { code: "AVAX", name: "Avalanche", flag: "A", aliases: "avalanche avax аваланч" },
  { code: "SHIB", name: "Shiba Inu", flag: "S", aliases: "shiba inu shib шиба" },
  { code: "DOT", name: "Polkadot", flag: "●", aliases: "polkadot dot полькадот" },
  { code: "LINK", name: "Chainlink", flag: "⬡", aliases: "chainlink link чейнлінк чейнлинк" },
  { code: "BCH", name: "Bitcoin Cash", flag: "Ƀ", aliases: "bitcoin cash bch біткоїн кеш биткоин кеш" },
  { code: "LTC", name: "Litecoin", flag: "Ł", aliases: "litecoin ltc лайткоїн лайткоин" },
  { code: "XLM", name: "Stellar", flag: "*", aliases: "stellar xlm стеллар" },
  { code: "SUI", name: "Sui", flag: "S", aliases: "sui суї суи" }
];

const cryptoIds = {
  BTC: "bitcoin",
  ETH: "ethereum",
  USDT: "tether",
  USDC: "usd-coin",
  BNB: "binancecoin",
  SOL: "solana",
  XRP: "ripple",
  DOGE: "dogecoin",
  ADA: "cardano",
  TRX: "tron",
  TON: "the-open-network",
  AVAX: "avalanche-2",
  SHIB: "shiba-inu",
  DOT: "polkadot",
  LINK: "chainlink",
  BCH: "bitcoin-cash",
  LTC: "litecoin",
  XLM: "stellar",
  SUI: "sui"
};

const state = {
  fromCurrency: "EUR",
  toCurrency: "USD",
  lastAmount: "1",
  activeInput: "from",
  theme: "light",
  selectingSide: "from",
  rates: {},
  cryptoUsdRates: null,
  isReady: false,
  isRestoring: true,
  requestToken: 0
};

const els = {
  root: document.documentElement,
  themeToggle: document.getElementById("themeToggle"),
  themeIcon: document.getElementById("themeIcon"),
  statusLine: document.getElementById("statusLine"),
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
  openWebsite: document.getElementById("openWebsite"),
  modal: document.getElementById("currencyModal"),
  modalHint: document.getElementById("modalHint"),
  modalBackdrop: document.getElementById("modalBackdrop"),
  closeModal: document.getElementById("closeModal"),
  currencySearch: document.getElementById("currencySearch"),
  currencyList: document.getElementById("currencyList")
};

function getCurrency(code) {
  return currencies.find((currency) => currency.code === code) || currencies[0];
}

function normalizeSearchText(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ґ/g, "г")
    .replace(/ё/g, "е")
    .replace(/’/g, "'")
    .trim();
}

function getPrecision(value) {
  const absolute = Math.abs(value);
  if (absolute >= 100) return 2;
  if (absolute >= 1) return 4;
  if (absolute >= 0.0001) return 8;
  return 10;
}

function formatNumber(value) {
  if (!Number.isFinite(value)) {
    return "";
  }

  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: getPrecision(value)
  }).format(value);
}

function formatInputValue(value) {
  if (!Number.isFinite(value)) {
    return "";
  }

  return Number.parseFloat(value.toFixed(getPrecision(value))).toString();
}

function setStatus(message, type = "success") {
  els.statusLine.textContent = message;
  els.statusLine.classList.toggle("is-loading", type === "loading");
  els.statusLine.classList.toggle("is-error", type === "error");
}

function animateValue(element) {
  element.classList.remove("is-updating");
  requestAnimationFrame(() => {
    element.classList.add("is-updating");
  });
}

function isCrypto(code) {
  return Boolean(cryptoIds[code]);
}

function getRate(fromCode, toCode) {
  if (fromCode === toCode) {
    return 1;
  }

  const fromUsd = getUsdValue(fromCode);
  const toUsd = getUsdValue(toCode);
  return Number.isFinite(fromUsd) && Number.isFinite(toUsd) ? fromUsd / toUsd : null;
}

function getUsdValue(code) {
  if (code === "USD") return 1;

  if (isCrypto(code)) {
    return state.cryptoUsdRates?.[code];
  }

  const fiatRate = state.rates[code];
  return Number.isFinite(fiatRate) ? 1 / fiatRate : null;
}

function updateCurrencyButtons() {
  const from = getCurrency(state.fromCurrency);
  const to = getCurrency(state.toCurrency);

  els.fromFlag.textContent = from.flag;
  els.toFlag.textContent = to.flag;
  els.fromCode.textContent = from.code;
  els.toCode.textContent = to.code;
}

function updateRateText() {
  const forward = getRate(state.fromCurrency, state.toCurrency);
  const reverse = forward ? 1 / forward : null;

  els.forwardRate.textContent = forward
    ? `1 ${state.fromCurrency} = ${formatNumber(forward)} ${state.toCurrency}`
    : `1 ${state.fromCurrency} = - ${state.toCurrency}`;
  els.reverseRate.textContent = reverse
    ? `1 ${state.toCurrency} = ${formatNumber(reverse)} ${state.fromCurrency}`
    : `1 ${state.toCurrency} = - ${state.fromCurrency}`;
}

function convertFromActiveInput() {
  updateCurrencyButtons();
  updateRateText();

  const rate = getRate(state.fromCurrency, state.toCurrency);
  if (!state.isReady || !rate) {
    return;
  }

  if (state.activeInput === "from") {
    const amount = Number.parseFloat(els.fromAmount.value);
    els.toAmount.value = Number.isFinite(amount) ? formatInputValue(amount * rate) : "";
    animateValue(els.toAmount);
    state.lastAmount = els.fromAmount.value;
  } else {
    const amount = Number.parseFloat(els.toAmount.value);
    els.fromAmount.value = Number.isFinite(amount) ? formatInputValue(amount / rate) : "";
    animateValue(els.fromAmount);
    state.lastAmount = els.toAmount.value;
  }

  saveState();
}

async function fetchRates() {
  const requestToken = Date.now();
  state.requestToken = requestToken;
  state.isReady = false;
  setStatus("Loading latest rates...", "loading");

  try {
    const [fiatResponse, cryptoResponse] = await Promise.all([
      fetch(`${API_BASE}USD`),
      fetch(`${CRYPTO_API}?ids=${Object.values(cryptoIds).join(",")}&vs_currencies=usd`)
    ]);

    if (!fiatResponse.ok || !cryptoResponse.ok) {
      throw new Error("Rate request failed");
    }

    const data = await fiatResponse.json();
    const cryptoData = await cryptoResponse.json();
    if (requestToken !== state.requestToken) {
      return;
    }

    if (data.result !== "success" || !data.rates) {
      throw new Error("Currency API returned an invalid response");
    }

    state.rates = data.rates;
    state.cryptoUsdRates = {};
    Object.entries(cryptoIds).forEach(([code, id]) => {
      const usdRate = cryptoData[id]?.usd;
      if (Number.isFinite(usdRate)) {
        state.cryptoUsdRates[code] = usdRate;
      }
    });
    state.isReady = true;
    setStatus("Live rates loaded.");
    convertFromActiveInput();
  } catch (error) {
    if (requestToken !== state.requestToken) {
      return;
    }

    state.isReady = false;
    state.rates = {};
    state.cryptoUsdRates = null;
    updateRateText();
    setStatus("Could not load rates. Check your connection and try again.", "error");
  }
}

function applyTheme() {
  els.root.dataset.theme = state.theme;
  els.themeIcon.textContent = state.theme === "dark" ? "☾" : "☀";
  els.themeToggle.setAttribute(
    "aria-label",
    state.theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
  );
}

function saveState() {
  if (state.isRestoring || !globalThis.chrome?.storage?.local) {
    return;
  }

  globalThis.chrome.storage.local.set({
    [STORAGE_KEY]: {
      fromCurrency: state.fromCurrency,
      toCurrency: state.toCurrency,
      lastAmount: state.lastAmount,
      activeInput: state.activeInput,
      theme: state.theme
    }
  });
}

async function restoreState() {
  if (globalThis.chrome?.storage?.local) {
    const result = await globalThis.chrome.storage.local.get(STORAGE_KEY);
    const saved = result[STORAGE_KEY] || {};
    state.fromCurrency = saved.fromCurrency || state.fromCurrency;
    state.toCurrency = saved.toCurrency || state.toCurrency;
    state.lastAmount = saved.lastAmount || state.lastAmount;
    state.activeInput = saved.activeInput || state.activeInput;
    state.theme = saved.theme || state.theme;
  }

  const activeAmount = state.lastAmount || "1";
  if (state.activeInput === "to") {
    els.toAmount.value = activeAmount;
  } else {
    els.fromAmount.value = activeAmount;
  }

  state.isRestoring = false;
}

function renderCurrencyList() {
  const query = normalizeSearchText(els.currencySearch.value);
  const currentCode = state.selectingSide === "from" ? state.fromCurrency : state.toCurrency;
  const filteredCurrencies = currencies.filter((currency) => {
    const haystack = normalizeSearchText(`${currency.code} ${currency.name} ${currency.aliases || ""}`);
    return haystack.includes(query);
  });

  els.currencyList.replaceChildren();

  if (!filteredCurrencies.length) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = "No currencies found.";
    els.currencyList.append(empty);
    return;
  }

  filteredCurrencies.forEach((currency) => {
    const row = document.createElement("button");
    row.type = "button";
    row.className = "currency-row pressable";
    row.setAttribute("role", "option");
    row.setAttribute("aria-selected", currency.code === currentCode ? "true" : "false");
    row.dataset.code = currency.code;
    row.classList.toggle("is-selected", currency.code === currentCode);
    row.innerHTML = `
      <span class="currency-row__flag" aria-hidden="true">${currency.flag}</span>
      <span class="currency-row__code">${currency.code}</span>
      <span class="currency-row__name">${currency.name}</span>
    `;
    els.currencyList.append(row);
  });
}

function openCurrencyModal(side) {
  state.selectingSide = side;
  els.modalHint.textContent = side === "from" ? "Choose the source currency" : "Choose the target currency";
  els.currencySearch.value = "";
  renderCurrencyList();
  els.modal.classList.add("is-open");
  els.modal.setAttribute("aria-hidden", "false");
  setTimeout(() => els.currencySearch.focus(), 80);
}

function closeCurrencyModal() {
  els.modal.classList.remove("is-open");
  els.modal.setAttribute("aria-hidden", "true");
}

function selectCurrency(code) {
  if (state.selectingSide === "from") {
    state.fromCurrency = code;
  } else {
    state.toCurrency = code;
  }

  closeCurrencyModal();
  updateCurrencyButtons();
  saveState();
  fetchRates();
}

function swapCurrencies() {
  const previousFrom = state.fromCurrency;
  state.fromCurrency = state.toCurrency;
  state.toCurrency = previousFrom;
  state.activeInput = "from";
  els.fromAmount.value = els.toAmount.value || els.fromAmount.value || state.lastAmount;
  state.lastAmount = els.fromAmount.value;

  els.swapButton.classList.remove("is-spinning");
  requestAnimationFrame(() => {
    els.swapButton.classList.add("is-spinning");
  });

  updateCurrencyButtons();
  saveState();
  fetchRates();
}

function openWebsite() {
  if (globalThis.chrome?.tabs?.create) {
    globalThis.chrome.tabs.create({ url: WEBSITE_URL });
    return;
  }

  window.open(WEBSITE_URL, "_blank", "noopener");
}

function bindEvents() {
  els.themeToggle.addEventListener("click", () => {
    state.theme = state.theme === "dark" ? "light" : "dark";
    applyTheme();
    saveState();
  });

  els.fromAmount.addEventListener("input", () => {
    state.activeInput = "from";
    state.lastAmount = els.fromAmount.value;
    convertFromActiveInput();
  });

  els.toAmount.addEventListener("input", () => {
    state.activeInput = "to";
    state.lastAmount = els.toAmount.value;
    convertFromActiveInput();
  });

  els.fromButton.addEventListener("click", () => openCurrencyModal("from"));
  els.toButton.addEventListener("click", () => openCurrencyModal("to"));
  els.swapButton.addEventListener("click", swapCurrencies);
  els.openWebsite.addEventListener("click", openWebsite);
  els.closeModal.addEventListener("click", closeCurrencyModal);
  els.modalBackdrop.addEventListener("click", closeCurrencyModal);
  els.currencySearch.addEventListener("input", renderCurrencyList);

  els.currencyList.addEventListener("click", (event) => {
    const row = event.target.closest(".currency-row");
    if (row?.dataset.code) {
      selectCurrency(row.dataset.code);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && els.modal.classList.contains("is-open")) {
      closeCurrencyModal();
    }
  });
}

async function init() {
  bindEvents();
  await restoreState();
  applyTheme();
  updateCurrencyButtons();
  updateRateText();
  fetchRates();
}

init();
