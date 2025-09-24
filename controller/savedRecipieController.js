
const SavedRecipie = require('../model/SavedRecipie')

exports.AddsavedRecipie = async (req, res) => {
    const { id } = req.params
    const { userId } = req.payload
    const { name, image } = req.body

    try {

        const existingRecipie = await SavedRecipie.findOne({ recipieId: id, userId })
        if (existingRecipie) {
            res.status(402).json("Already existing")
        } else {
            const newSaved = new SavedRecipie({
                recipieId: id,
                name,
                image,
                userId
            })
            await newSaved.save()
            res.status(200).json(newSaved)
        }


    } catch (error) {
        console.log("error" + error);

    }


}

exports.getAllSavedRecipie = async (req, res) => {

    console.log("Inside get saved Recipie");
    const { userId } = req.payload
    try {
        const ASavedRecipie = await SavedRecipie.find({ userId })
        res.status(200).json(ASavedRecipie)
    }
    catch (error) {
        res.status(401).json("error is" + error)
    }
}

exports.deletesavedRecipie = async (req, res) => {
 const { id } = req.params
    const { userId } = req.payload
    try {
        const deletedRecipie = await SavedRecipie.deleteOne({ _id: id, userId })
        res.status(200).json(deletedRecipie)
    } catch (error) {
        res.status(401).json("error" + error)
    }


}
