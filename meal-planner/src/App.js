import "./App.css";
import AboutUs from "./Component/AboutUs";
import ContactUs from "./Component/ContactUs";
import Footer from "./Component/Footer";
import Home from "./Component/Home";
import Login from "./Component/Login";
import Logout from "./Component/Logout";
import Meal from "./Component/Meal";

import Navbar from "./Component/Navbar";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [navSelection, setNavSelection] = useState("Home");

  console.log("Nav Selection:", navSelection);

  

  const pages = (navSelection) =>{
    console.log(navSelection);
    switch (navSelection) {
      case "Home":
        return <Home />;
      case "AboutUs":
        return <AboutUs />;
      case "ContactUs":
        return <ContactUs />;
      case "PlanMeal":
        return isLoggedIn ?(<Meal /> ): (<div className="alert">First log in, then access this page</div>)
      case "LogIn":
        return <Login setIsLoggedIn={setIsLoggedIn} setShowAuth={setShowAuth} setNavSelection={setNavSelection} />;

      default:
        return <Home />;
    }
  }

  return (
    <>
      <Navbar
        isLoggedIn={isLoggedIn}
        setShowAuth={setShowAuth}
        setIsLoggedIn={setIsLoggedIn}
        setNavSelection={setNavSelection}
        navSelection={navSelection}
      />

      {isLoggedIn && <Logout setIsLoggedIn={setIsLoggedIn} />}
      <div className="app-container">
        {pages(navSelection)}
        <Footer/>
      </div>
    </>
  );
}

export default App;
