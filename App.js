const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours.json`, 'utf-8')
);
app.use(express.json())

app.get('/api/v1/tours', (req, res) => {
  res.json({
    status: 'success',
    data: {
        tours: tours
    }
  });
});
app.get('/api/v1/tours/:id', (req, res) => {
    console.log(req.params)
    const id = +req.params.id
    if(id>tours.length) return res.status(404).json({
        status: 'failed',
        message: 'invalid id'
    })
    const tour = tours.find(tour=>tour.id === id)
    console.log(tour)
    res.status(200).json({
        status: 'success',
        data :{
            tour: tour
        }
    })
  
});

app.post('/api/v1/tours',(req,res)=>{
    const newId = tours.length +1
    const newTour = Object.assign({id: newId},req.body)
    tours.push(newTour)
    fs.writeFile(`${__dirname}/dev-data/data/tours.json`,JSON.stringify(tours),err=>{
        res.status(201).json({
            status: 'success',
            data:{

                tour: newTour
            } 
        })
    })
})

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
