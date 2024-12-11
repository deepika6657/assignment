import Player from "../components/Player.jsx";
import GameBoard from  "../components/GameBoard.jsx"
import { useState } from "react";
//import Log from "./componets/Log.jsx";
import { Win_win } from "../Win_win.js";
import GameOver from "../components/GameOver.jsx";
import '../pages/Game.css';


  
const intialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
   ]; 

function driveActivePlayer(gameTurn){

  let currentPlayer = 'X';
  if(gameTurn.length > 0 && gameTurn[0].player === 'X') { 
   currentPlayer='0';
  }
  return currentPlayer;
}


function Game() {
  //const [activePlayer , setAcitvePlayer]=useState('X');
  const [gameTurn , setGameTurn]= useState([]);
   
  const activePlayer = driveActivePlayer(gameTurn);

  let gameBoard=[...intialGameBoard.map(array=> [...array])]
  for(const turn of gameTurn)
  {
    const {square , player} = turn;
    const {row , col } = square;
    
  gameBoard[row][col] =player ; 

  }
let winner;
  for (const combination of Win_win ){
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secSquareSymbol=  gameBoard[combination[1].row][combination[1].column];
    const thridSquareSymbol =gameBoard[combination[2].row][combination[2].column];

    if(firstSquareSymbol && firstSquareSymbol === secSquareSymbol && firstSquareSymbol===thridSquareSymbol){
      winner= firstSquareSymbol;
    }
  }
      const hasDraw = gameTurn.length === 9 && !winner ;

    function handleRestart(){
      setGameTurn([]);
    }
     
     

  function handleSelectSquare(rowIndex , colIndex){
     

   // setAcitvePlayer((curPlayer)=> curPlayer==='X' ? 'O' : 'X' );
   
    setGameTurn((preTurn)=> {
      let currentPlayer = 'X';
     if(preTurn.length > 0 && preTurn[0].player === 'X') { 
      currentPlayer='0';
     }
    const updatedTurn= [ {square :{row: rowIndex , col: colIndex} , player :currentPlayer },
      ...preTurn,
    ];
    return updatedTurn;
   } );}

  
  return (
    <main>
   <div id="game-container">
    <ol id="players" className="highlight-player">
     <Player initialName="Player-1" symbol="O" isActive={activePlayer=== 'O'}/>
     <Player initialName="Player-2" symbol="X" isActive={activePlayer==='X'} />
    </ol>
    {(winner||hasDraw) && <GameOver winner={winner}  onRestart={handleRestart} />}
    <GameBoard onSelectSquare={handleSelectSquare}  board={gameBoard} />
   </div>
   
   </main>
  
  )
}

export default Game;
