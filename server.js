const app = require('./App')
const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config({path:'./config.env'})

const DB = process.env.DATABASE_LOCAL;

mongoose.connect(DB,{
  useCreateIndex: true,
  useFindAndModify: true,
  useNewUrlParser: true,

}).then(con=>{
  console.log(con.connections)
  console.log('DB connected successfully')
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}`);
  });