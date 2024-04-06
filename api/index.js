import dotenv from 'dotenv';
import express from 'express';
import { dbConnection } from './database/dbConnection.js';
const app = express();
dotenv.config();



dbConnection();
app.listen(process.env.PORT, () => {
    console.log('Server listening on port 3000')
})