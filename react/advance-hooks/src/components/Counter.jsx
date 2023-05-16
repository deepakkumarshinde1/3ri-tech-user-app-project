import { useState } from "react";

function Counter(props) {
  let { count, updateCounter, index } = props;
  return (
    <>
      <center>
        <h1>{count}</h1>
        <button onClick={() => updateCounter(index)}>Inc</button>
      </center>
    </>
  );
}

export default Counter;
