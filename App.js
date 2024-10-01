const express = require('express');
const fs = require('fs');
const app = express();
const tourRouter = require('./routes/toursRouter')
const usersRouter = require('./routes/usersRouter')

app.use('/api/v1/tours',tourRouter )
app.use('/api/v1/users',usersRouter)





module.exports = app


