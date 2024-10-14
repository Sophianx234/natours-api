const fs = require('fs')
const User = require('./../models/userModel')
const jwt = require('jsonwebtoken')

exports.signToken = id=>{
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn: process.env.JWT_EXPIRES_IN})
}

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

    const newUser = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        passwordConfirm: req.body.passwordConfirm
    })
    const token =  this.signToken(newUser.__id) 
    res.status(200).json({
        status: 'success',
        token: token,
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


exports.login = async(req,res,next)=>{
    const {email,password} = req.body
    if(!email || !password){
        return  console.log('incorrect email or password')
    }
    const user = await User.findOne({email}).select('+password')
    console.log('user: ',user)
    const correct = await user.correctPassword(password,user.password)
    
    console.log(correct)
    if(!user || !(await user.correctPassword(password,user.password))){
        return res.json({
            status: 'fail'
        })

    }
    const token = this.signToken(user.__id);
    res.status(200).json({
        status:'success',
        token
    })
    next()
    
    

}
exports.protect = (req,res)=>{
    let token
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
         token = req.headers.authorization.split(' ')[1]
    }
    console.log(token)
    if(!token){
        return console.log('You are not logged in yet')
    }
}