const express = require('express')
const router = express.Router()

const storeController = require('../app/controllers/StoreController')

router.get('/Product/laptop', storeController.Productlaptop)
router.get('/Trash/laptop', storeController.Trashlaptop)


module.exports = router