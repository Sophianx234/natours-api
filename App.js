const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours.json`, 'utf-8')
);

app.get('/api/v1/tours', (req, res) => {
  res.json({
    status: 'success',
    data: {
        tours: tours
    }
  });
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
/* app.get('/',(req,res)=>{
    res.status(200).json({
    message: 'Hello from the server ',
    App: 'Natours'
    })
})

app.post('/',(req,res)=>{
    res.send('You can post to this end ')

}) */
