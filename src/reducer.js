// import React, { useReducer }  from 'react';

export default function reducer(state, action) {
   switch(action.type) {
      case "FETCH_TEAMS":
         return {
            ...state,
            teams: action.payload,
         };
      case "ADD_TEAM":
         return {
            ...state,
            teams: [...state.teams, action.payload],
         };
      case "REMOVE_TEAM":
         return{
            ...state,
            teams:state.teams.filter((team) =>team.id !== action.payload)
         }
      default:
         return state;
   }
}