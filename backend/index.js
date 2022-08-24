import express from 'express';
import mongoose from 'mongoose';
import ProductRouter from './routes/product-route';
import router from './routes/user-route';
import cors from 'cors';

const app = express();

// middle ware creation and are used to handling tasks in between
app.use(cors());

// this below middle ware is used to pass json data into the server and recevive json data
app.use(express.json());

// middle ware creation and are used to handling tasks in between
app.use('/api/user', router); // all the http requests will work in the /api/user
app.use('/api/product', ProductRouter); // all the http requests will work in the /api/user

mongoose
	.connect(
		'mongodb+srv://user:123@store.dwyp62s.mongodb.net/clothing_store_mern?retryWrites=true&w=majority'
	)
	.then(() => {
		app.listen(5000);
	})
	.then(() =>
		console.log('Connected to the Database! Listening to the LocalHost 5000')
	)
	.catch((err) => console.log(err));
