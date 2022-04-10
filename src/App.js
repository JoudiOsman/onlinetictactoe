import logo from './logo.svg';
import './App.css';

function App() {
  let oneScore = 0;
  let twoScore = 0;
  return (
    <div>
      <div className ="Grid">
      </div>
      <header className = "Score">
        <div className = "P1Score">
          <p>Player one Score
          <br/>{twoScore}</p>
        </div>
        <div className = "P2Score">
          <p>Player two Score
          <br/>{oneScore}</p>
        </div>
        <button className = "Button"> New Game</button>
      </header>
    </div>
  );
}

export default App;
