import { useCallback, useMemo, useState } from "react";

const Child = () => {
  let [count, setCount] = useState(0);
  let [count1, setCount1] = useState(0);

  let incCount = () => {
    setCount(++count);
  };
  let checkEven = useMemo(() => {
    for (let index = 0; index < 1000; index++) {
      console.log("loop");
    }
    console.log("called");
    if (count % 2 === 0) {
      return true;
    } else {
      return false;
    }
    // both are used for memorization to avoid rerendering of a complex logic
    // we can update state in useCallback
    // in return useCallback gives a function
    // we cant update other state in useMemo
    // in return useMemo gives a value
  }, [count]);
  return (
    <>
      <center>
        <h1>{checkEven ? "Even" : "Odd"}</h1>
        <h1>{count}</h1>
        <button onClick={incCount}>INC 1</button>
        <hr />

        <h1>{count1}</h1>
        <button onClick={() => setCount1(++count1)}>INC 2</button>
      </center>
    </>
  );
};
export default Child;
