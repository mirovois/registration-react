import React, {useState, useContext} from 'react'
import Input from './Input'
import {MyContext} from '../context'
import { uuid } from 'uuidv4'
import axios from 'axios'

// const players = [
//     {id:1, firstName:"Miro", lastName:"Voisovych", occupation:"dev", age:35},
//     {id:2, firstName:"Harry", lastName:"Kane", occupation:"forward", age:29},
//     {id:3, firstName:"Elon", lastName:"Mask", occupation:"technoking", age:44},
// ]

const Registration = () => {
    const{addPlayer,players} = useContext(MyContext)

    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[occupation,setOccupation] = useState('');
    const[age,setAge] = useState('');

    const handleAddPlayer =(e) =>{
        e.preventDefault()
        axios.post('/players',addPlayer({
            // id:uuid(),
            firstName,
            lastName,
            occupation,
            age
        })) 
        // setFirstName('');
        // setLastName('');
        // setOccupation('');
        // setAge('')
        console.log('New Player added:')
    }
    console.log(players)
    return (
        <div className="registration">
                <div className="title">
                    <h1>Join the event</h1>
                </div>
                <form  className="registration__form" onSubmit={handleAddPlayer}>
                    <div className="row">
                    <Input 
                        heading="First name"
                        value={firstName}
                        setValue={setFirstName}
                        />
                     <Input 
                        heading="Last name"
                        value={lastName}
                        setValue={setLastName}
                        />
                    </div>
                    <div className="row">
                    <Input 
                        heading="Occupation"
                        value={occupation}
                        setValue={setOccupation}
                        />
                    <Input 
                        heading="Age"
                        value={age}
                        setValue={setAge}
                        />
                    </div>
                    <button className="btn__register" >
                        Register for this game
                    </button>
                </form>
            </div>
        
    )
}

export default Registration
