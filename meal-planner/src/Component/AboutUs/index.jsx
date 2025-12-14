import React from "react";
import "./style.css";

const About = () => {
  return (
    <div className="about">
      <section className="about-1">
        <h1>About Us</h1>
        <p>
          We are building a smarter way to plan meals using technology
          and nutrition science.
        </p>
      </section>
      <section className="about-content">
        <div className="about-box">
          <div className="about-icon">👥</div>
          <h2>Who We Are</h2>
          <p>
            Meal Planner is a smart web application designed to help users
            create healthy and personalized meal plans based on their
            lifestyle, body metrics, and daily activities.
          </p>
        </div>

        <div className="about-box">
          <div className="about-icon">🎯</div>
          <h2>Our Mission</h2>
          <p>
            Our mission is to make healthy eating simple, accessible,
            and personalized for everyone using AI-powered recommendations.
          </p>
        </div>

        <div className="about-box">
          <div className="about-icon">💡</div>
          <h2>Why Choose Us?</h2>
          <p>
            We combine technology, nutrition knowledge, and user-friendly
            design to help you stay healthy without confusion or stress.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
