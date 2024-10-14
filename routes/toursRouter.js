const express = require('express');
const tourController = require('../controllers/tourController');
const router = express.Router();

const { getAllTours, createTours,protect, getTour, updateTour, deleteTour } = tourController;

router.route('/').get(protect,getAllTours).post(createTours);
router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router;
