import React from 'react'

const ProgressBar = (props) => {
    const{colorFilter,team, name} = props
    const completed ={
        0:'0%',
        1:'20%',
        2:'40%',
        3:'60%',
        4:'80%',
        5:'100%'
    }
    const align = team.length == 0 ? 'auto' : '0'

    return (
        <article className='team'>
        <h4>Team '{name}' - {team.length}</h4>
        <div className='container__bar'>
            <div className='filter__bar' style={{backgroundColor:`${colorFilter}`,width:`${completed[team.length]}`, margin:`${align}`}}>
                <span className='label'>{completed[team.length]}</span>
            </div>
            
        </div>
        </article>
    )
}

export default ProgressBar
