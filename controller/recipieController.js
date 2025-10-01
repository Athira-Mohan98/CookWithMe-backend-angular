
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

exports.getalldownloads = async (req, res) => {
    console.log("inside get all downloads");
    try {
        const alldownloads = await recipies.find()
    
        res.status(200).json(alldownloads)

    } catch (error) {
        res.status(402).json(error)
    }
}

//recipie add

exports.addRecipie=async(req,res)=>{
    console.log("inside add Recipie");
    const {name,ingredients,instructions,prepTimeMinutes,cookTimeMinutes,servings,difficulty,cuisine,caloriesPerServing,image,mealType}=req.body

    try {
        
        const existingRecipie = await recipies.findOne({name})
        if(existingRecipie){
             res.status(402).json("Recipie already existing")
        }else{
            const newRecipie = new recipies({
                name,ingredients,instructions,prepTimeMinutes,cookTimeMinutes,servings,difficulty,cuisine,caloriesPerServing,image,mealType
            })
            await newRecipie.save()
              res.status(200).json(newRecipie)
        }
    } catch (error) {
          res.status(401).json("error is" +error)
    }
    
}


exports.updateRecipie=async(req,res)=>{
    console.log("inside update Recipie");
    const id = req.params
    const {name,ingredients,instructions,prepTimeMinutes,cookTimeMinutes,servings,difficulty,cuisine,caloriesPerServing,image,mealType}=req.body

    try {
        
        const updatedRecipie = await recipies.findByIdAndUpdate({id},{
                name,ingredients,instructions,prepTimeMinutes,cookTimeMinutes,servings,difficulty,cuisine,caloriesPerServing,image,mealType
            },{new:true})
            await updatedRecipie.save()
              res.status(200).json(updatedRecipie)
        }
     catch (error) {
          res.status(401).json("error is" +error)
    }
    
}


exports.DeleteRecipie=async(req,res)=>{
    console.log("inside update Recipie");
    const id = req.params

    try {
        
        const deleteRecipie = await recipies.findByIdAndDelete({_id:id})
              res.status(200).json(deleteRecipie)
        }
     catch (error) {
          res.status(401).json("error is" +error)
    }
    
}

