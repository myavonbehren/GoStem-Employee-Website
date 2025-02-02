import './styles/landing-page.css';
import React from "react";

const LandingPage = () => {
  return (
    <div className="body">
      <header className="landing-header">
        <h1>Welcome to GoStem</h1>
      </header>
      
      <div className="button-grid">
        <button className="image-button">
          <img src="/path-to-image-1.jpg" alt="Home" />
        </button>
        <button className="image-button">
          <img src="/path-to-image-2.jpg" alt="Notes" />
        </button>
        <button className="image-button">
          <img src="/path-to-image-3.jpg" alt="Schedule" />
        </button>
        <button className="image-button">
          <img src="/path-to-image-4.jpg" alt="Hours" />
        </button>
        <button className="image-button">
          <img src="/path-to-image-5.jpg" alt="Chats" />
        </button>
        <button className="image-button">
          <img src="/path-to-image-6.jpg" alt="Profile" />
        </button>
      </div>
      
      <div className="bottom-buttons">
        <button className="bottom-button">Settings</button>
        <button className="bottom-button">Log Out</button>
      </div>
    </div>
  );
};

export default LandingPage;
