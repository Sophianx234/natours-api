const mongoose = require('mongoose');
const Tour = require('./../models/tourModel');
const APIFeatures = require('./../utils/apiFeatures')
const catchAsync = require(`./../utils/catchAsync`)


exports.getAllTours = catchAsync(async (req, res,next) => {
  const features = new APIFeatures(Tour.find(), req.query).filter().sort().limitFields().paginate();
  const tours = await features.query;

  res.status(200).json({
    status: 'success',
    result: tours.length,
    data: {
      tours,
    }
  });
  next()
});

exports.createTours = catchAsync(async (req, res,next)=> {
    const newTour = await Tour.create(req.body);
    res.status(201).json({
      status: 'failed',
      data: {
        tour: newTour,
      },
    });
    next()
  
});

exports.getTour = catchAsync(async (req, res,next) => {
  const id = req.params.id;
  console.log(id);

  const tour = await Tour.findById(id);
  res.status(200).json({
    status: 'success',
    data: {
      tour,
    },
  })
  next()
});

exports.updateTour = catchAsync(async (req, res,next) => {
  const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(201).json({
    status: 'success',
    data: {
      tour,
    },
  });
  next()
});

exports.deleteTour = catchAsync(async (req, res,next) => {
  const tour = await Tour.findByIdAndDelete(req.params.id);
  res.json({
    status: 'success',
    data: {
      tour: null,
    },
  });
  next()
});
