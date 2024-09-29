const express = require('express');
const fs = require('fs');
const app = express();
const tourRouter = require('./routes/toursRouter')

app.use('/api/v1/tours',tourRouter )





module.exports = app


