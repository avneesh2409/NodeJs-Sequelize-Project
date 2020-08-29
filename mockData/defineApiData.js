const path = require('path');
const fs = require('fs');
const request = require('request');
let filepath = path.join(__dirname,"mydata.json");
const fileData = require(filepath);

const getHandler = (req,res) =>{
   //let url = "https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=5sBE3rGui0v6ASwNk3aW6cO7p9tHwdvU";
    let url = "https://jsonplaceholder.typicode.com/todos";
    let filepath = path.join(__dirname,"mydata.json");
        request.get(url,(error, response, body) => {
            if(error) {
                return console.dir(error);
            }
            fs.writeFile(filepath,body,(err)=>{
                if(err){
                    res.json({status:false,message:'error'})
                }
            });
            res.json({status:true,data:JSON.parse(body)})
        });
}
const postHandler = (req,res) =>{
    let time = Date.now();
    let filepath = path.join(__dirname,'myQuestion',`${time}_questions.json`);
    fs.writeFile(filepath,JSON.stringify(req.body),'utf8',(err)=>{
        if(err){
            res.json({status:false,message:'error'})
        }
    });
    res.json({status:true})
}

const deleteHandler = async (req,res) =>{
        const {results} = await fileData;
        res.json({status:true,data:results})
}

const updateHandler = (req,res) =>{
    res.send("got the update request");
}

module.exports = {
    getHandler,
    postHandler,
    deleteHandler,
    updateHandler
}