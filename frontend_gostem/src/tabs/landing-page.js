import './styles/landing-page.css';
import clock from'./components/icons/clock.png'
import chat from'./components/icons/chat.png'
import gear from'./components/icons/gear.png'
import home from'./components/icons/home.png'
import logout from'./components/icons/logout.png'
import notes from'./components/icons/notes.png'
import schedule from'./components/icons/schedule.png'
import user from'./components/icons/user.png'

import NotePage from "./note-page";
import ChatPage from "./chats-page";
import HoursPage from "./hours-page";
import ProfilePage from "./profile-page";
import SchedulePage from "./schedule-page";

import React from "react";

const LandingPage = () => {
  return (
    <div className="body">
      <header className="landing-header">
        <h1>Welcome to GoStem</h1>
      </header>
      
      <div className="button-grid">
        <button className="image-button">
          <img src={home} alt="Home"/>
          <br></br>
          <span className="button-text">Home</span>
        </button>
        <button className="image-button">
          <img src={notes} alt="Notes"/>
          <br></br>
          <span className="button-text">Notes</span>
        </button>
        <button className="image-button">
          <img src={schedule} alt="Schedule"/>
          <br></br>
          <span className="button-text">Schedule</span>
        </button>
        <button className="image-button">
          <img src={clock} alt="Hours"/>
          <br></br>
          <span className="button-text">Hours</span>
        </button>
        <button className="image-button">
          <img src={chat} alt="Chats"/>
          <br></br>
          <span className="button-text">Chats</span>
        </button>
        <button className="image-button">
          <img src={user} alt="Profile"/>
          <br></br>
          <span className="button-text">Profile</span>
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
