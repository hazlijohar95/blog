export const themeEffect = function () {
  // `null` preference implies system (auto)
  const pref = localStorage.getItem("theme");
  const doc = document.documentElement;
  const head = document.head;

  // Batch DOM operations for better performance
  const updateTheme = (isDark: boolean) => {
    doc.classList.add("pause-transitions");
    
    if (isDark) {
      doc.classList.add("dark");
      doc.classList.remove("theme-system");
      const themeColor = head.querySelector("meta[name=theme-color]");
      if (themeColor) {
        themeColor.setAttribute("content", "#000000");
      }
    } else {
      doc.classList.remove("dark");
      doc.classList.remove("theme-system");
      const themeColor = head.querySelector("meta[name=theme-color]");
      if (themeColor) {
        themeColor.setAttribute("content", "#fcfcfc");
      }
    }

    // Use requestAnimationFrame for smooth transitions
    requestAnimationFrame(() => {
      doc.classList.remove("pause-transitions");
    });
  };

  if (null === pref) {
    doc.classList.add("theme-system");
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    updateTheme(isDark);
    return isDark ? "dark" : "light";
  } else {
    const isDark = pref === "dark";
    updateTheme(isDark);
    return isDark ? "dark" : "light";
  }
};
