// theme.js
const themes = {
  "1": {
    "--primary": "#2d2d2d",
    "--accent": "#8b7355",
    "--light": "#fafaf8",
    "--dark": "#1a1a1a",
    "--beige": "#e8e3db",
    "--taupe": "#a89885",
    "--shadow": "rgba(0,0,0,0.05)"
  },
  "2": {
    "--primary": "#2f3a32",
    "--accent": "#7a8f6a",
    "--light": "#f6f7f4",
    "--dark": "#1c221e",
    "--beige": "#e6ebe3",
    "--taupe": "#8b978c",
    "--shadow": "rgba(0,0,0,0.06)"
  },
  "3": {
    "--primary": "#3a2f2f",
    "--accent": "#c48f8f",
    "--light": "#fbf7f7",
    "--dark": "#211919",
    "--beige": "#f1e4e4",
    "--taupe": "#b39a9a",
    "--shadow": "rgba(0,0,0,0.05)"
  },
  "4": {
    "--primary": "#2e3440",
    "--accent": "#7c8fa6",
    "--light": "#f5f7fa",
    "--dark": "#1a1f27",
    "--beige": "#e5eaf0",
    "--taupe": "#9aa6b2",
    "--shadow": "rgba(0,0,0,0.05)"
  },
  "5": {
    "--primary": "#3a2a2a",
    "--accent": "#9b5c5c",
    "--light": "#faf6f6",
    "--dark": "#201515",
    "--beige": "#efe3e3",
    "--taupe": "#b49898",
    "--shadow": "rgba(0,0,0,0.05)"
  },
  "6": {
    "--primary": "#3a332c",
    "--accent": "#c07a5a",
    "--light": "#fbf8f5",
    "--dark": "#1f1a16",
    "--beige": "#efe6df",
    "--taupe": "#b7a296",
    "--shadow": "rgba(0,0,0,0.05)"
  }
};

function getParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

function applyThemeFromURL() {
  const option = getParam("opcion");
  if (themes[option]) {
    const theme = themes[option];
    for (let key in theme) {
      document.documentElement.style.setProperty(key, theme[key]);
    }
  }
}

// Ejecuta después de cargar el DOM
window.addEventListener("DOMContentLoaded", applyThemeFromURL);