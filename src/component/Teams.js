import React, {useContext} from 'react'
import ProgressBar from './ProgressBar'
import { MyContext } from '../context';

const Teams = () => {
    const[state, dispatch] = useContext(MyContext);
    const{players} = state;
    console.log('Teams component:',players)

    const filterTeams = (selectedTeam) =>{
        const newTeam = players.filter((player) => player.team === selectedTeam)
        return newTeam
    }

    return (
        <div className='teams'>
            <h2>Teams *</h2>
            <div className='progress__container'>
                <ProgressBar colorFilter='#750f3f' team={filterTeams('reds')} name='Reds'/>
                <ProgressBar colorFilter='#1b1d8a' team={filterTeams('blues')} name='Blues'/>
            </div>
            <p style={{fontSize:8, marginTop: '0.5rem'}}>* max 5 players</p>
        </div>
    )
}

export default Teams
