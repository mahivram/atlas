(function () {
  var root = document.documentElement;
  var themeButton = document.querySelector("[data-theme-toggle]");

  function getSavedTheme() {
    try {
      return localStorage.getItem("atlas-theme");
    } catch (error) {
      console.warn("Could not read the saved theme preference.", error);
      return null;
    }
  }

  function setTheme(theme, save) {
    root.dataset.theme = theme;
    themeButton.textContent = theme === "dark" ? "Light mode" : "Dark mode";
    themeButton.setAttribute("aria-label", "Switch to " + (theme === "dark" ? "light" : "dark") + " mode");
    if (save) {
      try {
        localStorage.setItem("atlas-theme", theme);
      } catch (error) {
        console.warn("Could not save the theme preference.", error);
      }
    }
  }

  var savedTheme = getSavedTheme();
  var systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  setTheme(savedTheme || (systemPrefersDark ? "dark" : "light"), false);
  if (themeButton) {
    themeButton.addEventListener("click", function () {
      setTheme(root.dataset.theme === "dark" ? "light" : "dark", true);
    });
  }

  document.querySelectorAll("[data-current-year]").forEach(function (element) {
    element.textContent = new Date().getFullYear();
  });
})();
