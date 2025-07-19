import React, { useState } from 'react'
import { UseState } from 'react';
import Navbar from './Components/Navbar';

export const App = () => {

  const [count1, UpdateCount] = useState(0);

  const [user, UpdateUser] = useState({ name: "Shrikant", age: 20 });

  const UpdateUserfun = () => {

    let nam = prompt("Enter Nmae");
    let ag = prompt("Enter Age");
    
    UpdateUser({ name: nam, age: ag });
  };

  return (
    <div>
      <Navbar></Navbar>

      <div style={{ marginLeft: 50 }}>
        <h2>Count: {count1}</h2>
        <button onClick={() => UpdateCount(count1 + 1)}>Increase</button>
      </div>

      <div style={{ marginLeft: 50 }}>
        <h2>Name: {user.name}</h2>
        <h2>Age:{user.age}</h2>
        <button onClick={UpdateUserfun}>UpdateUser</button>
      </div>


    </div>
  )
}

export default App;
