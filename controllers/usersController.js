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
exports.createUser = async(req,res)=>{

    const user = await User.create(req.body)
    res.status(200).json({
        status: 'success',
        data:{
            user
        }
    })
}