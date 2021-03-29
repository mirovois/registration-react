import React, { useState, useContext, useEffect } from 'react';
import { Player } from './Player';
import {CaretRightFill, CaretDownFill} from 'react-bootstrap-icons';
import { MyContext } from '../context';
import {DotLoader} from 'react-spinners'
import axios from 'axios'


// const players = [
//     {id:1, firstName:"Miro", lastName:"Voisovych", occupation:"dev", age:35},
//     {id:2, firstName:"Harry", lastName:"Kane", occupation:"forward", age:29},
//     {id:3, firstName:"Elon", lastName:"Mask", occupation:"technoking", age:44},
// ]




const URL='https://app-webregistration.herokuapp.com'


const Players = () => {
// const{players, setPlayers} = useContext(MyContext);
const[state, dispatch] = useContext(MyContext);
const{players} = state;
// console.log('Players component'+ players)
// const[players,setPlayers] = useState([])
const[loading, isLoading] = useState(false)

useEffect(() =>{
    const fetchData = async() =>{
        isLoading(true)
        const response = await axios.get(`${URL}/players`)
        dispatch({
            type:"FETCH_PLAYERS",
            payload: response.data
        })
        isLoading(false)
        console.log('Added objects', response.data)
    }
    fetchData()
},[dispatch])    
    const[showMenu, setShowMenu] = useState(true);
    const openMenu =() =>{
        setShowMenu(!showMenu)
    }
    return (
        <div className="players">
        
            
                <h2 players__title>Players &nbsp;
                {players.length>0 &&
                <span>({players.length})</span>}
                &nbsp;
                {showMenu ? 
                <CaretDownFill
                size='18'
                onClick={openMenu}
                style={{cursor:'pointer'}}
                /> :
                <CaretRightFill
                size='18'
                onClick={openMenu}
                style={{cursor:'pointer'}}
                />  
            }
                </h2>
        {loading ? 
            (
                <div className='loader'>
                    <DotLoader loading={loading} size={150} color={'rgb(163, 148, 148)'} /> 
                </div>

            ):
            showMenu&&
            <ul className={`players__list ${players.length >2 ? 'add__scroll' : ''}`}>
                {state.players.map(player =>
                   <Player 
                   key={player._id}
                   firstName={player.firstName}
                   lastName={player.lastName}
                   occupation={player.occupation}
                   age={player.age}
                   id={player._id}
                   team={player.team}
                   image = {player.image}
                   />
                )}
            </ul>}       
        </div>
    )
}

export default Players;