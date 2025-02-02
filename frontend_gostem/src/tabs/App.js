import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import goStemLogo from './components/GoStemLogo.png';
import './styles/App.css';
import LandingPage from "./landing-page";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/landing-page" component={LandingPage} />
      </Switch>
    </Router>
  );
}

const Home = () => {
  return (
    <div className="App">
      <header className="Landing-page">
        <img src={goStemLogo} className="App-logo" alt="logo" />
        <Link to="/landing-page">
          <button className="Login-button">
            Login
          </button>
        </Link>
      </header>
    </div>
  );
};

export default App;
