import express from 'express';
import mongoose from 'mongoose';
import { userController } from './Controllers/user.controller.js';
// import jwt from 'jsonwebtoken';
import { productController } from './product/product.controller.js';
import cors from 'cors';
import dbConnect from './db.connection.js';

//backend app
const app = express();

app.use(express.json());
app.use(cors());

//db connect
dbConnect();

//register routes or controller
app.use(userController);
app.use(productController);

//network port
const PORT = 8000;   

app.listen(PORT, () =>{
    console.log(`App on listening on port ${PORT}`)
});

