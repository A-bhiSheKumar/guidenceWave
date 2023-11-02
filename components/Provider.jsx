"use client"; //client directive

import { SessionProvider } from 'next-auth/react';

//We need to get that childeren and session through Props here

const Provider = ({ children, session }) => (
  <SessionProvider session={session}>
    {children}
  </SessionProvider>
)

export default Provider;

//For me it is confusing in start , but let me make it eassier to understand>

//A higher-order function is a function that takes one or more functions as arguments and/or returns a function as its result. 

//* In this code, Provider is a higher-order component (HOC). 
//* It takes two arguments: children and session. children represents the 
//* child components that this Provider component will wrap, and session 
//* is a prop that is expected to contain session data. 