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


exports.createTours = (req,res)=>{
    
    res.status(201).send('Hey you just post to Damian')
}

exports.getTour = (req,res)=>{
    

    /* res.status(200).json({
        status: 'success',
        data:{
            tour:tour
        }
    }) */
}


