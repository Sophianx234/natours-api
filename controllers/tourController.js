const mongoose = require('mongoose');
const Tour = require('./../models/tourModel')

exports.getAllTours = (req,res) =>{
    console.log(res.body)
    /* res.status(200).json({
        status: 'success',
        result: tours.length,
        data: {
            tours
        }
        
    }) */

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

exports.getTour = (req,res)=>{
    

    /* res.status(200).json({
        status: 'success',
        data:{
            tour:tour
        }
    }) */
}


