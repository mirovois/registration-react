import React, {useState, useContext} from 'react'
// import Input from './Input'
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

    const{players} = state;
    const[data,setData] = useState(players)
    const[loading, isLoading] = useState(false)
    const[submitting, isSubmitting] =useState(false)
    const handleInputChange = e =>{
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    
    const handleAddPlayer = async(e) =>{
        
        //  console.log(`New player:${newPlayer}`)   
        e.preventDefault()
        // const newPlayer = {
        //      firstName,
        //      lastName,
        //      occupation,
        //      age
        //         }
        setData({...data,isSubmitting:true});
        try{
            isLoading(true)
            const response = await axios.post('/players',data)
              dispatch({
                type:"ADD_PLAYER",      
                payload:response.data
              })
            
              console.log("New player added:", data)
            // setFirstName('');
            // setLastName('');
            // setOccupation('');
            // setAge('')  
            setTimeout(() => {
                setData(data);
                isSubmitting(false)
            }, 500);
            
        }
        catch(error){
            console.log("Error adding new player:", error.message)
        }
    } 

    

    console.log(state.players)
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
                    <input 
                        heading="First name"
                        value={data.firstName}
                        onChange={handleInputChange}
                        name='firstName'
                        id='firstName'
                        required
                        />
                     <input 
                        heading="Last name"
                        value={data.lastName}
                        onChange={handleInputChange}
                        name='lastName'
                        id='lastName'
                        />
                    </div>
                    <div className="row">
                    <input 
                        heading="Occupation"
                        value={data.occupation}
                        onChange={handleInputChange}
                        name='occupation'
                        />
                    <input 
                        heading="Age"
                        value={data.age}
                        onChange={handleInputChange}
                        name='age'
                        />
                    </div>
            {data.errorMessage && (
              <span className="form-error">{data.errorMessage}</span>
            )}
                    <button disabled={data.isSubmitting} className="btn__register" 
                    type='submit'
                    onClick={handleAddPlayer}
                    >
                        {data.isSubmitting ? 'loading...' : 'Register for this game'}
                    </button>
                </form>
            </div>
        
    )
}

export default Registration
