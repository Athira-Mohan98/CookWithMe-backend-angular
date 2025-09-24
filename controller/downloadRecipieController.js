const downloads = require('../model/downloadRecipie')


exports.AdddownloadRecipie = async (req, res) => {
    const { id } = req.params
    const { userId } = req.payload
    const { name, cuisine, image } = req.body

    try {

        const existingRecipie = await downloads.findById(id )
        if (existingRecipie) {
            existingRecipie.count++
          await existingRecipie.save()
            res.status(200).json(existingRecipie)

        } else {
            const newdownload = new downloads({
                id,
                name,
                cuisine,
                image,
                count: 1,
                userId
            })
            await newdownload.save()
            res.status(200).json(newdownload)
        }


    } catch (error) {
        console.log("error" + error);

    }


}

exports.getdownloadedRecipie = async (req, res) => {

    console.log("Inside get saved Recipie");
    try {
        const alldownloadedRecipie = await downloads.find()
        res.status(200).json(alldownloadedRecipie)
    }
    catch (error) {
        res.status(401).json("error is" + error)
    }
}