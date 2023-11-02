//The difference between CREATE PROMPT and EDIT PROMPT is that , in EDIT promot have that previous value 
"use client"; 

import { useEffect, useState } from "react";

import { useRouter, useSearchParams } from "next/navigation";
import Form from "@components/Form";

const EditPrompt = () => {

    const router = useRouter();
    const searchParams = useSearchParams();
  
    
    const promptId = searchParams.get('id');

    const [ submitting , setSubmitting] = useState(false); //This is responsible for sumbittion of the form
    const [post , setPost] = useState({
        prompt:'',
        tag:'',
    })

    //* Additional useEffect hook that is responsible for getting the previous value
    // It happend when the prompt id changes

    useEffect (() => {
        const getPromptDetails = async () => {
            const response = await fetch(`/api/prompt/${promptId}`)
            const data = await response.json();

            setPost({
                prompt: data.prompt,
                tag: data.tag,
            })
        }

        if(promptId) getPromptDetails()
    } , [promptId])




    //A function that accepts the event(e) and responsible for submitting
    const updatePrompt = async (e) => {
        e.preventDefault();
        setSubmitting(true);
    
        if (!promptId) return alert("Missing PromptId!");
    
        try {
          const response = await fetch(`/api/prompt/${promptId}`, {
            method: "PATCH",
            body: JSON.stringify({
              prompt: post.prompt,
              tag: post.tag,
            }),
          });
    
          if (response.ok) {
            router.push("/");
          }
        } catch (error) {
          console.log(error);
        } finally {
          setSubmitting(false);
        }
      };
  return (
   <Form 
    type="Edit"
    post={post}
    setPost={setPost}
    submitting={submitting}
    handleSubmit={updatePrompt}
   />
  )
}

export default EditPrompt




