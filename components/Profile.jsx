import React from "react";
import PromptCard from "./PromptCard";
import Image from "next/image";

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {

  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{name} Profile</span>
      </h1>
      <p className="desc text-left">{desc}</p>

    <div className="mt-10 prompt_layout">
        {data.map((post)=> (
            <PromptCard 
                key={post._id}
                post={post}
                //A call back funtion that checks if handleEdit or handleDelete exist then we pass it with a post
                handleEdit={() => handleEdit && handleEdit (post)}
                handleDelete={() => handleDelete && handleDelete (post)}
            />
        ))}
    </div>
   
    </section>
  );
};

export default Profile;
