import asyncHandler from 'express-async-handler';
import {errorHandler} from '../utils/error.js';
import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';


export const signup = asyncHandler(async(req, res, next) => {
    const {username, email, password} = req.body;
    if(!username || !email || !password || 
    username === '' || email === '' || password === '') {
        next(errorHandler(400, 'All fields are required!'))
    }
    const hashedPassword = bcryptjs.hashSync(password, 10);

    const newUser = new User({
        username, 
        email, 
        password : hashedPassword
    });

    try {
        await newUser.save();
        res.json("Signup Successfull")
    } catch(error) {
        next(error);
    }
})