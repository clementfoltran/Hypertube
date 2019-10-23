import color from '../utils/color';
import mongoose from 'mongoose';

require('dotenv').config();
export const connectDb = async () => {
  try {
    color.colog('Starting server', 'green');
    mongoose.set('useFindAndModify', false);
    await mongoose.connect(`mongodb://public:${process.env.DB_PASSWORD}@hightube.cf/hypertube`, { useNewUrlParser: true, useUnifiedTopology: true });
    color.colog('Connect to db', 'green')
  } catch (err) {
    color.colog(`Failed to connect to MongoDB server: \n${err}`, 'red');
  }
}
