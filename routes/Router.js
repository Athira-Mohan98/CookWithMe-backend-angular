const express = require ('express')

const recipieController = require('../controller/recipieController')
const userController = require('../controller/userController')
const testmonyController = require('../controller/testimonyController')
const jwtMiddleware=require('../Middleware/jwtMiddleware')
const router = new express.Router()

router.get('/api/allRecipies',recipieController.getAllRecipies)
router.post('/api/register',userController.register)
router.post('/api/login',userController.login)
router.post('/api/addTestimony',testmonyController.addTestimony)
router.get('/api/getTestimony',testmonyController.getTestimony)
router.get('/api/getArecipie/:id',jwtMiddleware,recipieController.getARecipie)





module.exports = router