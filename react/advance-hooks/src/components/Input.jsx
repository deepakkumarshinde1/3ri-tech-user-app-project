import { useEffect, useRef } from "react";

function Input(props) {
  let inputRef = useRef();

  let submit = () => {
    // inputRef.current.value = "deepak";
    inputRef.current.style.backgroundColor = "red";
    inputRef.current.style.fontSize = "30px";

    let value = inputRef.current.value;
    alert(value);
  };
  useEffect(() => {
    inputRef.current.addEventListener("keyup", (event) => {
      console.log(event.keyCode);
    });
  }, []);
  return (
    <>
      <center>
        <input
          ref={inputRef}
          type="text"
          placeholder="This is a input"
          id="input"
        />
        <button onClick={submit}>Submit</button>
      </center>
    </>
  );
}

export default Input;
