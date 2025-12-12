import React from 'react'
import './style.css'

function Navebar() {
  return (
    <>
     <header className="navbar">
     
      <div className="nav-left">
        <div className="logo">🍽️</div>
        <h2 className="name">Meal Planner</h2>
      </div>

      
     
        <ul className="nav-links">
        <li><button>Home</button></li>
        <li>
            <button>About Us</button>
        </li>
        <li><button>Contact Us</button></li>
        <li><button>Plan Meal</button></li>
        </ul>
      

      
      <div className="nav-right">
        <button className="button login-btn">Log In</button>
      </div>
    </header>
    </>
  )
}

export default Navebar;
