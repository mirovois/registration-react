import React, {useState} from 'react';
import { useContext } from 'react';
import {v4 as uuidv4} from 'uuid';
import {MyContext} from './context';

const AddItem = () => {
    const {addTeam, teams} = useContext(MyContext)
    const[inputValue, setInputValue] = useState('');

    const handleChange = (e) =>{
        e.preventDefault();
        setInputValue(e.currentTarget.value)
      }

    const handleSubmit = () =>{
        addTeam({
            id:uuidv4(), 
            name:inputValue
        })
    }
    console.log(teams)
    return (
        <div>
            <label>Enter team's name</label>
        <input 
          type="text"
          value={inputValue}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Add</button>
        </div>
    )
}

export default AddItem
