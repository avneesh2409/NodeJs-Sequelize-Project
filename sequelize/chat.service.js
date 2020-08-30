const { Chat } = require('../models');


async function getAll(socketId) {
	const chat = await Chat.findAll({
        where:{
            socketid:socketId
        }
    });
    console.log("result :-",chat)
    return chat;
};
const findSocketId = (username) =>{
    let res=null;
    Chat.findAll({
        where:{
            username:username
        }
    }).then((value)=>{
        res = value;
    })
    return res;
}
const createChat = async (username,socketId) =>{
    const ans = await Chat.create({
        username:username,
        socketid:socketId
    })
}
const destroyChat = async (socketId) =>{
    await Chat.destroy({
        where:{
            socketid:socketId
        }
    })
}
module.exports = {
    getAll,
    findSocketId,
    createChat,
    destroyChat
}