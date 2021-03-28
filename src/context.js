import React, { createContext, useReducer, useState, useEffect } from 'react';
import teamReducer from './reducer';
import axios from 'axios';


// const initialState = {players:[
//         {id:1, firstName:"Miro", lastName:"Voisovych", occupation:"dev", age:35},
//         {id:2, firstName:"Harry", lastName:"Kane", occupation:"forward", age:29},
//         {id:3, firstName:"Elon", lastName:"Mask", occupation:"technoking", age:44},
//     ]};

// const players = [
//     {id:1, firstName:"Miro", lastName:"Voisovych", occupation:"dev", age:35},
//     {id:2, firstName:"Harry", lastName:"Kane", occupation:"forward", age:29},
//     {id:3, firstName:"Elon", lastName:"Mask", occupation:"technoking", age:44},
// ];
// const[players, setPlayers] = useState(players)

// useEffect(() =>{
    //     const fetchData = async() =>{
        //         const response = await axios.get('/players')
        //         setPlayers(response.data)
        //         console.log('Fetched data'+ response.data)
        //     }
        //     fetchData()
        // },[])
        
        // Create Context
export const MyContext = createContext();
        
// const filterTeams = (selectedTeam) =>{
//         const newTeam = players.filter((player) => player.team === selectedTeam)
//         return newTeam
//     }
const initialState = {
    players:[],
    teams:{
        reds:0,
        blues:0
    }
}

// Create Provider
export const TeamContextProvider = ({children}) =>{
// Use Reducer
    const [state, dispatch] = useReducer(teamReducer, initialState);
    
    // useEffect(() =>{
    //     const fetchData = async() =>{
    //         const result = await axios.get('/players')
    //         dispatch({type:'FETCH_PLAYERS', payload:result.data})
    //         console.log('Data in registration fetched')
    //    }
    //     fetchData()
    // },[])

// Define reducer actions
    const fetchTeams = (players) =>{
        dispatch({
            type:"FETCH_PLAYERS",
            payload: players
        })
    }

    const addPlayer =(player) =>{
        dispatch({
            type:"ADD_PLAYER",
            payload:player
        })
    }

    const removePlayer = (id) =>{
        dispatch({
            type:"REMOVE_PLAYER",
            payload: id
        })
    }
    return (
        <MyContext.Provider value={[state, dispatch]}>
            {children}
        </MyContext.Provider>
    )

}

// "proxy": "http://localhost:5000"
// value={{players:state.players, fetchTeams, addPlayer, removePlayer}}