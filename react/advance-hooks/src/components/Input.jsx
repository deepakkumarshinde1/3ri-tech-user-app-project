import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

function Input(props, ref) {
  let labelRef = useRef();
  let getLabelText = () => {
    // logic
    return labelRef.current.innerHTML;
  };
  useImperativeHandle(ref, () => {
    return {
      getMyValue() {
        return getLabelText();
      },
      setLabelText(text) {
        labelRef.current.innerHTML = text;
      },
    };
  });

  // 1 ==> true
  // 0 ==> false
  // if(1 == true)
  return (
    <>
      <center>
        <label htmlFor="" ref={labelRef}>
          Enter Input
        </label>
        <input ref={ref} type="text" placeholder="This is a input" id="input" />
      </center>
    </>
  );
}

export default forwardRef(Input);
