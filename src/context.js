import React, { createContext, useReducer } from 'react';
import teamReducer from './reducer';

const initialState = {
   teams: [{id:1,name:"Habs"}, {id:2, name:"Raptors"}]
};

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

    const addTeam =(team) =>{
        dispatch({
            type:"ADD_TEAM",
            payload:team
        })
    }

    const removeTeam = (id) =>{
        dispatch({
            type:"REMOVE_TEAM",
            payload: id
        })
    }
    return (
        <MyContext.Provider value={{teams:state.teams, fetchTeams, addTeam, removeTeam}}>
            {children}
        </MyContext.Provider>
    )

}

