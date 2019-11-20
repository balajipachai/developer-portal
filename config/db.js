const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log('Connection to MongoDB successful');
  } catch (error) {
    console.error('error in connectDB: ', error);
    //Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
