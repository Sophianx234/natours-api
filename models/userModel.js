const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

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
        required:[true,'Please confirm your password'],
        validate: {
            validator: function(el){
                return this.password === el

            },
            message: 'password does not match'
        }
    }
})
userSchema.pre('save', async function(next){
    if(!this.isModified('password') ) return next()
    this.password = await bcrypt.hash('password', 12)
    this.passwordConfirm = undefined
    next()
})



const User = mongoose.model('User',userSchema);

module.exports = User