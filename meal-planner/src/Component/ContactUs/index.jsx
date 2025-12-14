import React from "react";
import "./style.css";

const Contact = () => {
  return (
    <div className="contact">

      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>
          Have questions or need help? We are here to assist you.
          Feel free to reach out to us anytime.
        </p>
      </section>

      <section className="contact-content">

        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>
            If you have any queries, feedback, or suggestions about our
            Meal Planner application, please contact us using the details
            below or by filling out the form.
          </p>

          <div className="info-item">
            <span>📧</span>
            <p>bhosalebharat111@gmail.com</p>
          </div>

          <div className="info-item">
            <span>📞</span>
            <p>+91 8805505715</p>
          </div>

          <div className="info-item">
            <span>📍</span>
            <p>Solapur, Maharashtra, India</p>
          </div>
        </div>

        <div className="contact-form">
          <h2>Send a Message</h2>

          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

      </section>

    </div>
  );
};

export default Contact;
