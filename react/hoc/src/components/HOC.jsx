import { useParams } from "react-router-dom";

const hoc = (WarperComponent) => {
  return (props) => <WarperComponent {...props} params={useParams()} />;
};

export default hoc;
