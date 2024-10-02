const mongoose = require('mongoose');
const Tour = require('./../models/tourModel')

exports.getAllTours = async(req,res) =>{
    const tours = await Tour.find()
    res.status(200).json({
        status: 'success',
        result: tours.length,
        data: {
            tours
        }
        
    }) 

}


exports.createTours = async (req,res)=>{
    try{

        const newTour = await Tour.create(req.body)
        res.status(201).json({
            status: 'failed',
            data: {
                tour: newTour
            }
        })
    }catch(err){
        res.status(400).json({
            status: 'failed',
            message: err
        })
    }
}

exports.getTour = async(req,res)=>{
    const id = req.params.id
    console.log(id)
    
    const tour = await Tour.findById(id)
    res.status(200).json({
        status: 'success',
        data:{
            tour
        }
    }) 
}


