import dotenv from 'dotenv';
import express from 'express';
import cookieParser from 'cookie-parser';
import { dbConnection } from './database/dbConnection.js';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cookieParser());

app.use('/api/user', userRoutes);
app.use("/api/auth", authRoutes);

/**************************** */

dbConnection();
app.use((err, req ,res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success:false,
        statusCode, 
        message
    })
});

/**************************** */

app.listen(process.env.PORT, () => {
    console.log('Server listening on port 3000')
})