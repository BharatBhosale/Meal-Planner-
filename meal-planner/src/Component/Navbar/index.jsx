import "./style.css";
import { useEffect, useState } from "react";

function Navbar({
  isLoggedIn,
  setShowAuth,
  setIsLoggedIn,
  setNavSelection,
  navSelection,
}) {
  const navItems = [
    { key: "Home", label: "Home" },
    { key: "AboutUs", label: "About Us" },
    { key: "ContactUs", label: "Contact Us" },
    { key: "PlanMeal", label: "Plan Meal" },
  ];

  const handleLoginClick = () => {
    setShowAuth(true);
    setNavSelection("LogIn");
  };
  const handleLogoutClick = () => setIsLoggedIn(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const handleNavClick = (key) => {
    setNavSelection(key);
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="nav-left">
        <button
          className="menu-toggle"
          aria-expanded={isMenuOpen}
          aria-label="Toggle menu"
          onClick={() => setIsMenuOpen((s) => !s)}
        >
          ☰
        </button>
        <div className="logo">🍽️</div>
        <h2 className="name">Meal Planner</h2>
      </div>

      <ul className="nav-links">
        {navItems.map((item) => (
          <li key={item.key}>
            <button
              data-selection={item.key}
              onClick={() => handleNavClick(item.key)}
              className={navSelection === item.key ? "active" : ""}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>

      <div className="navbar-right">
        {!isLoggedIn ? (
          <button className="button login-btn" onClick={handleLoginClick}>
            Log In
          </button>
        ) : (
          <button className="button login-btn" onClick={handleLogoutClick}>
            Log Out
          </button>
        )}
      </div>
      
      <div
        className={`menu-overlay ${isMenuOpen ? "open" : ""}`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden={!isMenuOpen}
      />

      <nav
        className={`side-menu ${isMenuOpen ? "open" : ""}`}
        aria-hidden={!isMenuOpen}
      >
        <div className="side-header">
          <button
            className="close-btn"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
          <div className="logo">🍽️</div>
        </div>
        <ul className="side-links">
          {navItems.map((item) => (
            <li key={item.key}>
              <button
                onClick={() => handleNavClick(item.key)}
                className={navSelection === item.key ? "active" : ""}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
        <div className="side-footer">
          {!isLoggedIn ? (
            <button
              className="button login-btn"
              onClick={() => {
                setShowAuth(true);
                setIsMenuOpen(false);
                setNavSelection("LogIn");
              }}
            >
              Log In
            </button>
          ) : (
            <button
              className="button login-btn"
              onClick={() => {
                handleLogoutClick();
                setIsMenuOpen(false);
              }}
            >
              Log Out
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
