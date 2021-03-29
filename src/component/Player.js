import React, { useState, useContext } from 'react'
import Modal from '../component/Modal'
import img from '../assets/ball.jpg'
import {PencilSquare, PersonDashFill, Record2Fill, XSquareFill} from 'react-bootstrap-icons'
import {MyContext} from '../context';
import axios from 'axios';
import shevchenko from '../assets/players/shevchenko.jpg'
import beckham from '../assets/players/beckham.jpg'
import cr7 from '../assets/players/cr7.jpg'
import miro from '../assets/players/miro.jpg'
import zidane from '../assets/players/zidane.jpg'
import mbappe from '../assets/players/mbappe.jpg'


const stars=[miro,beckham,shevchenko, cr7, zidane,mbappe]
// const random = Math.floor(Math.random() * stars.length);
// stars[Math.random() * stars.length | 0]

export const Player = ({id,firstName, lastName, occupation,age,team,image}) => {
    const[editFirstName, setEditFirstName] = useState(firstName)
    const[editLastName, setEditLastName] = useState(lastName)
    const[editTeam, setEditTeam] = useState(team)
    const[editAge, setEditAge] = useState(age)

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
    console.log('Change team to:', editTeam)
    const handleChangeTeam = (e) =>{
        e.preventDefault()
        if(e.currentTarget.innerHTML === 'reds'){
            setEditTeam('reds')
            console.log('Red button clicked',editTeam)
        } 
        if(e.currentTarget.innerHTML === 'blues')
        {
            setEditTeam('blues')
            console.log('Blue button clicked', editTeam)
        }
    }
    
    
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
                        <img src={stars[image]} alt="avatar"/>
                    </div>
                    <div className="info"
                        
                    >
                        <p className="name">{firstName} {lastName}</p>
                        <p className="age">{age} years</p>
                        <Record2Fill  style={{color:`${team_dot}`}}/>
                    </div>
                </div>
                {hover &&
                    <div className="icons">
                        <PencilSquare 
                            className='control__icon`'
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
                        <XSquareFill
                                className='btn__close-modal'
                                size='18'
                                onClick={() =>setShowModal(false)}/>
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
                                <span className={`edit__bar ${editTeam==='reds' ?'active' :''}`}   style={{backgroundColor:'#750f3f'}} onClick={handleChangeTeam}>
                                    reds</span>
                                <span className={`edit__bar ${editTeam==='blues' ?'active' :''}`}  style={{backgroundColor:'#1b1d8a'}} onClick={handleChangeTeam}>blues</span>

                            </div>
                            <button className='btn__edit'>
                                Confirm
                            </button>
                            {/* <button className="btn__close-modal" onClick={() =>setShowModal(false)}>Close</button> */}
                        </form>
                            {/* <XSquareFill
                                className='btn__close'
                                size='24'
                                style={{opacity:0.6,cursor:'pointer',marginLeft:'6px'}} 
                                onClick={() =>setShowModal(false)}/> */}
                    </Modal>

            </li>    
    )
}
