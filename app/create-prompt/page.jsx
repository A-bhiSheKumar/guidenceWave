"use client"; 

import { useState } from "react";
import { useSession } from "next-auth/react"; //This allow us to know which user is currently login in
import { useRouter } from "next/navigation";
import Form from "@components/Form";

const CreatePrompt = () => {

    const router = useRouter();
    const {data: session} = useSession();

    const [ submitting , setSubmitting] = useState(false); //This is responsible for sumbittion of the form
    const [post , setPost] = useState({
        prompt:'',
        tag:'',
    })

    //A function that accepts the event(e) and responsible for submitting
    const createPrompt = async (e) => {
        e.preventDefault();
        setSubmitting(true); //indicate that it is in process

        try {
            //We are calling an api our own and passsing option obejct

            //* We are pssing all of this data that we have right here from frontend to the api end point /api/prompt/new using a POST request
            const response = await fetch('/api/prompt/new' , {
                method: 'POST',
                body: JSON.stringify({
                    prompt: post.prompt,
                    userId: session?.user.id,
                    tag: post.tag
                })
            })

            if(response.ok){
                router.push('/');
            }
        } catch (error) {
            console.log(error)
        }finally{
            setSubmitting(false);
        }
    }
  return (
   <Form 
    type="Create"
    post={post}
    setPost={setPost}
    submitting={submitting}
    handleSubmit={createPrompt}
   />
  )
}

export default CreatePrompt













//Sometime it seems like a mogic for developer to be very honest when i learned that we neeed to simply create a folder 
// for the endpoints , route will we created automaticlly i believe that it happen but when it partically happen to me
// i am shocked i am think how easy it is by the way
