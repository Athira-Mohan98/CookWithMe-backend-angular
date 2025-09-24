const mongoose = require('mongoose')
const SavedRecipieSchema = new mongoose.Schema({

recipieId:{
    type:String,
    required:true
},
name:{
     type:String,
    required:true
},
image:{
     type:String,
    required:true
},
userId:{
     type:String,
    required:true
}


})

module.exports = mongoose.model('savedRecipies',SavedRecipieSchema)