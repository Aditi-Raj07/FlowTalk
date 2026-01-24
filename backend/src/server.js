// const express=require('express')

import express from "express";
import {ENV} from "./config/env.js"
import "dotenv/config";

const app=express();


app.get("/",(req,res)=>{
    res.send("Hello world");
});
console.log("mongo uri:",ENV.MONGO_URI);
app.listen(ENV.PORT,()=>console.log("server is started",ENV.PORT));
