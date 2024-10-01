const express = require('express')
const tourController = require('../controllers/tourController')
const router = express.Router()




const{getAllTours, createTours,getTour} = tourController

router.route('/').get(getAllTours).post(createTours)
router.route('/:id').get(getTour)


module.exports = router