
const toggleTheme = () => {
  const root = document.documentElement;
  const current =
    root.getAttribute("data-theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  const next = current === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  try {
    localStorage.setItem("theme", next);
  } catch {
    /* storage unavailable: the choice just won't be remembered */
  }
};

const Header = () => (
  <header className="top">
    <div className="wrap">
      <a className="brand" href="#top">
        IsaacDev<i>.</i>
      </a>
      <nav className="nav" aria-label="Sections">
        <a href="#work">Work</a>
        <a href="#rates">Rates</a>
        <a href="#about">About</a>
        <a href="#toolbox">Toolbox</a>
      </nav>
      <button className="icon-btn" type="button" onClick={toggleTheme} aria-label="Switch between light and dark theme">
        ◐
      </button>
      <a className="btn primary small" href="#contact">
        Hire me
      </a>
    </div>
  </header>
);

export default Header;
