const fs = require('fs')
const tours = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`))

exports.getAllTours = (req,res) =>{
    console.log(res.body)
    res.status(200).json({
        status: 'success',
        result: tours.length,
        data: {
            tours
        }
        
    })

}


exports.createTours = (req,res)=>{
    
    res.status(201).send('Hey you just post to Damian')
}

exports.getTour = (req,res)=>{
    const id = +req.params.id
    console.log(id)
    console.log()
    const tour = tours.find(el=>el.id === id);
    if(!tour) return res.status(404).json({
        status: 'failed',
        message: 'could not find tour'
    })


    res.status(200).json({
        status: 'success',
        data:{
            tour:tour
        }
    })
}