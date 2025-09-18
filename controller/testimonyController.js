const testimonials = require('../model/testimonyModel')


//add testimony

exports.addTestimony = async (req, res) => {
    console.log("inside testimony");

    const { name, email, message } = req.body
    try {
        const newTestimony = new testimonials({
            name, email, message
        })
        await newTestimony.save()
        res.status(200).json(newTestimony)

    } catch (error) {
        res.status(402).json(error)
    }
}


exports.getTestimony = async (req, res) => {
    console.log("inside get testimony");
    try {
        const alltestimonies = await testimonials.find()
    
        res.status(200).json(alltestimonies)

    } catch (error) {
        res.status(402).json(error)
    }
}