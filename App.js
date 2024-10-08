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
    res.status(404).json({
        status: 'fail',
        message: `Can't find ${req.originalUrl} on this server`
    })
    next();
})





module.exports = app


