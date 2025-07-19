import React from 'react'
import Navbar from './Components/Navbar';
import Box from './Components/Box';
import Children_props from './Components/Children_props';


const name = "ShriKant Kushwaha";

export const App = () => {
  return (
    <div>

      <Navbar item1="Home" item2="About" item3="signup"></Navbar>

      <div style={{alignItems:'center', justifyContent:'center', display:'flex', marginTop:10 } }>
        <h2>My Nmae is a {name} and i am {10+10} Years old.</h2>
      </div>

    <Box
        title="Welcome to Learn react"
        item1="C++"
        item2="Python"
        item3="Java"
        description="These are the core fundamentals computers languages."
        handleClick={() => alert('Button Clicked!')}
      />


      <Box
        title="Welcome to React Props"
        item1="HTML"
        item2="CSS"
        item3="JavaScript"
        description="These are the core web technologies."
        handleClick={() => alert('Button Clicked!')}
      />
     

     <Children_props>
    
    <h2>This is a Example of a Children Props</h2>

     </Children_props>

    </div>
  )
}

export default App;
