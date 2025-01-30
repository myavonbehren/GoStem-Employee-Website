import goStemLogo from './components/GoStemLogo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="Landing-page">
        <img src={goStemLogo} className="App-logo" alt="logo"/>
        <button className='Login-button'> Login </button>
      </header>
    </div>
  );
}

export default App;
