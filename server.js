const app = require('./App')
const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config({path:'./config.env'})

const DB = process.env.DATABASE_LOCAL;
console.log(DB)
mongoose.connect(DB,{
  useCreateIndex: true,
  useFindAndModify: true,
  useNewUrlParser: true,

}).then(con=>{
  console.log(con.connections)
  console.log('DB connected successfully')
})

const tourSchema = new mongoose.Schema({
  name: {
    type: Number, required: [true, 'a tour must have a name', unique: true]
  },
  rating: {type: Number, required: true , default: 4.5},
  price: {
    type: Number,
  }

});

const Tours = mongoose.model('Tour',tourSchema) 

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}`);
  });