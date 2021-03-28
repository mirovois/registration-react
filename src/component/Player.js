import React, { useState, useContext } from 'react'
import Modal from '../component/Modal'
import img from '../assets/ava.jpg'
import {PencilSquare, PersonDashFill, Record2Fill} from 'react-bootstrap-icons'
import {MyContext} from '../context';
import axios from 'axios';

export const Player = ({id,firstName, lastName, occupation,age,team}) => {
    const[editFirstName, setEditFirstName] = useState(firstName)
    const[editLastName, setEditLastName] = useState(firstName)
    const[editTeam, setEditTeam] = useState(occupation)
    const[editAge, setEditAge] = useState(age)

    // const{removePlayer,addPlayer} = useContext(MyContext);
    const[state, dispatch] = useContext(MyContext);
    const{players} = state;

    const[showModal,setShowModal]=useState(false);
    const[hover, setHover] = useState(false);

    const handleModifyPlayer = async(pid) =>{
        const modifiedPlayer = {firstName:editFirstName,lastName:editLastName,team:editTeam,age:editAge}
        try{
            const response = await axios.patch(`/players/${pid}`, modifiedPlayer)
            dispatch({
                type:"MODIFY_PLAYER",
                payload:response.data
            })
            console.log('Ready to modify player', modifiedPlayer)
        }
        catch(error){
            console.log(error)
        }
    }

    const team_dot = team ==='blues' ? '#1b1d8a' : '#750f3f'
    
    const handleRemovePlayer = async (pId) =>{
        try{
            await axios.delete(`/players/${pId}`)
            dispatch({
                type:"REMOVE_PLAYER",
                payload: pId
            })
        }
        catch(error){
            console.log(error.message)
        }
    }    
    return (       
            <li className="player"
            onMouseEnter={() =>{setHover(true)}}
            onMouseLeave={() =>{setHover(false)}}
            >
                <div className="personal">
                    <div className="avatar">
                        <img src={img} alt="avatar"/>
                    </div>
                    <div className="info">
                        <p className="name">{firstName} {lastName}</p>
                        <p className="age">{age} years</p>
                        <Record2Fill  style={{color:`${team_dot}`}}/>
                        {/* <p className="team" style={{backgroundColor:`${team_dot}`}}>{team}</p> */}
                    </div>
                </div>
                {hover &&
                    <div className="icons">
                        <PencilSquare 
                            size='18'
                            onClick={() =>setShowModal(true)}
                            style={{opacity:0.6,cursor:'pointer'}}
                        />
                        <PersonDashFill 
                            size='18'
                            onClick={() =>handleRemovePlayer(id)}
                            style={{opacity:0.6,cursor:'pointer',marginLeft:'6px'}}
                        />
                    </div>
                }
                    <Modal 
                    showModal={showModal} setShowModal={setShowModal}
                    >
                        <form className="edit__form" onSubmit={() =>handleModifyPlayer(id)}>
                            <h3>Modify player data</h3>
                            <article>
                                <h5>First Name</h5>
                                <input 
                                className="input__edit"
                                placeholder="first name"
                                type="text"
                                value={editFirstName}
                                onChange={(e) =>setEditFirstName(e.currentTarget.value)}
                                autoFocus
                                />
                            </article>
                           
                           <article>
                                <h5>Last Name</h5>
                                <input 
                                className="input__edit"
                                placeholder="last name"
                                type="text"
                                value={editLastName}
                                onChange={(e) =>setEditLastName(e.currentTarget.value)}
                                />
                           </article>
                             {/* <input 
                            className="input__edit"
                            placeholder="team"
                            type="text"
                            value={editTeam}
                            onChange={(e) =>setEditTeam(e.currentTarget.value)}
                            /> */}
                            <article>
                                <h5>Age</h5>
                                <input 
                                className="input__edit"
                                placeholder="age"
                                type="text"
                                value={editAge}
                                onChange={(e) =>setEditAge(e.currentTarget.value)}
                                />
                            </article>
                            <div className='edit__teams'>
                                <div className='edit__bar' style={{backgroundColor:'#750f3f'}}>1 bar</div>
                                <div className='edit__bar' style={{backgroundColor:'#1b1d8a'}}>2 bar</div>

                            </div>
                            <button className='btn__edit'>
                                Confirm
                            </button>
                        </form>
                        <button onClick={() =>setShowModal(false)}>Close</button>
                    </Modal>

            </li>    
    )
}
