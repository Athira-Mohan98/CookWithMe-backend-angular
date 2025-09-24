const mongoose = require('mongoose')
const downloadSchema = new mongoose.Schema({

    id:{
        type:String,
        required:true
    },
    name:{
          type:String,
        required:true
    },
    cuisine:{
          type:String,
        required:true
    },
    image:{
          type:String,
        required:true
    },
    count:{
          type:String,
        required:true
    },
    userId:{
          type:String
    }
})
module.exports = mongoose.model('downloads',downloadSchema)