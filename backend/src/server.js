// const express=require('express')

import express from "express";
import {ENV} from "./config/env.js"
import "dotenv/config";
import { connectDB } from "./config/db.js";
import {clerkMiddleware} from "@clerk/express"
import { functions, inngest } from "./config/inngest.js";
import { serve } from "inngest/express";

const app=express();
app.use(express.json());//request to the body where hqve some data
app.use("/api/inngest", serve({ client: inngest, functions }));
app.use(clerkMiddleware());//req.auth will be avialble in the request object


app.get("/",(req,res)=>{
    res.send("Hello world");
});
// console.log("mongo uri:",ENV.MONGO_URI);
const startServer=async ()=>{
    try{
   await connectDB();
   if(ENV.NODE_ENV !=="projection"){
    app.listen(ENV.PORT,()=>{
        console.log("Server started on port:",ENV.PORT);

    });
   }
    }
    catch(error){
     console.error("Error starting server:",error);
     process.exit(1);//exit the process with a failure code
    }
};
startServer();

export default app;
