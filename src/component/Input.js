import React from 'react'

const Input = ({heading, value,name,handleInputChange,id}) => {
    return (
        <div className="input__block">
            <h3>{heading}</h3>
            <input 
                    className="input__reg"
                    type="text"
                    value={value}
                    onChange={handleInputChange}
                    placeholder={`Enter your ${heading}`}
                    name={name}
                    autoFocus
                    
                />          
        </div>
    )
}

export default Input
