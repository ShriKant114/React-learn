import React from 'react';

export const Box = (props) => {
  return (
    <>
      <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>

        <h2>{props.title}</h2>

        <div style={{ display: 'flex', gap: '10px' }}>
          <div>{props.item1}</div>
          <div>{props.item2}</div>
          <div>{props.item3}</div>
        </div>

        <p>{props.description}</p>

        <button onClick={props.handleClick}>Click Me</button>

      </div>
    </>
  );
};

export default Box;
