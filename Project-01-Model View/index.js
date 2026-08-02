const express = require("express");
const app = express();
const fs =require("fs");
const PORT = 8000;
const{logRequest}= require("./middlewares");
const {connectMongoDb}= require("./connection")
// const users = require("./MOCK_DATA.json");
const mongoose=require("mongoose");
const userRouter=require("./routes/user")
connectMongoDb("mongodb://127.0.0.1:27017/firstdb").then(()=> console.log("Connected")).catch((err)=> console.log("error",err));
app.use(express.urlencoded({extended:false}));
app.use(logRequest("log.txt"));
app.use("/user",userRouter);
app.listen(PORT, () => console.log("Server started"));
