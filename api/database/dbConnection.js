import mongoose from 'mongoose';


export const dbConnection = async() => {
    await mongoose.connect(process.env.DB_URI, {
        dbName:"MERN-BLOG"
    }).then(()=> console.log("Connected to database successfully!!"))
    .catch((err) => console.log("Cannot connect to database", err))
}