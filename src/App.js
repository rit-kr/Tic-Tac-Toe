
import React, { useState } from 'react';
import Confetti from 'react-confetti';

import './App.css';
import Board from './Board';

function App() {

  const [currentState, setCurrentState] = useState(["","","","","","","","",""]);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [history, setHistory] = useState([]);
  const [winner, setWinner] = useState("");
  

const  handlePlayerChange =(i) => {
    if( currentState[i] || winner){
      return;
    };
    const newCurrentState = [...currentState];
    if(newCurrentState[i] === ""){
      newCurrentState[i] = currentPlayer ? "X" : "O";
    }
    let newWinner = calculateWinner(newCurrentState);

    setCurrentState(newCurrentState);
    setCurrentPlayer(!currentPlayer);
    setHistory(history.concat([newCurrentState]));
    setWinner(newWinner);
    
  }

const  calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

const  timeTravel = (step) => {
    const newStep =  step;
    setCurrentState(newStep)
  }

const  restart = () => {
    setCurrentState(["","","","","","","","",""]);
    setHistory([]);
    setWinner("");
  }

    // console.log(this.state.history)
    console.log(currentState)
    return (
      <div className="App flex">
        <div>
          <h2 className='title'>Tic Tac Toe</h2>
          <Board  
          currentState = {currentState}
          currentPlayer = {currentPlayer}
          handlePlayerChange = {handlePlayerChange}
          calculateWinner = {calculateWinner}
          winner={winner}
          />
          <button className='reset' onClick={() => {restart()}}>Restart</button>
        </div>

        <div className='winner-container flex column flex-25'>
          {
            history.map((step, index) => {
              return(
                <button onClick={() => {timeTravel(step)}} key={index}>Step: {index + 1}</button>
                )
              })
            }
            {
                  winner && 
                  <div>
                  <div className='winner'>Winner is {winner}</div> 
                  <Confetti/>
                  </div>
                }
        </div>
               
      </div>
    )
}

export default App;
