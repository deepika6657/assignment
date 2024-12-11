import React, { useState } from 'react';
import '../pages/Game.css';

export default function Player({initialName , symbol , isActive }) {
  
const [playerName , setPlayerName]=useState(initialName);
const [isEditing , setIsEditing] =useState(false);

function handleClick(){
  setIsEditing(editing=>!editing); //using func. 

  //setIsEditing(!isEditing)

}
function handleChange(event){
setPlayerName(event.target.value)
}
   
let editablePlayerName = <span className="player-name">{playerName}</span>;
if(isEditing){
  editablePlayerName=<input type='text' required value={playerName} onChange={handleChange}/>;
}

  return (
    <div>
     <li className={isActive ? 'active' : ''}>
         <span className="Players">
       {editablePlayerName} 
       <span className="player-symbol">{symbol}</span>
       </span>
       <button onClick={handleClick}> {isEditing ? 'SAVE' : 'EDIT'}</button>
      </li>
    </div>
  )
}
