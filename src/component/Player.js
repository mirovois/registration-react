import React, { useState, useContext } from 'react'
import Modal from '../component/Modal'
import img from '../assets/ava.jpg'
import {PencilSquare, PersonDashFill} from 'react-bootstrap-icons'
import {MyContext} from '../context';

export const Player = ({id,firstName, lastName, occupation,age}) => {
    const[editName, setEditName] = useState(firstName)

    const{removePlayer,addPlayer} = useContext(MyContext);

    const[showModal,setShowModal]=useState(false);
    const[hover, setHover] = useState(false);

    const handleModifyPlayer = (e) =>{
        e.preventDefault()
        setEditName(editName);
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
                            onClick={() =>removePlayer(id)}
                            style={{opacity:0.6,cursor:'pointer',marginLeft:'6px'}}
                        />
                    </div>
                }
                    <Modal 
                    showModal={showModal} setShowModal={setShowModal}
                    >
                        <form className="edit__form" onSubmit={handleModifyPlayer}>
                            <h3>Modify player data</h3>
                            <input 
                            className="input__edit"
                            placeholder="first name"
                            type="text"
                            value={editName}
                            onChange={(e) =>setEditName(e.currentTarget.value)}
                            autoFocus
                            />
                             <input 
                            className="input__edit"
                            placeholder="last name"
                            type="text"
                            value={lastName}
                            autoFocus
                            />
                            <button >
                                Confirm
                            </button>
                        </form>
                        <button onClick={() =>setShowModal(false)}>Close</button>
                    </Modal>

            </article>    
    )
}
