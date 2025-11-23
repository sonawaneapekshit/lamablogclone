import  mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log('mongodb is connected');
  } catch(err) {
    console.log('Error '+err);
  }

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

export default connectDB;
