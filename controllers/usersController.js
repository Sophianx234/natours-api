const fs = require('fs')
const User = require('./../models/userModel')


exports.getAllUsers = async(req,res)=>{
    const users = await User.find()
    res.status(200).json({

        status: 'success',
        results: users.length,
        data: {
            users
            
        }
    })


}
exports.signup = async(req,res)=>{

    const newUser = await User.create(req.body)
    res.status(200).json({
        status: 'success',
        data:{
            newUser
        }
    })
}

exports.getUser = async(req,res)=>{
    const id = req.params.id
    const user = await User.findById(id)
    res.status(200).json({
        status: 'success',
        data:{
            user
        }
    })
}

exports.updateUser = async(req,res)=>{
    const user = await User.findByIdAndUpdate(req.params.id,req.body)
    res.status(200).json({
        status: 'success',
        message: 'Successfully updated user'
    })
}
exports.deleteUser = async(req,res)=>{
    const user = await User.findByIdAndDelete(req.params.id)
    res.status(200).json({
        status: 'success',
        data: null
    })
}