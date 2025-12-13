import React, { useCallback } from "react";
import PropTypes from "prop-types";
import "./style.css";

function Navbar({ isLoggedIn, setShowAuth, setIsLoggedIn, setNavSelection,navSelection }) {
  const navItems = [
    { key: "Home", label: "Home" },
    { key: "AboutUs", label: "About Us" },
    { key: "ContactUs", label: "Contact Us" },
    { key: "PlanMeal", label: "Plan Meal" },
  ];

  const handleLoginClick = () =>{ setShowAuth(true)
    setNavSelection("LogIn");
  };
  const handleLogoutClick =  () => setIsLoggedIn(false);

  return (
    <header className="navbar">
      <div className="nav-left">
        <div className="logo">🍽️</div>
        <h2 className="name">Meal Planner</h2>
      </div>

      <ul className="nav-links">
        {navItems.map((item) => (
          <li key={item.key}>
            <button data-selection={item.key} onClick={()=>setNavSelection(item.key)} className={navSelection===item.key?"active":""}>
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
    </header>
  );
}

export default Navbar;
