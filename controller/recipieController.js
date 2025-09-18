const recipies = require('../model/recipieModel')

//get all receipies from DB

exports. getAllRecipies = async(req,res)=>{
    console.log("Inside getAllRecipies");
    
    try { 
        const allRecipies = await recipies.find()
        res.status(200).json(allRecipies)
    }
     catch (error)
      {
        res.status(401).json(error)
    }
}



//get a receipie from DB

exports.getARecipie = async(req,res)=>{

    console.log("Inside get a Recipie");
       const {id} = req.params
    try { 
        const ARecipie = await recipies.findById(id)
        res.status(200).json(ARecipie)
    }
     catch (error)
      {
        res.status(401).json("error is" +error)
    }
}