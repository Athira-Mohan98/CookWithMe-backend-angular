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

//get related receipie

exports.getRelatedRecipie = async(req,res)=>{

    console.log("Inside get related Recipie");
       const cuisine = req.query.cuisine
    try { 
        const RelatedRecipie = await recipies.find({cuisine})
        res.status(200).json(RelatedRecipie)
    }
     catch (error)
      {
        res.status(401).json("error is" +error)
    }
}