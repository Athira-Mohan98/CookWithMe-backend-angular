//1 load .env file
require('dotenv').config()

//2 import express
const express = require('express') 

//6 import cors
const cors = require('cors')

// const db= require('./DB/connection')
require('./config/db')

// const router = require('./Routes/router')
const router = require('./routes/Router')

//3 create an app using expres
const cookwithmeserver = express()

//7 use
cookwithmeserver.use(cors())
cookwithmeserver.use(express.json())
// recipeWorldServer.use(router)
cookwithmeserver.use(router)

//4 port creation
const PORT = 3000 || process.env.PORT
//5 run
cookwithmeserver.listen(PORT,()=>{
    console.log("cookwithmeserver running on the port "+PORT);
    
})

cookwithmeserver.get('/',(req,res)=>{
    res.send("Welcome to cookwithmeserver")
})