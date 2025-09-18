require('dotenv').config()
const mongoose = require('mongoose')

const connectionString =   process.env.connectionString 
mongoose.connect(connectionString).then(res=>{
    console.log("Mongodb connection established with server...");
    
}).catch(err=>{
    console.log("Mongodb connection "+ err);
    
})