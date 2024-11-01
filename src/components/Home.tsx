import React from 'react';
import './Home.css'; // Import CSS for styling

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <section className="hero">
        <h2>Welcome to Virgin Dating App</h2>
        <p>Find someone special who shares your values.</p>
        <div className="cta-buttons">
          <a href="/register" className="btn">Get Started</a>
          <a href="/login" className="btn btn-secondary">Login</a>
        </div>
      </section>

      <section className="features">
        <h3>Why Join Us?</h3>
        <ul>
          <li>🌟 Connect with like-minded people</li>
          <li>🔒 Your privacy and safety are our priority</li>
          <li>💬 Real conversations, meaningful connections</li>
        </ul>
      </section>

      <section className="testimonials">
        <h3>Success Stories</h3>
        <blockquote>
          "I met someone amazing through this app! It's been life-changing." - Sarah
        </blockquote>
        <blockquote>
          "Finally, a platform that respects my values. Thank you!" - John
        </blockquote>
      </section>
    </div>
  );
};

export default Home;
