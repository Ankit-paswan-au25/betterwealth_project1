const mongoose=require('mongoose')
const dotenv = require('dotenv');
const express=require('express');

const PORT = process.env.PORT||3000;

const usrproroute=require('./route/routes')
const app=express();
dotenv.config({path:'./config.env'});
const DB=process.env.DATABASE.replace('<PASSWORD>',process.env.DATABASE_PASSWORD);
mongoose.connect(DB,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false
}).then(con=>{
    console.log("Database connected sucessfully")
})
app.use('/',usrproroute)
app.listen(PORT,()=>{
    console.log("server is active")
});
