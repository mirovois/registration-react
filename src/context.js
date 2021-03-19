import React, { createContext, useReducer } from 'react';
import teamReducer from './reducer';

const initialState = {players:[
    {id:1, firstName:"Miro", lastName:"Voisovych", occupation:"dev", age:35},
    {id:2, firstName:"Harry", lastName:"Kane", occupation:"forward", age:29},
    {id:3, firstName:"Elon", lastName:"Mask", occupation:"technoking", age:44},
]};

// Create Context
export const MyContext = createContext(initialState);

// Create Provider
export const TeamContextProvider = ({children}) =>{
// Use Reducer
    const [state, dispatch] = useReducer(teamReducer, initialState);

// Define reducer actions
    const fetchTeams = (teams) =>{
        dispatch({
            type:"FETCH_TEAMS",
            payload: teams
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
        <MyContext.Provider value={{players:state.players, fetchTeams, addPlayer, removePlayer}}>
            {children}
        </MyContext.Provider>
    )

}

