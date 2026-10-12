const THEME_STORAGE_KEY = "brnvConverterTheme";

function getPreferredTheme() {
  try {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (savedTheme === "dark" || savedTheme === "light") return savedTheme;
  } catch {
    // Keep the page usable when localStorage is unavailable.
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function updateThemeColor(theme) {
  const themeColor = document.querySelector('meta[name="theme-color"]');
  if (themeColor) themeColor.setAttribute("content", theme === "dark" ? "#121212" : "#e63946");
}

function applyStaticTheme(theme, shouldSave = false) {
  document.documentElement.dataset.theme = theme;
  updateThemeColor(theme);

  document.querySelectorAll("[data-static-theme-toggle]").forEach((button) => {
    const icon = button.querySelector(".theme-toggle__icon");
    if (icon) icon.textContent = theme === "dark" ? "☾" : "☀";
    button.setAttribute("aria-label", theme === "dark" ? "Switch to light theme" : "Switch to dark theme");
  });

  if (shouldSave) {
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // Theme still changes for the current page even without storage.
    }

    if (typeof window.gtag === "function") {
      window.gtag("event", "theme_changed", { theme });
    }
  }
}

function initStaticTheme() {
  applyStaticTheme(document.documentElement.dataset.theme || getPreferredTheme());

  document.querySelectorAll("[data-static-theme-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      applyStaticTheme(nextTheme, true);
    });
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initStaticTheme, { once: true });
} else {
  initStaticTheme();
}
