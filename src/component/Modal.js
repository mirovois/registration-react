import React, {useRef} from 'react'

function Modal({ children, showModal, setShowModal }) {
    const modalRef = useRef();

    const closeModal = (e) => {
        if (e.target === modalRef.current) {
            setShowModal(true)
        }
    };
    return (
        showModal &&
        <div className="modal" ref={modalRef} onClick={closeModal}>
            <div className="container" >
                {children}
            </div>
        </div>
    );
}

export default Modal
