import React from 'react'

export const Navbar = (props) => {
  return (
    <>

 <div style={{ display: 'flex', justifyContent: 'space-evenly', background: '#eee', padding: '10px' }}>
     
     <p>{props.item1}</p>
     <p>{props.item2}</p>
     <p>{props.item3}</p>

    </div>
    
    </>
  )
}

export default Navbar;
