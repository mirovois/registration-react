import React from 'react'

const Input = ({heading, value,setValue}) => {
    return (
        <div className="input__block">
            <h3>{heading}</h3>
            <input 
                    type="text"
                    value={value}
                    onChange={(e) =>setValue(e.target.value)}
                    placeholder={`Enter your ${heading}`}
                    autoFocus
                />
            
        </div>
    )
}

export default Input
