import React from 'react';
import '../pages/Game.css';

export default function GameOver({winner , onRestart}) {
  return (
    <div id='game-over'>
    <h2> GameOver </h2>
    { winner && <p> {winner} won! </p>}
    { !winner && <p>  It&apos;s a Draw! </p>}
        <button onClick={onRestart}> Rematch </button>
    </div>
  )
}
