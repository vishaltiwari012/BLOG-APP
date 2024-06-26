import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import { dbConnection } from './database/dbConnection.js';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import postRoutes from './routes/post.route.js';
import commentRoutes from './routes/comment.route.js';
const app = express();
dotenv.config();

const __dirname = path.resolve();

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cookieParser());

app.use('/api/user', userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/post", postRoutes);
app.use('/api/comment', commentRoutes);

app.use(express.static(path.join(__dirname, '/client/dist')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

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