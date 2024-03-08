import express from 'express';
import 'dotenv/config'
import mongoose from 'mongoose';
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'



mongoose.connect(process.env.MONGO).then(() => {
  console.log('Connected to MongoDB!');
}).catch((err) => {
  console.log(err);
})



const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

app.use('/api/user', userRouter)
app.use('/api/auth', authRouter)