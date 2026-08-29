const API_BASE = "https://open.er-api.com/v6/latest/";
const CRYPTO_API = "https://api.coingecko.com/api/v3/simple/price";
const STORAGE_KEYS = {
  from: "brnvConverterFromCurrency",
  to: "brnvConverterToCurrency",
  theme: "brnvConverterTheme",
  favorites: "brnvConverterFavoriteCurrencies",
  extraCurrencies: "brnvConverterExtraCurrencies"
};

const translations = {
  en: {
    documentTitle: "BRNV Currency Converter | Live Currency & Crypto Rates",
    metaDescription: "Convert EUR to USD, USD to UAH, HUF, BTC, ETH, USDT and more with BRNV Currency Converter. Fast live currency and crypto rates for travel, work and everyday use.",
    brandHome: "BRNV Currency Converter home",
    languageToggle: "Switch language",
    themeToDark: "Switch to dark theme",
    themeToLight: "Switch to light theme",
    heroTitle: "BRNV Currency Converter",
    heroSubtitle: "Fast currency and crypto conversion for travel, work and everyday rates",
    converterTitle: "Currency converter",
    fromLabel: "From",
    toLabel: "To",
    swapCurrencies: "Swap currencies",
    loadingRates: "Loading latest exchange rates...",
    liveRatesLoaded: "Live rates loaded.",
    rateLoadError: "Please try again in a moment.",
    disclaimer: "Rates are provided for informational purposes only.",
    advertisement: "Advertisement",
    popularEyebrow: "Quick routes",
    popularTitle: "Popular conversions",
    toWord: "to",
    cooperation: "For cooperation:",
    privacy: "Privacy Policy",
    about: "About",
    contact: "Contact",
    crypto: "Crypto",
    currenciesEyebrow: "Currencies",
    selectCurrency: "Select Currency",
    closeCurrencySelector: "Close currency selector",
    searchPlaceholder: "Search currency...",
    searchResults: "Search results",
    favoriteCurrencies: "Favorite currencies",
    popularCurrencies: "Popular currencies",
    allCurrencies: "All currencies",
    addFavoriteCurrency: "Add to favorites",
    removeFavoriteCurrency: "Remove from favorites",
    addCurrencyRow: "Add currency",
    removeCurrencyRow: "Remove currency",
    extraCurrencyLabel: "To",
    noCurrenciesFound: "No currencies found.",
    seoEyebrow: "Currency exchange made simple",
    seoTitle: "Live currency and crypto converter for travel and everyday rates",
    seoIntro: "BRNV Currency Converter helps you compare fiat and crypto pairs such as EUR to USD, USD to UAH, EUR to HUF, BTC to USD, ETH to EUR, USDT to UAH and 0.5 BTC to your local currency. Add extra currencies, save favorites and get instant informational conversions in one clean interface.",
    seoPointOne: "Two-way conversion: edit either main amount field and the other updates automatically.",
    seoPointTwo: "Popular fiat and crypto options include USD, EUR, UAH, HUF, GBP, PLN, BTC, ETH, USDT, USDC, BNB, SOL and more.",
    seoPointThree: "The site is static, lightweight, mobile-friendly and designed to work without accounts or a backend.",
    faqEyebrow: "Questions",
    faqTitle: "Currency converter FAQ",
    faqOneQuestion: "How often are exchange rates updated?",
    faqOneAnswer: "The site requests fresh public exchange-rate data when the page loads. During the same visit, some rates may be cached in your browser to keep the converter fast.",
    faqTwoQuestion: "Are these rates official bank rates?",
    faqTwoAnswer: "No. Rates are provided for informational purposes only and may differ from bank, broker or payment-provider rates.",
    faqThreeQuestion: "Which currencies are supported?",
    faqThreeAnswer: "The converter supports popular fiat currencies and crypto assets including USD, EUR, UAH, HUF, GBP, PLN, BTC, ETH, USDT, USDC, BNB, SOL and more.",
    faqFourQuestion: "Can I convert Bitcoin and crypto?",
    faqFourAnswer: "Yes. You can convert BTC, ETH, USDT, USDC, BNB, SOL, XRP and other popular crypto assets to USD, EUR, UAH and supported fiat currencies.",
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
      AED: "UAE Dirham",
      HUF: "Hungarian Forint",
      RON: "Romanian Leu",
      BGN: "Bulgarian Lev",
      ISK: "Icelandic Krona",
      RSD: "Serbian Dinar",
      GEL: "Georgian Lari",
      MDL: "Moldovan Leu",
      ALL: "Albanian Lek",
      BAM: "Bosnia-Herzegovina Convertible Mark",
      MKD: "Macedonian Denar",
      ILS: "Israeli New Shekel",
      SAR: "Saudi Riyal",
      QAR: "Qatari Riyal",
      KWD: "Kuwaiti Dinar",
      INR: "Indian Rupee",
      KRW: "South Korean Won",
      THB: "Thai Baht",
      IDR: "Indonesian Rupiah",
      MYR: "Malaysian Ringgit",
      PHP: "Philippine Peso",
      VND: "Vietnamese Dong",
      BRL: "Brazilian Real",
      MXN: "Mexican Peso",
      ZAR: "South African Rand",
      BYN: "Belarusian Ruble",
      KZT: "Kazakhstani Tenge",
      UZS: "Uzbekistani Som",
      AMD: "Armenian Dram",
      AZN: "Azerbaijani Manat",
      EGP: "Egyptian Pound",
      MAD: "Moroccan Dirham",
      TND: "Tunisian Dinar",
      ARS: "Argentine Peso",
      CLP: "Chilean Peso",
      COP: "Colombian Peso",
      PEN: "Peruvian Sol",
      NPR: "Nepalese Rupee",
      PKR: "Pakistani Rupee",
      BDT: "Bangladeshi Taka",
      LKR: "Sri Lankan Rupee",
      BTC: "Bitcoin",
      ETH: "Ethereum",
      USDT: "Tether",
      USDC: "USD Coin",
      BNB: "BNB",
      SOL: "Solana",
      XRP: "XRP",
      DOGE: "Dogecoin",
      ADA: "Cardano",
      TRX: "TRON",
      TON: "Toncoin",
      AVAX: "Avalanche",
      SHIB: "Shiba Inu",
      DOT: "Polkadot",
      LINK: "Chainlink",
      BCH: "Bitcoin Cash",
      LTC: "Litecoin",
      XLM: "Stellar",
      SUI: "Sui"
    }
  },
  uk: {
    documentTitle: "BRNV Конвертер валют | Валюти, криптовалюти та live-курси",
    metaDescription: "Конвертуйте EUR у USD, USD у UAH, HUF, BTC, ETH, USDT та інші валюти з BRNV Конвертером валют. Швидкі live-курси для подорожей, роботи й щоденного використання.",
    brandHome: "Головна BRNV Конвертера валют",
    languageToggle: "Перемкнути мову",
    themeToDark: "Увімкнути темну тему",
    themeToLight: "Увімкнути світлу тему",
    heroTitle: "BRNV Конвертер валют",
    heroSubtitle: "Швидка конвертація валют і криптовалют для подорожей, роботи й щоденних курсів",
    converterTitle: "Конвертер валют",
    fromLabel: "З",
    toLabel: "В",
    swapCurrencies: "Поміняти валюти місцями",
    loadingRates: "Завантажуємо актуальні курси...",
    liveRatesLoaded: "Актуальні курси завантажено.",
    rateLoadError: "Спробуйте ще раз за мить.",
    disclaimer: "Курси надаються лише з інформаційною метою.",
    advertisement: "Реклама",
    popularEyebrow: "Швидкі напрямки",
    popularTitle: "Популярні конвертації",
    toWord: "у",
    cooperation: "Для співпраці:",
    privacy: "Політика конфіденційності",
    about: "Про нас",
    contact: "Контакти",
    crypto: "Криптовалюта",
    currenciesEyebrow: "Валюти",
    selectCurrency: "Оберіть валюту",
    closeCurrencySelector: "Закрити вибір валюти",
    searchPlaceholder: "Пошук валюти...",
    searchResults: "Результати пошуку",
    favoriteCurrencies: "Улюблені валюти",
    popularCurrencies: "Популярні валюти",
    allCurrencies: "Усі валюти",
    addFavoriteCurrency: "Додати в улюблені",
    removeFavoriteCurrency: "Прибрати з улюблених",
    addCurrencyRow: "Додати валюту",
    removeCurrencyRow: "Прибрати валюту",
    extraCurrencyLabel: "В",
    noCurrenciesFound: "Валют не знайдено.",
    seoEyebrow: "Обмін валют простими словами",
    seoTitle: "Live-конвертер валют і криптовалют для подорожей та щоденних курсів",
    seoIntro: "BRNV Конвертер валют допомагає швидко порівнювати фіатні та криптопари: EUR у USD, USD у UAH, EUR у HUF, BTC у USD, ETH у EUR, USDT у UAH або 0.5 BTC у локальній валюті. Додавайте додаткові валюти, зберігайте улюблені й отримуйте миттєві інформаційні конвертації в одному чистому інтерфейсі.",
    seoPointOne: "Двостороння конвертація: змінюйте будь-яке основне поле, і друге оновиться автоматично.",
    seoPointTwo: "Популярні фіатні та криптоопції включають USD, EUR, UAH, HUF, GBP, PLN, BTC, ETH, USDT, USDC, BNB, SOL та інші.",
    seoPointThree: "Сайт статичний, легкий, зручний на мобільних пристроях і працює без акаунта чи бекенду.",
    faqEyebrow: "Питання",
    faqTitle: "FAQ конвертера валют",
    faqOneQuestion: "Як часто оновлюються курси валют?",
    faqOneAnswer: "Сайт запитує свіжі публічні курси під час завантаження сторінки. У межах одного візиту частина курсів може кешуватися в браузері, щоб конвертер працював швидше.",
    faqTwoQuestion: "Це офіційні банківські курси?",
    faqTwoAnswer: "Ні. Курси надаються лише з інформаційною метою й можуть відрізнятися від курсів банків, брокерів або платіжних сервісів.",
    faqThreeQuestion: "Які валюти підтримуються?",
    faqThreeAnswer: "Конвертер підтримує популярні фіатні валюти та криптоактиви, зокрема USD, EUR, UAH, HUF, GBP, PLN, BTC, ETH, USDT, USDC, BNB, SOL та інші.",
    faqFourQuestion: "Чи можна конвертувати Bitcoin і криптовалюту?",
    faqFourAnswer: "Так. Ви можете конвертувати BTC, ETH, USDT, USDC, BNB, SOL, XRP та інші популярні криптоактиви в USD, EUR, UAH і підтримувані фіатні валюти.",
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
      AED: "Дирхам ОАЕ",
      HUF: "Угорський форинт",
      RON: "Румунський лей",
      BGN: "Болгарський лев",
      ISK: "Ісландська крона",
      RSD: "Сербський динар",
      GEL: "Грузинський ларі",
      MDL: "Молдовський лей",
      ALL: "Албанський лек",
      BAM: "Боснійська конвертована марка",
      MKD: "Македонський денар",
      ILS: "Ізраїльський шекель",
      SAR: "Саудівський ріал",
      QAR: "Катарський ріал",
      KWD: "Кувейтський динар",
      INR: "Індійська рупія",
      KRW: "Південнокорейська вона",
      THB: "Тайський бат",
      IDR: "Індонезійська рупія",
      MYR: "Малайзійський ринггіт",
      PHP: "Філіппінське песо",
      VND: "Вʼєтнамський донг",
      BRL: "Бразильський реал",
      MXN: "Мексиканське песо",
      ZAR: "Південноафриканський ранд",
      BYN: "Білоруський рубль",
      KZT: "Казахстанський тенге",
      UZS: "Узбецький сум",
      AMD: "Вірменський драм",
      AZN: "Азербайджанський манат",
      EGP: "Єгипетський фунт",
      MAD: "Марокканський дирхам",
      TND: "Туніський динар",
      ARS: "Аргентинське песо",
      CLP: "Чилійське песо",
      COP: "Колумбійське песо",
      PEN: "Перуанський соль",
      NPR: "Непальська рупія",
      PKR: "Пакистанська рупія",
      BDT: "Бангладеська така",
      LKR: "Шрі-ланкійська рупія",
      BTC: "Біткоїн",
      ETH: "Ефіріум",
      USDT: "Tether",
      USDC: "USD Coin",
      BNB: "BNB",
      SOL: "Solana",
      XRP: "XRP",
      DOGE: "Dogecoin",
      ADA: "Cardano",
      TRX: "TRON",
      TON: "Toncoin",
      AVAX: "Avalanche",
      SHIB: "Shiba Inu",
      DOT: "Polkadot",
      LINK: "Chainlink",
      BCH: "Bitcoin Cash",
      LTC: "Litecoin",
      XLM: "Stellar",
      SUI: "Sui"
    }
  }
};

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

const currencies = [
  { code: "USD", name: "US Dollar", flag: "🇺🇸", aliases: "долар доллар долар сша доллар сша американський долар американский доллар united states dollar us dollar" },
  { code: "EUR", name: "Euro", flag: "🇪🇺", aliases: "євро евро european euro європейська валюта европейская валюта" },
  { code: "GBP", name: "British Pound", flag: "🇬🇧", aliases: "фунт британський фунт британский фунт фунт стерлінгів фунт стерлингов pound sterling" },
  { code: "UAH", name: "Ukrainian Hryvnia", flag: "🇺🇦", aliases: "гривня гривна українська гривня украинская гривна hryvnia ukraine" },
  { code: "PLN", name: "Polish Zloty", flag: "🇵🇱", aliases: "злотий злотый польський злотий польский злотый zloty poland" },
  { code: "HUF", name: "Hungarian Forint", flag: "🇭🇺", aliases: "форинт форінт флоринт флорент угорський форинт венгерский форинт forint florin hungary budapest будапешт" },
  { code: "RON", name: "Romanian Leu", flag: "🇷🇴", aliases: "лей леї румунський лей румынский лей leu romania" },
  { code: "BGN", name: "Bulgarian Lev", flag: "🇧🇬", aliases: "лев болгарський лев болгарский лев lev bulgaria" },
  { code: "CZK", name: "Czech Koruna", flag: "🇨🇿", aliases: "крона чеська крона чешская крона koruna czech" },
  { code: "SEK", name: "Swedish Krona", flag: "🇸🇪", aliases: "крона шведська крона шведская крона krona sweden" },
  { code: "NOK", name: "Norwegian Krone", flag: "🇳🇴", aliases: "крона норвезька крона норвежская крона krone norway" },
  { code: "DKK", name: "Danish Krone", flag: "🇩🇰", aliases: "крона данська крона датская крона krone denmark" },
  { code: "CHF", name: "Swiss Franc", flag: "🇨🇭", aliases: "франк швейцарський франк швейцарский франк swiss franc switzerland" },
  { code: "ISK", name: "Icelandic Krona", flag: "🇮🇸", aliases: "ісландська крона исландская крона krona iceland" },
  { code: "RSD", name: "Serbian Dinar", flag: "🇷🇸", aliases: "динар сербський динар сербский динар dinar serbia" },
  { code: "GEL", name: "Georgian Lari", flag: "🇬🇪", aliases: "ларі лари грузинський ларі грузинский лари lari georgia" },
  { code: "MDL", name: "Moldovan Leu", flag: "🇲🇩", aliases: "молдовський лей молдавский лей лей молдова leu moldova" },
  { code: "ALL", name: "Albanian Lek", flag: "🇦🇱", aliases: "лек албанський лек албанский лек lek albania" },
  { code: "BAM", name: "Bosnia-Herzegovina Convertible Mark", flag: "🇧🇦", aliases: "конвертована марка боснійська марка боснийская марка mark bosnia" },
  { code: "MKD", name: "Macedonian Denar", flag: "🇲🇰", aliases: "денар македонський денар македонский денар denar macedonia" },
  { code: "TRY", name: "Turkish Lira", flag: "🇹🇷", aliases: "ліра лира турецька ліра турецкая лира lira turkey" },
  { code: "CAD", name: "Canadian Dollar", flag: "🇨🇦", aliases: "канадський долар канадский доллар долар канада доллар канада canadian dollar" },
  { code: "AUD", name: "Australian Dollar", flag: "🇦🇺", aliases: "австралійський долар австралийский доллар долар австралія доллар австралия australian dollar" },
  { code: "NZD", name: "New Zealand Dollar", flag: "🇳🇿", aliases: "новозеландський долар новозеландский доллар долар нова зеландія dollar new zealand" },
  { code: "JPY", name: "Japanese Yen", flag: "🇯🇵", aliases: "єна иена японська єна японская иена yen japan" },
  { code: "CNY", name: "Chinese Yuan", flag: "🇨🇳", aliases: "юань китайський юань китайский юань yuan china" },
  { code: "HKD", name: "Hong Kong Dollar", flag: "🇭🇰", aliases: "гонконгський долар гонконгский доллар долар гонконг hong kong dollar" },
  { code: "SGD", name: "Singapore Dollar", flag: "🇸🇬", aliases: "сингапурський долар сингапурский доллар долар сингапур singapore dollar" },
  { code: "AED", name: "UAE Dirham", flag: "🇦🇪", aliases: "дирхам дірхам дирхам оае дирхам оаэ дирхам емірати дирхам эмираты dirham uae emirates" },
  { code: "BYN", name: "Belarusian Ruble", flag: "🇧🇾", aliases: "білоруський рубль белорусский рубль рубль беларусь belarusian ruble belarus" },
  { code: "KZT", name: "Kazakhstani Tenge", flag: "🇰🇿", aliases: "тенге казахстанський тенге казахстанский тенге tenge kazakhstan" },
  { code: "UZS", name: "Uzbekistani Som", flag: "🇺🇿", aliases: "сум узбецький сум узбекский сум som uzbekistan" },
  { code: "AMD", name: "Armenian Dram", flag: "🇦🇲", aliases: "драм вірменський драм армянский драм dram armenia" },
  { code: "AZN", name: "Azerbaijani Manat", flag: "🇦🇿", aliases: "манат азербайджанський манат азербайджанский манат manat azerbaijan" },
  { code: "EGP", name: "Egyptian Pound", flag: "🇪🇬", aliases: "єгипетський фунт египетский фунт фунт єгипет фунт египет egyptian pound egypt" },
  { code: "MAD", name: "Moroccan Dirham", flag: "🇲🇦", aliases: "марокканський дирхам марокканский дирхам дирхам марокко moroccan dirham morocco" },
  { code: "TND", name: "Tunisian Dinar", flag: "🇹🇳", aliases: "туніський динар тунисский динар динар туніс динар тунис tunisian dinar tunisia" },
  { code: "ARS", name: "Argentine Peso", flag: "🇦🇷", aliases: "аргентинське песо аргентинское песо песо аргентина argentine peso argentina" },
  { code: "CLP", name: "Chilean Peso", flag: "🇨🇱", aliases: "чилійське песо чилийское песо песо чилі песо чили chilean peso chile" },
  { code: "COP", name: "Colombian Peso", flag: "🇨🇴", aliases: "колумбійське песо колумбийское песо песо колумбія песо колумбия colombian peso colombia" },
  { code: "PEN", name: "Peruvian Sol", flag: "🇵🇪", aliases: "перуанський соль перуанский соль соль перу sol peru" },
  { code: "NPR", name: "Nepalese Rupee", flag: "🇳🇵", aliases: "непальська рупія непальская рупия рупія непал рупия непал nepalese rupee nepal" },
  { code: "PKR", name: "Pakistani Rupee", flag: "🇵🇰", aliases: "пакистанська рупія пакистанская рупия рупія пакистан рупия пакистан pakistani rupee pakistan" },
  { code: "BDT", name: "Bangladeshi Taka", flag: "🇧🇩", aliases: "така бангладеш бангладеська така бангладешская така taka bangladesh" },
  { code: "LKR", name: "Sri Lankan Rupee", flag: "🇱🇰", aliases: "шрі ланкійська рупія шри ланкийская рупия рупія шрі ланка rupee sri lanka" },
  { code: "ILS", name: "Israeli New Shekel", flag: "🇮🇱", aliases: "шекель ізраїльський шекель израильский шекель shekel israel" },
  { code: "SAR", name: "Saudi Riyal", flag: "🇸🇦", aliases: "ріал риял саудівський ріал саудовский риял riyal saudi" },
  { code: "QAR", name: "Qatari Riyal", flag: "🇶🇦", aliases: "катарський ріал катарский риял riyal qatar" },
  { code: "KWD", name: "Kuwaiti Dinar", flag: "🇰🇼", aliases: "кувейтський динар кувейтский динар dinar kuwait" },
  { code: "INR", name: "Indian Rupee", flag: "🇮🇳", aliases: "рупія рупия індійська рупія индийская рупия rupee india" },
  { code: "KRW", name: "South Korean Won", flag: "🇰🇷", aliases: "вона вон корейська вона корейская вона won korea" },
  { code: "THB", name: "Thai Baht", flag: "🇹🇭", aliases: "бат тайський бат тайский бат baht thailand" },
  { code: "IDR", name: "Indonesian Rupiah", flag: "🇮🇩", aliases: "рупія рупия індонезійська рупія индонезийская рупия rupiah indonesia" },
  { code: "MYR", name: "Malaysian Ringgit", flag: "🇲🇾", aliases: "ринггіт ринггит малайзійський ринггіт малайзийский ринггит ringgit malaysia" },
  { code: "PHP", name: "Philippine Peso", flag: "🇵🇭", aliases: "песо філіппінське песо филиппинское песо peso philippines" },
  { code: "VND", name: "Vietnamese Dong", flag: "🇻🇳", aliases: "донг вʼєтнамський донг вьетнамский донг dong vietnam" },
  { code: "BRL", name: "Brazilian Real", flag: "🇧🇷", aliases: "реал бразильський реал бразильский реал real brazil" },
  { code: "MXN", name: "Mexican Peso", flag: "🇲🇽", aliases: "песо мексиканське песо мексиканское песо peso mexico" },
  { code: "ZAR", name: "South African Rand", flag: "🇿🇦", aliases: "ранд південноафриканський ранд южноафриканский ранд rand south africa" },
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

const popularCurrencyCodes = [
  "USD", "EUR", "GBP", "UAH", "PLN", "HUF", "CAD", "AUD", "CHF", "JPY", "CNY", "HKD", "SGD", "NZD", "SEK", "NOK", "DKK", "CZK", "TRY", "AED", "BTC", "ETH", "USDT", "USDC"
];

const popularConversions = [
  ["EUR", "USD"],
  ["USD", "EUR"],
  ["EUR", "UAH"],
  ["USD", "UAH"],
  ["EUR", "HUF"],
  ["USD", "HUF"],
  ["GBP", "EUR"],
  ["PLN", "UAH"],
  ["BTC", "USD"],
  ["ETH", "USD"],
  ["USDT", "UAH"]
];

const state = {
  fromCurrency: localStorage.getItem(STORAGE_KEYS.from) || "EUR",
  toCurrency: localStorage.getItem(STORAGE_KEYS.to) || "USD",
  favoriteCurrencies: loadFavoriteCurrencies(),
  extraCurrencies: loadExtraCurrencies(),
  language: "en",
  activeInput: "from",
  selectingSide: "from",
  ratesCache: new Map(),
  cryptoUsdCache: null,
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
  extraCurrencyList: document.getElementById("extraCurrencyList"),
  addCurrencyButton: document.getElementById("addCurrencyButton"),
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
  const currency = getCurrency(code);
  return translations[state.language].currencyNames[code] || translations.en.currencyNames[code] || currency.name || code;
}

function loadFavoriteCurrencies() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEYS.favorites) || "[]");
    if (!Array.isArray(saved)) return [];
    return saved.filter((code, index) => currencies.some((currency) => currency.code === code) && saved.indexOf(code) === index);
  } catch (error) {
    return [];
  }
}

function saveFavoriteCurrencies() {
  localStorage.setItem(STORAGE_KEYS.favorites, JSON.stringify(state.favoriteCurrencies));
}

function loadExtraCurrencies() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEYS.extraCurrencies) || "[]");
    if (!Array.isArray(saved)) return [];
    return saved.filter((code, index) => currencies.some((currency) => currency.code === code) && saved.indexOf(code) === index).slice(0, 2);
  } catch (error) {
    return [];
  }
}

function saveExtraCurrencies() {
  localStorage.setItem(STORAGE_KEYS.extraCurrencies, JSON.stringify(state.extraCurrencies));
}

function getAvailableExtraCurrency() {
  const usedCodes = new Set([state.fromCurrency, state.toCurrency, ...state.extraCurrencies]);
  const preferredCodes = ["UAH", "HUF", "PLN", "GBP", "CHF", "BTC", "USDT", "CAD", "AUD"];
  const preferred = preferredCodes.find((code) => !usedCodes.has(code) && currencies.some((currency) => currency.code === code));
  return preferred || currencies.find((currency) => !usedCodes.has(currency.code))?.code || "USD";
}

function getConversionBase() {
  const code = state.activeInput === "to" ? state.toCurrency : state.fromCurrency;
  const input = state.activeInput === "to" ? els.toAmount : els.fromAmount;
  return { code, amount: parseInputValue(input) };
}

function isFavoriteCurrency(code) {
  return state.favoriteCurrencies.includes(code);
}

function toggleFavoriteCurrency(code) {
  state.favoriteCurrencies = isFavoriteCurrency(code)
    ? state.favoriteCurrencies.filter((favoriteCode) => favoriteCode !== code)
    : [...state.favoriteCurrencies, code];
  saveFavoriteCurrencies();
  renderCurrencyList();
}

function getFavoriteButtonLabel(code) {
  return `${isFavoriteCurrency(code) ? t("removeFavoriteCurrency") : t("addFavoriteCurrency")} ${code}`;
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
  renderExtraCurrencies();
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

function getPrecision(value) {
  const absolute = Math.abs(value);
  if (absolute >= 100) return 2;
  if (absolute >= 1) return 4;
  if (absolute >= 0.0001) return 8;
  return 10;
}

function formatAmount(value) {
  if (!Number.isFinite(value)) return "";
  return new Intl.NumberFormat("en-US", {
    useGrouping: false,
    maximumFractionDigits: getPrecision(value)
  }).format(value);
}

function formatRate(value) {
  if (!Number.isFinite(value)) return "...";
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: getPrecision(value)
  }).format(value);
}

function formatPopularRate(value) {
  if (!Number.isFinite(value)) return "N/A";
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: value >= 10 ? 2 : getPrecision(value),
    minimumFractionDigits: value >= 10 ? 0 : 2
  }).format(value);
}

function getSearchText(currency) {
  const names = Object.values(translations)
    .map((translation) => translation.currencyNames[currency.code])
    .filter(Boolean);

  return [currency.code, currency.name, currency.aliases || "", ...names].join(" ").toLowerCase();
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

function isCrypto(code) {
  return Boolean(cryptoIds[code]);
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

async function fetchCryptoUsdRates() {
  if (state.cryptoUsdCache) {
    return state.cryptoUsdCache;
  }

  const ids = Object.values(cryptoIds).join(",");
  const response = await fetch(`${CRYPTO_API}?ids=${ids}&vs_currencies=usd`);
  if (!response.ok) {
    throw new Error("Could not load crypto rates.");
  }

  const data = await response.json();
  const rates = {};
  Object.entries(cryptoIds).forEach(([code, id]) => {
    const usdRate = data[id]?.usd;
    if (Number.isFinite(usdRate)) {
      rates[code] = usdRate;
    }
  });

  state.cryptoUsdCache = rates;
  return rates;
}

async function getUsdValue(code) {
  if (code === "USD") return 1;

  if (isCrypto(code)) {
    const cryptoRates = await fetchCryptoUsdRates();
    const cryptoUsd = cryptoRates[code];
    if (!Number.isFinite(cryptoUsd)) {
      throw new Error(`Rate for ${code} to USD is not available.`);
    }
    return cryptoUsd;
  }

  const usdRates = await fetchRates("USD");
  const fiatRate = usdRates[code];
  if (!Number.isFinite(fiatRate)) {
    throw new Error(`Rate for USD to ${code} is not available.`);
  }
  return 1 / fiatRate;
}

async function getRate(from, to) {
  if (from === to) return 1;

  const [fromUsd, toUsd] = await Promise.all([
    getUsdValue(from),
    getUsdValue(to)
  ]);

  const rate = fromUsd / toUsd;
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

function renderExtraCurrencies() {
  els.extraCurrencyList.innerHTML = "";
  state.extraCurrencies.forEach((code, index) => {
    const currency = getCurrency(code);
    const row = document.createElement("div");
    row.className = "extra-currency-item";
    row.innerHTML = `
      <div class="extra-flow-icon" aria-hidden="true">
        <svg class="swap-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" focusable="false" fill="none" stroke="currentColor" stroke-width="1.85" stroke-linecap="round" stroke-linejoin="round">
          <path d="M8.5 4.75v13"></path>
          <path d="M5.25 14.5 8.5 17.75l3.25-3.25"></path>
          <path d="M15.5 19.25v-13"></path>
          <path d="M12.25 9.5 15.5 6.25l3.25 3.25"></path>
        </svg>
      </div>
      <div class="currency-row extra-currency-row">
        <label class="row-label" for="extraAmount${index}">${t("extraCurrencyLabel")}</label>
        <span class="input-shell extra-input-shell">
          <input id="extraAmount${index}" type="text" inputmode="decimal" readonly value="" aria-label="${getCurrencyName(code)} amount">
          <button class="currency-button pressable" type="button" data-extra-select="${index}" aria-haspopup="dialog">
            <span class="currency-flag">${currency.flag}</span>
            <span class="currency-code">${currency.code}</span>
            <span class="currency-caret" aria-hidden="true"></span>
          </button>
          <button class="remove-currency-button pressable" type="button" data-extra-remove="${index}" aria-label="${t("removeCurrencyRow")} ${currency.code}">×</button>
        </span>
      </div>
    `;
    row.querySelector("[data-extra-select]").addEventListener("click", () => openCurrencyModal(`extra:${index}`));
    row.querySelector("[data-extra-remove]").addEventListener("click", () => removeExtraCurrency(index));
    els.extraCurrencyList.appendChild(row);
  });
  els.addCurrencyButton.hidden = state.extraCurrencies.length >= 2;
}

async function updateExtraConversions(baseCode, baseAmount) {
  const rows = [...els.extraCurrencyList.querySelectorAll(".extra-currency-row")];
  await Promise.all(state.extraCurrencies.map(async (code, index) => {
    const input = rows[index]?.querySelector("input");
    if (!input) return;
    const rate = await getRate(baseCode, code);
    input.value = baseAmount && Number.isFinite(rate) ? formatAmount(baseAmount * rate) : "";
    animateValue(input);
  }));
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

    const base = getConversionBase();
    await updateExtraConversions(base.code, base.amount);

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
  const favorites = state.favoriteCurrencies.map(getCurrency).filter((currency) => currency.code);
  const popular = popularCurrencyCodes
    .filter((code) => !isFavoriteCurrency(code))
    .map(getCurrency)
    .filter((currency) => currency.code);
  const allCurrencies = currencies.filter((currency) => !isFavoriteCurrency(currency.code));

  const sections = query
    ? [{ title: t("searchResults"), items: filtered }]
    : [
        ...(favorites.length ? [{ title: t("favoriteCurrencies"), items: favorites }] : []),
        { title: t("popularCurrencies"), items: popular },
        { title: t("allCurrencies"), items: allCurrencies }
      ];

  els.currencyList.innerHTML = "";

  sections.forEach((section) => {
    const heading = document.createElement("p");
    heading.className = "list-heading";
    heading.textContent = section.title;
    els.currencyList.appendChild(heading);

    if (!section.items.length) {
      const empty = document.createElement("p");
      empty.className = "currency-option__name currency-option__empty";
      empty.textContent = t("noCurrenciesFound");
      els.currencyList.appendChild(empty);
      return;
    }

    section.items.forEach((currency) => {
      const option = document.createElement("div");
      const isFavorite = isFavoriteCurrency(currency.code);
      option.className = "currency-option pressable";
      option.setAttribute("role", "button");
      option.tabIndex = 0;
      option.innerHTML = `
        <span class="currency-option__flag">${currency.flag}</span>
        <span class="currency-option__meta">
          <span class="currency-option__code">${currency.code}</span>
          <span class="currency-option__name">${getCurrencyName(currency.code)}</span>
        </span>
        <button class="favorite-toggle ${isFavorite ? "is-favorite" : ""}" type="button" aria-label="${getFavoriteButtonLabel(currency.code)}" aria-pressed="${isFavorite}">
          <span aria-hidden="true">${isFavorite ? "★" : "☆"}</span>
        </button>
      `;
      const favoriteToggle = option.querySelector(".favorite-toggle");
      const stopFavoriteSelection = (event) => event.stopPropagation();
      favoriteToggle.addEventListener("pointerdown", stopFavoriteSelection);
      favoriteToggle.addEventListener("mousedown", stopFavoriteSelection);
      favoriteToggle.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        toggleFavoriteCurrency(currency.code);
      });
      favoriteToggle.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          event.stopPropagation();
          toggleFavoriteCurrency(currency.code);
        }
      });
      option.addEventListener("click", () => selectCurrency(currency.code));
      option.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          selectCurrency(currency.code);
        }
      });
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
  } else if (state.selectingSide === "to") {
    state.toCurrency = code;
    localStorage.setItem(STORAGE_KEYS.to, code);
    state.activeInput = "to";
  } else if (state.selectingSide.startsWith("extra:")) {
    const index = Number.parseInt(state.selectingSide.split(":")[1], 10);
    if (Number.isInteger(index) && state.extraCurrencies[index]) {
      state.extraCurrencies[index] = code;
      state.extraCurrencies = state.extraCurrencies.filter((currencyCode, currencyIndex, list) => list.indexOf(currencyCode) === currencyIndex).slice(0, 2);
      saveExtraCurrencies();
      renderExtraCurrencies();
    }
  }

  closeCurrencyModal();
  updateConversion(state.activeInput, true);
}

function addExtraCurrency() {
  if (state.extraCurrencies.length >= 2) return;
  state.extraCurrencies.push(getAvailableExtraCurrency());
  saveExtraCurrencies();
  renderExtraCurrencies();
  updateConversion(state.activeInput, true);
}

function removeExtraCurrency(index) {
  state.extraCurrencies.splice(index, 1);
  saveExtraCurrencies();
  renderExtraCurrencies();
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
  els.addCurrencyButton.addEventListener("click", addExtraCurrency);
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
  const adSection = document.querySelector(".sponsor-section");
  const clientId = adSlot?.dataset.adClient || "";
  const slotId = adSlot?.dataset.adSlot || "";
  if (!adSlot || clientId.includes("XXXXXXXXXXXXXXXX") || slotId.includes("XXXXXXXXXX")) {
    return;
  }

  if (adSlot.dataset.brnvAdInitialized === "true") {
    return;
  }

  if (!window.BRNVConsent?.canUseAds()) {
    adSection?.classList.remove("is-visible");
    window.addEventListener("brnv:consent-changed", initAds, { once: true });
    return;
  }

  const revealIfFilled = () => {
    const isFilled = adSlot.dataset.adsbygoogleStatus === "done"
      && adSlot.dataset.adStatus === "filled"
      && Boolean(adSlot.querySelector("iframe"));

    adSection?.classList.toggle("is-visible", isFilled);
    return isFilled;
  };

  try {
    adSlot.dataset.brnvAdInitialized = "true";

    const observer = new MutationObserver(() => {
      if (revealIfFilled()) {
        observer.disconnect();
      }
    });

    observer.observe(adSlot, {
      attributes: true,
      childList: true,
      subtree: true
    });

    const requestAd = () => {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch {
        adSection?.classList.remove("is-visible");
      }
    };

    if (window.adsbygoogle) {
      requestAd();
    } else {
      window.BRNVConsent?.loadAdSense();
      window.addEventListener("brnv:adsense-ready", requestAd, { once: true });
    }

    [1200, 3000, 6000, 10000].forEach((delay) => {
      window.setTimeout(() => {
        if (revealIfFilled()) {
          observer.disconnect();
        }
      }, delay);
    });
  } catch {
    adSection?.classList.remove("is-visible");
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
