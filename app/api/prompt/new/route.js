
import Prompt from '@models/prompt'
import { connectToDB } from "@utils/database";



//Is't cool , we not require any expressjs server to setup for endpoint like alll the stuffs and simply done using POST
export const POST = async (request ) => {
    //The function uses await req.json() to parse the JSON data from the incoming HTTP request (req)
    const {userId , prompt , tag} = await request.json();
    try {
        await connectToDB();
        const newPrompt = new Prompt({
            creator: userId,
            prompt,
            tag
        })

        await newPrompt.save();

        return new Response(JSON.stringify(newPrompt) , {status: 201})
    } catch (error) {
        return new Response("Failed to create a new prompt", {status: 500})
    }
}

//* This is how the api endpoints look like in nextjs

