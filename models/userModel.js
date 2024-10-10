const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true,'username is required'],
        unique: [true, 'name must be unique']
    },
    email: {
        type: String,
        required:[true, 'email is required'],
        lowercase: true,
        unique: [true, 'email must be unique']
    },
    photo:String,
    password: {
        type: String,
        required: [true,'must enter password'],
        minLength:[8,'password must contain at least 8 characters']
    },
    passwordConfirm:{
        type: String,
        required:[true,'Please confirm your password']
    }
})

const User = mongoose.model('User',userSchema);

module.exports = User