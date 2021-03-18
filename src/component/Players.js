import React, { useState } from 'react';
import { Player } from './Player';
import {CaretRightFill, CaretDownFill} from 'react-bootstrap-icons'

const players = [
    {id:1, firstName:"Miro", lastName:"Voisovych", occupation:"dev", age:35},
    {id:2, firstName:"Harry", lastName:"Kane", occupation:"forward", age:29},
    {id:3, firstName:"Elon", lastName:"Mask", occupation:"technoking", age:44},
]

const Players = () => {
    const[showMenu, setShowMenu] = useState(false);
    const openMenu =() =>{
        setShowMenu(!showMenu)
    }
    return (
        <div className="content">
        <div className="title">
            <div className="header">
                <h2>Players</h2>
                {players.length>0 &&
                <span>({players.length})</span>
                }
                {showMenu ? 
                <CaretDownFill
                size='22'
                onClick={openMenu}
                style={{cursor:'pointer'}}
                /> :
                <CaretRightFill
                size='22'
                onClick={openMenu}
                style={{cursor:'pointer'}}
                />  
            }
            </div>
        </div>

        {showMenu&&
        <div className="players">
            {players.map(player =>
               <Player 
               key={player.id}
               firstName={player.firstName}
               lastName={player.lastName}
               occupation={player.occupation}
               age={player.age}
               />
            )}
        </div>}
        </div>
    )
}

export default Players;