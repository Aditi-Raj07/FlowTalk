import mongoose from "mongoose";

const userSchema=new mongoose.Schema(
    {
        email:{
            type:String,//here String is use for the constructor
            required:true,
            unique:true,
        },
        name:{
            type:String,
            unique:true,
        },
        image:{
            type:string,
            required:true,
        },
      clerkId:{
        type:String,
        required:true,
        unique:true,
      }  
    },{timestamps:true});
export const User=mongoose.model("User",userSchema);
