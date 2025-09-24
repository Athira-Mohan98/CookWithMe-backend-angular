const express = require ('express')

const recipieController = require('../controller/recipieController')
const userController = require('../controller/userController')
const testmonyController = require('../controller/testimonyController')
const jwtMiddleware=require('../Middleware/jwtMiddleware')
const SavedRecipieController = require('../controller/savedRecipieController')
const downloadedRecipieController = require('../controller/downloadRecipieController')
const router = new express.Router()

router.get('/api/allRecipies',recipieController.getAllRecipies)
router.post('/api/register',userController.register)
router.post('/api/login',userController.login)
router.post('/api/addTestimony',testmonyController.addTestimony)
router.get('/api/getTestimony',testmonyController.getTestimony)
router.get('/api/getArecipie/:id',jwtMiddleware,recipieController.getARecipie)
router.get('/api/getRelatedrecipies',jwtMiddleware,recipieController.getRelatedRecipie)
router.post('/api/savedrecipies/:id',jwtMiddleware,SavedRecipieController.AddsavedRecipie)
router.get('/api/getsavedrecipies',jwtMiddleware,SavedRecipieController.getAllSavedRecipie)
router.delete('/api/deleterecipie/:id',jwtMiddleware,SavedRecipieController.deletesavedRecipie)
router.post('/api/downloadedRecipies/:id',jwtMiddleware,downloadedRecipieController.AdddownloadRecipie)
router.get('/api/getdownloadedRecipies',jwtMiddleware,downloadedRecipieController.getdownloadedRecipie)


module.exports = router