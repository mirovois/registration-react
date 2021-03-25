import React, { useState, useContext, useEffect } from 'react';
import { Player } from './Player';
import {CaretRightFill, CaretDownFill} from 'react-bootstrap-icons';
import { MyContext } from '../context';
import axios from 'axios'


// const players = [
//     {id:1, firstName:"Miro", lastName:"Voisovych", occupation:"dev", age:35},
//     {id:2, firstName:"Harry", lastName:"Kane", occupation:"forward", age:29},
//     {id:3, firstName:"Elon", lastName:"Mask", occupation:"technoking", age:44},
// ]

<<<<<<< Updated upstream

=======
// const URL='https://app-webregistration.herokuapp.com'
>>>>>>> Stashed changes

const Players = () => {
// const{players, setPlayers} = useContext(MyContext);
const[state, dispatch] = useContext(MyContext);
const{players} = state;
// console.log('Players component'+ players)
// const[players,setPlayers] = useState([])

useEffect(() =>{
    const fetchData = async() =>{
        const response = await axios.get('/players')
        dispatch({
            type:"FETCH_PLAYERS",
            payload: response.data
        })
    }
    fetchData()
},[dispatch])
// useEffect(() =>{
//     const fetchData = async() =>{
//         const response = await axios.get('/players')
//         setPlayers(response.data)
//         console.log('Fetched data'+ response.data)
//     }
//     fetchData()
// },[])
    
    const[showMenu, setShowMenu] = useState(true);
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
            {state.players.map(player =>
               <Player 
               key={player._id}
               firstName={player.firstName}
               lastName={player.lastName}
               occupation={player.occupation}
               age={player.age}
               id={player._id}
               />
            )}
        </div>}
        </div>
    )
}

export default Players;