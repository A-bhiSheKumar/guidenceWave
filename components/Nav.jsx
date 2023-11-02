"use client";

import Link from "next/link"; //Help us to move form 1Page to another
import Image from "next/image";
import { useState, useEffect } from "react";

import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  const { data: session} = useSession();

  const [providers , setProviders] = useState(null);

    // This state is responsible for menuOpening
    const [toggleDropdown , setToggleDropdown] = useState(false)

// How we set those providers in next.js Here we go!!
    useEffect(() => {
        const setUpProviders = async () => {
            const response = await getProviders();

            setProviders(response);
        }

        setUpProviders();
    },[])


  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/gw.png"
          alt="logo"
          width={100}
          height={100}
          className="object-contain"
        />
        <p className="logo_text">GuidanceWave</p>
      </Link>


      {/* Desktoop Scrreen navigation */}
      <div className="sm:flex hidden">
        {session?.user ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              Create Post
            </Link>

            <button type="button" onClick={signOut} className="outline_btn">
                Sign Out
            </button>

            <Link href="/profile">
                <Image   
                src={session?.user.image}
                width={35}
                height={35}
                className="rounded-full"
                alt="profile"
                />
            </Link>
          </div>
        ) : (
          <>
          {/* If user is not login */}

          {providers && Object.values(providers).map((provider) => (
            <button
                type="button"
                key={provider.name}
                onClick={() => signIn(provider.id)}
                className="black_btn"            
            >
                Sign In
            </button>
          ))}
          </>
        )}
      </div>



      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative">
      {session?.user ? (
        <div className="flex">
            <Image 
                src={session?.user.image}
                width={35}
                height={35}
                className="rounded-full"
                alt="profile"
                // This click is here for making that previous state true ok
                onClick={() => setToggleDropdown((prev) => !prev)} 
            />

            {toggleDropdown && (
                <div className="dropdown">
                    <Link 
                        href="/profile"
                        className="dropdown_link"
                        onClick={() => setToggleDropdown(false)}
                    >
                    My Profile
                    </Link>

                    <Link 
                        href="/create-prompt"
                        className="dropdown_link"
                        onClick={() => setToggleDropdown(false)}
                    >
                    Create Prompt
                    </Link>

                    <button
                      type="button"
                      onClick={() => {
                        setToggleDropdown(false);
                        signOut();
                      }}
                      className="mt-5 w-full black_btn"
                    >
                        Sign Out
                    </button>
                </div>
            )}
        </div>
      ): (
          <>
          {/* If use is not login */}

          {providers && Object.values(providers).map((provider) => (
            <button
                type="button"
                key={provider.name}
                onClick={() => signIn(provider.id)}
                className="black_btn"            
            >
                Sign In
            </button>
          ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;




//Let me summarize the code!

//Well we had done large number of stuffs but not complicated we spend more time 
//in just making the navbar looks responsive for mobile and destop screen
//most import we has implemented all the stuffs realted to google Auth
//note that it doesnot work for now , until we implemnet the real logic