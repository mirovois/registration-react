// import React, { useReducer }  from 'react';

export default function reducer(state, action) {
   switch(action.type) {
      case "FETCH_TEAMS":
         return {
            ...state,
            teams: action.payload,
         };
      case "ADD_PLAYER":
         return {
            ...state,
            players: [...state.players, action.payload],
         };
      case "REMOVE_PLAYER":
         return{
            ...state,
            players:state.players.filter((player) =>player.id !== action.payload)
         }
      default:
         return state;
   }
}