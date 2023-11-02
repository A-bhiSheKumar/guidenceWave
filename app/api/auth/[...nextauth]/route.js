//SO this is an api route with a //* api / auth / dynamic nextauth / route
//* NOTE:-- This route is responsibel for the backend endpoints along side using the frontend side as well
import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';
import User from "@models/user";
import { connectToDB } from "@utils/database";

// console.log({
//     clientId: process.env.GOOGLE_ID,
//     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
// })

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],

   callbacks: {
    async session({session}) {
        const sessionUser = await User.findOne({
            email: session.user.email
        })

        session.user.id = sessionUser._id.toString();
        // WE are just updating it making sure that we always know which user is currently online
        return session;
    },

    async signIn ({ profile }) {
        //Keep in mind that every nextjs route is a //* Server less route
        //which means it is a lambda function that opens up only when it calls 
        //which means when it calls it spins the server and make a connection to the 
        //DATA base , Thats grate by the way because we donot need our server runs 
        // Constanly right! 

        //* But first we need to connect that with our database
        try {
            await connectToDB();

            //Here we need two checks.
            //* 1. Check if user already exists
            const userExists = await User.findOne({
                email: profile.email
            });

            //* 2. If, not create a new user
            if(!userExists){
                await User.create({
                    email: profile.email,
                    username: profile.name.replace(" " , "").toLowerCase(),
                    image: profile.picture
                })
            }

            //After successfully signin Return true
            return true;
        } catch (error) {
            console.log(error)
            //If not return false
            return false;
        }


    }
   }
})


export {handler as GET, handler as POST};



//TO be very honest this seems to confusing because we never work like that
//Well i to create this layout of code for authentication i use my 0% 
// of the brain i just simply copypaste the code form official website >>>