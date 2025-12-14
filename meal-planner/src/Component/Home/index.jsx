import React from "react";
import "./style.css";

const Home = () => {
  return (
    <div className="home">

      {/* HERO TEXT */}
      <section className="hero-text">
        <h1>
          Your Personal Meal Planning <br /> Assistant
        </h1>
        <p>
          Create customized meal plans based on your body metrics and lifestyle.
          Get personalized nutrition recommendations for breakfast, lunch, and dinner.
        </p>
      </section>

      {/* HERO IMAGE / SLIDER */}
      <section className="hero-image">
        <div className="slider">
          <div className="slide-track">
            <div className="slide">
              <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061" alt="" />
            </div>
            <div className="slide">
              <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd" alt="" />
            </div>
            <div className="slide">
              <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836" alt="" />
            </div>
            <div className="slide">
              <img src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe" alt="" />
            </div>
          </div>
        </div>
      </section>
      
      <div className="features-title">
        <h2>Why Choose Meal Planner?</h2>
        <p>
          Smart features designed to help you eat healthy, stay fit,
          and plan meals effortlessly.
        </p>
      </div>

      {/* IMAGE ANI FEATURES MADHLA TEXT */}
      {/* FEATURES SECTION */}
      <section className="features-wrapper">
        <div className="features-grid">

          <div className="feature-card">
            <div className="icon red">🎯</div>
            <h3>Personalized Plans</h3>
            <p>Tailored meal recommendations based on your unique body metrics.</p>
          </div>

          <div className="feature-card">
            <div className="icon green">🥗</div>
            <h3>Balanced Nutrition</h3>
            <p>Complete breakfast, lunch, and dinner suggestions.</p>
          </div>

          <div className="feature-card">
            <div className="icon blue">📊</div>
            <h3>Track Progress</h3>
            <p>Monitor your nutrition journey with detailed insights.</p>
          </div>

          <div className="feature-card">
            <div className="icon yellow">⚡</div>
            <h3>Activity Based</h3>
            <p>Meal plans adjusted to your daily activity levels.</p>
          </div>

        </div>
      </section>


    </div>
  );
};

export default Home;
