const mongoose = require('mongoose');
const dotenv = require('dotenv');
const fs = require('fs');
const Tour = require(`${__dirname}/../../models/tourModel`);
dotenv.config({ path: './config.env' });
const tours = JSON.parse(fs.readFileSync(`${__dirname}/tours-simple.json`));
const DB = process.env.DATABASE_LOCAL;
mongoose.connect(DB, {
  useCreateIndex: true,
  useFindAndModify: true,
  useNewUrlParser: true,
});

const importData = async () => {
  try {
    await Tour.create(tours);
    console.log('Data imported successfully');
  } catch (err) {
    console.log(err);
  }
};

const deleteData = async () => {
  try {
    await Tour.deleteMany();
    console.log('Data Deleted from DB');
  } catch (err) {
    console.log(err);
  }
};

if (process.argv[2] === '--import') {
  importData();
}

if (process.argv[2] === '--delete') {
  deleteData();
}
