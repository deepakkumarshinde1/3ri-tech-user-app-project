import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWeatherDetails } from "../redux/reducers/WeatherReducer";
import { useEffect } from "react";
import { getProductDetails } from "../redux/reducers/ProductReducer";

function FindCity() {
  let dispatch = useDispatch();
  const [input, setInput] = useState("");
  const [disabled, setDisabled] = useState(false);

  let { weatherDetails: wd } = useSelector((state) => state.weather);
  let _getWeatherDetails = async (event) => {
    event.preventDefault();
    if (input !== "") {
      setDisabled(true);
      dispatch(getWeatherDetails(input));
    }
  };

  let getApiData = () => {
    dispatch(getProductDetails());
  };

  useEffect(() => {
    setDisabled(false);
    setInput("");
  }, [wd]);

  return (
    <>
      <button onClick={getApiData}>Get API Data</button>
      <form className="" onSubmit={_getWeatherDetails}>
        <div className="mb-2 input-group">
          <input
            className="form-control"
            placeholder="Enter City e.g Pune"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <button
            disabled={disabled}
            className="btn btn-success input-group-text"
          >
            {disabled ? <i>Getting...</i> : "Get"}
          </button>
        </div>
      </form>
    </>
  );
}

export default FindCity;
