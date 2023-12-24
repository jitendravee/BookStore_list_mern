import express, { response } from "express";
import { PORT, MONGO_URL } from "./config.js";
import mongoose from "mongoose";
import { Book } from './models/bookModels.js';
import booksRoute from './routes/booksRoutes.js';
import cors from 'cors';
const app = express()
app.use(express.json())

app.use(cors());

// app.use(cors({
//     origin:'https://localhost:3000',
//     methods:['GET','POST','PUT','DELETE'],
//     allowedHeaders:["Content-Type"],
// }))



app.use('/books', booksRoute);





mongoose.connect(MONGO_URL).then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
        console.log(`server started on port ${PORT}`);
    })
}).catch((err) => {
    console.log("error in mongoose");
})





