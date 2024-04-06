import dotenv from 'dotenv';
import express from 'express';
import cookieParser from 'cookie-parser';
import { dbConnection } from './database/dbConnection.js';
import userRoutes from './routes/user.route.js';
const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cookieParser());

app.use('/api/user', userRoutes);

dbConnection();
app.listen(process.env.PORT, () => {
    console.log('Server listening on port 3000')
})