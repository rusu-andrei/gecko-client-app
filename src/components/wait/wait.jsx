import { Spinner } from "react-bootstrap";
import "./wait.css";

const Wait = ({ fixed }) => {
  return fixed ? (
    <div className="wait-spinner-fixed-container">
        <Spinner animation="border" role="status" variant="light" />
    </div>
  ) : (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
};

export default Wait;
