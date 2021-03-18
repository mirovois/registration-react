import React, {useContext} from 'react';
import {MyContext} from './context'

const List = () => {
    const {teams, removeTeam} =  useContext(MyContext)
    return (
        <div>
            <ul>
          {teams.map((item) =>(
            <li key={item.id}>
                <span>{item.name}</span>
                <button onClick={() =>removeTeam(item.id)}>X</button>
            </li>
          ))}
          
        </ul>
        </div>
    )
}

export default List
