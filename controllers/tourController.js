const mongoose = require('mongoose');
const Tour = require('./../models/tourModel')

exports.getAllTours = async(req,res) =>{
    const queryObj = {...req.query}
    const excludedFields = ['page','sort','limit','fields']
    excludedFields.forEach(el=> delete queryObj[el]);

    let queryStr = JSON.stringify(queryObj)
    queryStr  = queryStr.replace(/\b(lte|lt|gte|gt)\b/g, match=> `$${match}`)
     let query =  Tour.find(JSON.parse(queryStr))
     if(req.query.sort){
        const sortBy = req.query.sort.split(',').join(' ')
        query = query.sort(sortBy)
     }else{
        query = query.sort('-createdAt')
     }
    const tours = await query

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

exports.updateTour = async(req,res)=>{
const tour = await Tour.findByIdAndUpdate(req.params.id,req.body,{new:true, runValidators: true})

res.status(201).json({
    status: 'success',
    data: {
        tour
    }
})
}

exports.deleteTour = async(req,res)=>{
    const tour = await Tour.findByIdAndDelete(req.params.id)
    res.json({
        status: 'success',
        data: {
            tour: null
        }
    })
}


