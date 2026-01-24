// import dotenv from "dotenv"
// dotenv.config();

import "dotenv/config";
//ye niche wale key value pairs hai
export const ENV={
    PORT:process.env.PORT||5001,
    MONGO_URI:process.env.MONGO_URI,
    Node_ENV:process.env.Node_ENV,
};
