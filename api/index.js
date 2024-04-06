import dotenv from 'dotenv';
import express from 'express';
import cookieParser from 'cookie-parser';
import { dbConnection } from './database/dbConnection.js';
const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cookieParser());

dbConnection();
app.listen(process.env.PORT, () => {
    console.log('Server listening on port 3000')
})