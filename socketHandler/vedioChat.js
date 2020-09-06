// const { findSocketId } = require('../sequelize/chat.service');
var users = [];
function videoChatHandler(io) {
    io.on('connect', socket => {
        console.log("user connected")
        socket.on('createChat',(data)=>{
            if(users.findIndex(e=>e.id==socket.id) == -1){
                users.push({
                    id:socket.id,
                    name:data.username,
                    room:data.room
                })
                socket.join(data.room)
                socket.to(data.room).emit('join',{data:data.username,createdAt:new Date().toString()})
            }
        })
        socket.on('send',data=>{
            if(users.findIndex(x=>x.id==socket.id) != -1){
                let [{room}] = users.filter(e=>e.id==socket.id)
                socket.to(room).emit('recieve',{data:data,createdAt:new Date().toString()})    
            }
            else{
                socket.emit('recieve',{error:'something went wrong',createdAt:new Date().toString()})
            }
        })
        socket.on("call-user", data => {
            if(users.findIndex(x=>x.id==socket.id) != -1){
                let [{room}] = users.filter(e=>e.id==socket.id)
                socket.to(room).emit("call-made", {
                    offer: data.offer
                  }); 
            }
            else{
                socket.emit('recieve',{error:'something went wrong',createdAt:new Date().toString()})
            }
        });
        
socket.on("make-answer", data => {
    if(users.findIndex(x=>x.id==socket.id) != -1){
        let [{room}] = users.filter(e=>e.id==socket.id)
        socket.to(room).emit("answer-made", {
            answer: data.answer
          });
        }
    else{
        socket.emit('recieve',{error:'something went wrong',createdAt:new Date().toString()})
    }
  }); 
       socket.on("disconnect", () => {
       console.log("user disconnected");
    });
}); 
}

module.exports = {
    videoChatHandler
}