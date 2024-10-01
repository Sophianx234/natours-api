const express = require('express');
const fs = require('fs');
const app = express();
const tourRouter = require('./routes/toursRouter')
const usersRouter = require('./routes/usersRouter');
const morgan = require('morgan');
app.use(morgan("dev"))
app.use(express.json())
app.use(express.static(`${__dirname}/public`))
app.use('/api/v1/tours',tourRouter )
app.use('/api/v1/users',usersRouter)





module.exports = app


