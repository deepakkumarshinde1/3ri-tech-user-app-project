import { useState } from "react";
import Counter from "./components/Counter";

function App() {
  const [counters, setCounters] = useState([0, 10, 20]);
  const updateCounter = (index) => {
    counters[index] += 1;
    setCounters([...counters]);
  };
  return (
    <>
      {counters.map((value, index) => {
        return (
          <Counter
            key={index}
            index={index}
            count={value}
            updateCounter={updateCounter}
          />
        );
      })}
    </>
  );
}

export default App;
