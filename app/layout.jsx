//* IAM THE KING OF ALL THE COMPONENT DO YOU WANNA A KNOW WHY...HAHHAHHAHA
//Well in my component all the providers ( redux toolkit query , used files and functionalies and other stufs)
//* So they can be useable everywhere 

import '@styles/globals.css';   //Here we donot take a load for the path (COOL right!)
import Nav from '@components/Nav'; //But why we are Importing this here? we can do it in hero right! well we wanna a reuse it all accross the pages which is exactly why the developer of nextJs create a layout.jsx
import Provider from '@components/Provider';

export const metedata = {
    title: "PromptWave",
    description: 'Discover & Share AI Prompts'
}

const RootLayout = ({children} ) => {
  return (
    <html lang='en'>
        <body>
        <Provider>
        
            <div className='main'>
                <div className='gradient'/>
            </div>


            <main className='app'>
                <Nav />
                {children}
            </main>

            </Provider>
        </body>
    </html>
  )
}

export default RootLayout;