const { findSocketId } = require('../sequelize/chat.service');

function chatHandler(socket) {
    socket.on('send',(data)=>{
        let res = findSocketId(data.reciever)
        console.log(res)
        socket.to(res).emit('recieve',data.payload)
    })
}

module.exports = {
    chatHandler
}