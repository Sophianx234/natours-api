const fs = require('fs')
const tours = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours.json`))

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