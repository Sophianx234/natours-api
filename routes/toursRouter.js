const express = require('express')
const tourController = require('../controllers/tourController')
const router = express.Router()




const{getAllTours, createTours} = tourController

router.route('/').get(getAllTours).post(createTours)


module.exports = router