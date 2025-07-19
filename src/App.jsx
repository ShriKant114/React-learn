import React, { useState } from 'react';
import Navbar from './Components/Navbar';

const App = () => {

  const [val, updateval] = useState(0);

  const Onclickevent = () => {         // onclick event
    updateval(val + 1);
  }

  const [text, updatetext] = useState("");

  const OnchangeEvent = (event) => {        // onchange

    updatetext(event.target.value);

  }


    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault(); // page reload से रोकेगा
      alert("Email submitted: " + email);
    };

    return (

      <div>
        <Navbar></Navbar>

        <div style={{ marginLeft: 50, marginTop: 10 }}>

          <h3>Onclick Event : {val}</h3>
          <button onClick={Onclickevent}>Click me</button><br /><br />


          <h3>OnChange :</h3> <input type='text' placeholder='Enter text' onChange={OnchangeEvent} />
          <h3>Text : {text}</h3>


          <form onSubmit={handleSubmit}>
            <input type="email" onChange={(e) => setEmail(e.target.value)} />
            <br/><br/><button type="submit">Submit</button>
          </form>


        </div>
      </div>
    );
  };

  export default App;
