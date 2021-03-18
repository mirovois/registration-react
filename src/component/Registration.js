import React, {useState} from 'react'
import Input from './Input'

const players = [
    {id:1, firstName:"Miro", lastName:"Voisovych", occupation:"dev", age:35},
    {id:2, firstName:"Harry", lastName:"Kane", occupation:"forward", age:29},
    {id:3, firstName:"Elon", lastName:"Mask", occupation:"technoking", age:44},
]

const Registration = () => {
    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[occupation,setOccupation] = useState('');
    const[age,setAge] = useState('');
    return (
        <div className="registration">
                <div className="title">
                    <h1>Join the event</h1>
                </div>
                <form>
                    <div className="row">
                    <Input 
                        heading="First name"
                        value={firstName}
                        setValue={setFirstName}
                        />
                        {firstName}
                    <Input 
                        heading="Last name"
                        value={lastName}
                        setValue={setLastName}
                        />
                        {lastName}
                    </div>
                    <div className="row">
                    <Input 
                        heading="Occupation"
                        value={occupation}
                        setValue={setOccupation}
                        />
                        {occupation}
                    <Input 
                        heading="Age"
                        value={age}
                        setValue={setAge}
                        />
                        {age}
                    </div>
                    <button className="btn__register">
                        Register for this game
                    </button>
                </form>
            </div>
        
    )
}

export default Registration
