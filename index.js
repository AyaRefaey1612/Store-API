require('dotenv').config()
require('express-async-errors')
const express=require("express");
const app=express();

const connectDb=require('./db/connect.js');

const router=require('./routes/products.js');

const errorHandlerMiddleware=require('./middleware/error-handler');
const notFound=require('./middleware/not-found');

const port=process.env.port || 3000

app.use(express.json());

app.get('/',(req, res)=>{
    res.send('<h1>store api</h1><a href=/api/v1/products>products route</a>');
})

app.use('/api/v1/products',router);

app.use(errorHandlerMiddleware);
app.use(notFound);




const start=async()=>{
 try{
  await connectDb(process.env.MONGO_URI)
  app.listen(port,console.log(`Server Is listening Port ${port}... `))
 }catch(error){
  console.log(error)
 }
 }

 start()