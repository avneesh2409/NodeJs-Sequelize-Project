import React, { useState, useEffect } from 'react'
import socketIOClient from "socket.io-client";
import Video from './video';
// import { setSSR } from '@fluentui/react';

const ENDPOINT = "http://127.0.0.1:9000";
var socket = null;
function Myvedioroute({match,history}) {
    const [text,setText]  = useState('')
    const [data,setData] = useState([])
    useEffect(()=>{
        socket = socketIOClient(ENDPOINT);
        let {name,room} = match.params
        socket.emit('createChat',{username:name,room:room});
       return ()=>socket.disconnect()
    },[])
    useEffect(()=>{
        socket.on('join',data=>{
            setData(s=>([...s,data]))
        })
        socket.on('recieve',data=>{
            if(data.error){
                socket.disconnect()
                history.push('/home')
            }
            setData(s=>([...s,data]))
        })
    },[])
    const submitHandler = (e) =>{
        e.preventDefault()
        socket.emit('send',text);
        setText('')
    }
    return (
        <>
        {
            (socket)?<Video socket={socket}/>:null
        }
        
           
           <h1>Welcome to vedio chat</h1> 
           <form onSubmit={submitHandler}>
                <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
                <button>submit</button>
           </form>
           
           output from server
           {
               data && data.map(e=>{
                 let {data,createdAt} = e
                 return (
                    <>
                    <h1>{data}</h1><small>{createdAt}</small>
                   </>
                 )
            })
        }
        </>
    )
}


export default Myvedioroute
