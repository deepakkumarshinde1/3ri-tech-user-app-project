import { useState } from "react";

const Header = (props) => {
  // const [hide, setHide] = useState(1);
  // let hideElement = () => {
  //   setHide(0);
  // };
  return (
    <>
      <section className="row justify-content-center">
        <section className="col-6">
          <h1
            // style={{ opacity: hide }}
            title="my-title"
            className="text-center text-primary mt-3"
          >
            {props.text}
          </h1>
          {/* <button onClick={hideElement}>Hide</button> */}
          {/* <h1 className="text-center text-primary mt-3">{props.text}</h1>
          <h1 className="text-center text-primary mt-3">{props.text}</h1> */}
        </section>
      </section>
    </>
  );
};

export default Header;
