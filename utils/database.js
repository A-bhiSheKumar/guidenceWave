//* Making connection with data base

import { exportPathMap } from "@next.config";
import mongoose from "mongoose";

let isConnected = false; // allow to track the connection

export const connectToDB = async () => {
    mongoose.set('strictQuery' , true);

    if(isConnected){
        console.log("Mongoose is already connected");
        return;
    }


    try{
        await mongoose.connect(process.env.MONGODB_URI , {
            dbName: "share_prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        //if the above code executed currently

        isConnected = true;

        console.log('MongoDB connected')

    } catch(error){
        console.log(error)
    }
}