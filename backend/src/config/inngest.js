import { Inngest } from "inngest";
import { connect } from "mongoose";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "my-app" });

const syncUser=inngest.createFunction(
    {id:"sync-user"},
    {event:"clerk/user.created"},
    async({event})=>{
         await connectDB()

         const{id, email_addresses,first_name,last_name,image_url}=event.data

         const newUser={
           clerkId:id,
           email:email_addresses[0]?.email_address,
           name:`${first_name||""}${last_name||""}`,
           image:image_url,
         }
         await User.create(newUser);

         //di=o more thing here
    }
);

const deleteUserFromDB=inngest.createFunction(
    {id:"delete-user-from-db"},
    {event:"clerk/user.deleted"},
    async({event})=>{
        const{id}=event.data;
        await User.deleteOne({clerk:id});
//todo more thig here
    }
);

// Create an empty array where we'll export future Inngest functions
export const functions = [syncUser,deleteUserFromDB];