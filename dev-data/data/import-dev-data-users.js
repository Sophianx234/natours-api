const mongoose = require('mongoose');
const dotenv = require('dotenv');
const fs = require('fs');
const User = require('./../../models/userModel')

dotenv.config({path:'./config.env'})
const usersJson = JSON.parse(fs.readFileSync(`${__dirname}/users.json`))
const DB = process.env.DATABASE_LOCAL
mongoose.connect(DB,{
    useNewUrlParser:true,
    useFindAndModify:true,
    useUnifiedTopology:true,
    useCreateIndex: true
})

const importData = async()=>{
    try{

        await User.create(usersJson)
        console.log('file imported successfully')
    }catch(err){
        console.log(err)
    }
}

const deleteData = async()=>{
    try{
        await User.deleteMany()
        console.log('Data deleted successfully')
        exit
    }catch(err){
        console.log(err)
    }
}

if(process.argv[2]==='--import'){
    importData()
}
else if(process.argv[2]==='--delete'){
    deleteData()
}