"use client";
import { useState , useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Profile from "@components/Profile";


const MyProfile = () => {
  const {data: session} = useSession();
  const router = useRouter();
  const[posts, setPosts] = useState([]);
  //Fetch post(but this time only the particular one)
  useEffect(() => { 
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();

      setPosts(data);
    }

    // s using optional chaining, which means it checks if session and user properties exist and are not null or 
    //undefined before attempting to access the id property. If session and user are both present and id is a truthy value 
    //(not null, undefined, 0, false, NaN, or an empty string), the fetchPosts() function will be called.
    if(session?.user.id) fetchPosts();
},[]);

   
  const handleEdit = (post) => {
    //we directly not giving that permisiion to edit first through the user to update page(for nice view)
    router.push(`/update-prompt?id=${post._id}`)
  }

  //I added the frontend logic but it should delete from the api-endpoints so we then call it
  const handleDelete = async (post) => {
    const hasConfirmed = confirm("Are you sure you want to delete this prompt?");

    if(hasConfirmed){
      try {
        await fetch(`/api/prompt/${post._id.toString()}`,{
          method: 'DELETE'
        });

        //after this above code execute //* (--> we need all the post accept that deleted post -->)
        const filteredPosts = posts.filter((p) => p._id !== post._id);

        setPosts(filteredPosts)
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <Profile 
        name="My"
        desc="Welcome to your personalized profile page"
        data={posts}   //For data we need to fetch the data
        handleEdit={handleEdit}
        handleDelete={handleDelete}
    />
  )
}

export default MyProfile
