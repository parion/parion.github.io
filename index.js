const root = document.documentElement;
const floatingEl = document.querySelector('.floating-action');
const themeEl = document.querySelector('.theme-change');

// Injecting feather icons
feather.replace();

// Dark/light mode switcher
floatingEl.addEventListener("click", () => {
  let isDarkMode = false;
  themeEl.classList.forEach(def => {
    isDarkMode = def === 'dark-mode';
  })
  const accent = isDarkMode ? { foreground: 'dark', background: 'light'} : { foreground: 'light', background: 'dark'};
  themeEl.classList.toggle('dark-mode');
  root.style.setProperty('--background', getComputedStyle(root).getPropertyValue(`--${accent.background}-accent`));
  root.style.setProperty('--foreground', getComputedStyle(root).getPropertyValue(`--${accent.foreground}-accent`));
  });