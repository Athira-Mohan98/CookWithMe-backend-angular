const users = require('../model/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

//to register

exports.register = async (req, res) => {
    console.log("inside register");
    
    const { userName, email, password } = req.body
    try {

        const existingUser = await users.findOne({ email })
        if (existingUser) {
            res.status(401).json("User already existing..please login...")
        } else {
            const encryptedPassword = await bcrypt.hash(password, 10)

            const newUser = new users({
                userName, email, password:encryptedPassword, role: "user", profilePic: ""
            })
            await newUser.save()
            res.status(200).json(newUser)
        }
    }
    catch (error) {
        res.status(401).json("error" + error)
    }
}

exports.login = async (req, res) => {
        console.log("inside login");
    const {email, password } = req.body
    try {

        const existingUser = await users.findOne({ email })
        if (existingUser) {

            let userPassword = await bcrypt.compare(password,existingUser.password)
            if(userPassword || password == existingUser.password){
                const token = jwt.sign({userId:existingUser._id},process.env.jwtPassword)
                res.status(200).json({user:existingUser,token})
            }
           
        } else {
           
            res.status(402).json("password mismatch")
        }
    }
    catch (error) {
        res.status(401).json("error" + error)
    }
}