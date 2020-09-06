import React, { useState, useEffect } from 'react'

import styles from '../css/style.module.css';
import { VEDIOCHAT } from '../store/constants';
// import OperationsTable from './child/detaiListDemo';

const Home = ({history}) => {
    const [state,setState] = useState({name:'',room:''});

    const clickHandler = () =>{
        history.push(`/${VEDIOCHAT}/${state.name}/${state.room}`)
    }
    return (
        <div className={styles.homeWrapper}>
            <h1>we are in home page</h1>
            <input type="text" value={state.username} placeholder="name....." onChange={(e)=>setState({...state,name:e.target.value})}/>
            <input type="text" value={state.room} placeholder="room......" onChange={(e)=>setState({...state,room:e.target.value})} />
            <button onClick={()=>clickHandler()} >submit</button>
        </div>
    )
}

export default Home;
