require('dotenv').config();

const mockData = require('./jobster (1).json'); //about to be passed to db
const Job = require('./models/Job');
const connectDB = require('./db/connect'); //connecting db

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Job.create(mockData);
    console.log('Success!!!');
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
