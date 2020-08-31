// const { findSocketId } = require('../sequelize/chat.service');
let users = [];
function chatHandler(io) {
    io.on('connect', socket => {
        io.emit('newMessage',"Welcome to my Chat App");
        socket.on('createChat',(data)=>{
            if(users.findIndex(e=>e.id==socket.id) == -1){
                users.push({
                    id:socket.id,
                    name:data.username,
                    room:data.room
                })
                socket.join(data.room)
                socket.to(data.room).emit('join',{name:data.username,createdAt:new Date().toString()})
            }
            socket.on('sendMessage',(data)=>{
                const {name,room} = users[users.findIndex(e=>e.id==socket.id)];
                socket.to(room).emit('sendMessage',{name:name,payload:data.payload})
            });
        });            
       socket.on("disconnect", () => {
        const {name,room} = users.splice(users.findIndex(e=>e.id==socket.id),1)[0];
        console.log("disconnect :-",users);
        socket.to(room).emit('destroy',{name:name})
        });
    }); 
}

module.exports = {
    chatHandler
}