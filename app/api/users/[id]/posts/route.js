//Api endpoint for the profile page
import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

//Asynchronous Operations
export const GET = async (request , {params}) => {
    try {
        await connectToDB();
        //Database Interaction: 
        const prompts = await Prompt.find({
            creator: params.id
        }).populate('creator');


        return new Response(JSON.stringify(prompts) , {status:200})

        //Error Handling
    } catch (error) {
        return new Response("Failed to fetch Profile" , {status: 500})
    }
}

