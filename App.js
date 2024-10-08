const express = require('express');
const fs = require('fs');
const dotenv = require('dotenv')
const app = express();
const tourRouter = require('./routes/toursRouter')
const morgan = require('morgan');
const usersRouter = require('./routes/usersRouter');
if(process.env.NODE_ENV === 'development'){
    app.use(morgan("dev"))

}

app.use(express.json())
app.use(express.static(`${__dirname}/public`))
app.use('/api/v1/tours',tourRouter )
app.use('/api/v1/users',usersRouter)
app.all('*',(req,res,next)=>{
   const err = new Error(`Can't find ${req.originalUrl} on this server`)
   err.status = 'fail';
   err.statusCode = 404
    next(err);
})
app.use((err,req,res,next)=>{
    err.statusCode = err.statusCode || 500;
    err.status = err.status||'fail'
    res.status(err.statusCode).json({
        status: err.status,
        message: err.message
    })
    next()
})





module.exports = app


