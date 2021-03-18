import React, { useState } from 'react'
import Modal from '../component/Modal'
import img from '../assets/ava.jpg'
import {PencilSquare, PersonDashFill} from 'react-bootstrap-icons'

export const Player = ({id,firstName, lastName, occupation,age}) => {
    const[showModal,setShowModal]=useState(false);
    const[hover, setHover] = useState(false);

    const removePlayer=(lastName) =>{
        console.log(lastName)
    }
    return (       
            <article className="player"
            onMouseEnter={() =>{setHover(true)}}
            onMouseLeave={() =>{setHover(false)}}
            >
                <div className="personal">
                    <div className="avatar">
                        <img src={img} alt="avatar"/>
                    </div>
                    <div className="info">
                        <p className="name">{firstName} {lastName}</p>
                        {/* <p className="occupation">{occupation}</p> */}
                        <p className="age">{age} years</p>
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
                            onClick={() =>removePlayer(lastName)}
                            style={{opacity:0.6,cursor:'pointer',marginLeft:'6px'}}
                        />
                    </div>
                }
                    <Modal 
                    showModal={showModal} setShowModal={setShowModal}
                    >
                        <form className="edit__form">
                            <input 
                            placeholder="first name"
                            type="text"
                            value={firstName}
                            autoFocus
                            />
                             <input 
                            placeholder="last name"
                            type="text"
                            value={lastName}
                            autoFocus
                            />
                        </form>
                        <button onClick={() =>setShowModal(false)}>Close</button>
                    </Modal>

            </article>    
    )
}
