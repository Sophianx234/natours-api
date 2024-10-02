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





module.exports = app


