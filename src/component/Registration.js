<<<<<<< Updated upstream
import React, {useState, useContext} from 'react'
=======
import React, {useState, useEffect, useContext} from 'react'
>>>>>>> Stashed changes
// import Input from './Input'
import { uuid } from 'uuidv4'
import axios from 'axios'
import { MyContext } from '../context';

// const players = [
//     {id:1, firstName:"Miro", lastName:"Voisovych", occupation:"dev", age:35},
//     {id:2, firstName:"Harry", lastName:"Kane", occupation:"forward", age:29},
//     {id:3, firstName:"Elon", lastName:"Mask", occupation:"technoking", age:44},
// ]
// const URL='https://app-webregistration.herokuapp.com'

const Registration = () => {
<<<<<<< Updated upstream
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
=======
    
    const[state, dispatch] = useContext(MyContext);
    const{players} = state;
    
    const[formValues, setFormValues] = useState(players)
    
    const[loading, isLoading] = useState(false)
    
    
    const handleChange = (e) =>{
        const{name,value} = e.currentTarget
        setFormValues({...formValues, [name]:value})
    }
    
    const handleAddPlayer = async(e) =>{
        e.preventDefault()
        const newPlayer = formValues
            try{                
                const response = await axios.post('/players',newPlayer)
                dispatch({
                    type:"ADD_PLAYER",
                    payload:response.data
                })
                console.log("New player added:", newPlayer)
                isLoading(false)    
            }
            catch(error){
                console.log("Error adding new player:", error.message)
            }
    } 
    console.log(players)
>>>>>>> Stashed changes
    return (
        <div className="registration">
                <div className="title">
                    <h1>Join the event</h1>
                </div>
                <form  
                    className="registration__form" 
<<<<<<< Updated upstream
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
=======
                    onSubmit={handleAddPlayer}
                    
                >
                    <div className="row">
                    <div className="input__block">
                    <h3>First Name *</h3>
                    <input 
                        type='text' 
                        required
                        className="input__reg"
                        value={formValues.firstName}
                        name="firstName"
                        onChange={handleChange}
                        placeholder='Enter your first name'
                        />
                    </div>

                    <div className="input__block">
                    <h3>Last Name *</h3>
                     <input 
                        type='text' 
                        required
                        className="input__reg"
                        value={formValues.lastName}
                        name="lastName"
                        onChange={handleChange}
                        placeholder='Enter your last name'
>>>>>>> Stashed changes
                        />
                    </div>
                    </div>

                    <div className="row">
<<<<<<< Updated upstream
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
=======
                    <div className="input__block">
                    <h3>Occupation</h3>
                    <input 
                        className="input__reg"
                        heading="Occupation"
                        value={formValues.occupation}
                        onChange={handleChange}
                        placeholder='Enter your occupation'
                        name='occupation'
                        />
                    </div>
                    <div className="input__block">
                    <h3>Age *</h3>
                    <input 
                        className="input__reg"
                        value={formValues.age}
                        onChange={handleChange}
                        placeholder='Enter your age'
                        type='number' min='15'
                        required
                        />
                    </div>
                    </div>
                    <button className="btn__register" 
                    >
                        {loading ? 'submitting...' : 'Register for this game'}
>>>>>>> Stashed changes
                    </button>
                </form>
            </div>
        
    )
}

export default Registration
