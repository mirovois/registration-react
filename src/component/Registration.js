import React, {useState, useContext} from 'react'
import Input from './Input'
import { uuid } from 'uuidv4'
import axios from 'axios'
import { MyContext } from '../context';

// const players = [
//     {id:1, firstName:"Miro", lastName:"Voisovych", occupation:"dev", age:35},
//     {id:2, firstName:"Harry", lastName:"Kane", occupation:"forward", age:29},
//     {id:3, firstName:"Elon", lastName:"Mask", occupation:"technoking", age:44},
// ]

const Registration = () => {
    // const{addPlayer,players} = useContext(MyContext)

    const[state, dispatch] = useContext(MyContext);
    const[loading, isLoading] = useState(false)
    const{players} = state;

    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[occupation,setOccupation] = useState('');
    const[age,setAge] = useState('');

    
    const handleAddPlayer = async(e) =>{
        
        //  console.log(`New player:${newPlayer}`)   
        e.preventDefault()
        const newPlayer = {
             firstName,
             lastName,
             occupation,
             age
                }
        try{
            isLoading(true)
            const response = await axios.post('/players',newPlayer)
              dispatch({
                type:"ADD_PLAYER",
                payload:response.data
              })
              console.log("New player added:", newPlayer)
            setFirstName('');
            setLastName('');
            setOccupation('');
            setAge('')  
            isLoading(false)
        }
        catch(error){
            console.log("Error adding new player:", error.message)
        }
    } 

    

    console.log(players)
    return (
        <div className="registration">
                <div className="title">
                    <h1>Join the event</h1>
                </div>
                <form  
                    className="registration__form" 
                    // onSubmit={handleAddPlayer}
                >
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
                    <button className="btn__register" 
                    type='submit'
                    onClick={handleAddPlayer}
                    >
                        {loading ? 'loading...' : 'Register for this game'}
                    </button>
                </form>
            </div>
        
    )
}

export default Registration
