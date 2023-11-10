import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Alert = (props) => {
  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        {props.alert.message}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    )
  );
};

export default function TextForm(props) {
  const handle = (event) => {
    setText(event.target.value);
  };
  const handleUpclick = () => {
    setText(text.toUpperCase());
    showAlert("Converted to UpperCase!", "success");
  };
  const handlelowclick = () => {
    setText(text.toLowerCase());
    showAlert("Converted to LowerCase!", "success");
  };
  const handleclear = () => {
    setText("");
    showAlert("Text Cleared!", "success");
  };
  const [text, setText] = useState("");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message,
      type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  return (
    <div
      className="container mt-5 p-4"
      style={{
        backgroundColor: "#ecf0f1",
        borderRadius: "15px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Alert alert={alert} />
      <h1 className="text-center mb-4" style={{ color: "#3498db" }}>
        {props.heading}
      </h1>
      <div className="mb-3">
        <label htmlFor="mybox" className="form-label">
          Enter Your Text
        </label>
        <textarea
          className="form-control"
          id="mybox"
          rows="8"
          value={text}
          onChange={handle}
          style={{ borderRadius: "10px", border: "2px solid #3498db" }}
        ></textarea>
      </div>
      <div className="d-grid gap-2">
        <button className="btn btn-dark" onClick={handleUpclick}>
          Convert to UpperCase
        </button>
      </div>
      <p></p>
      <div className="my-3">
        <div className="d-grid gap-2">
          <button className="btn btn-dark" onClick={handlelowclick}>
            Convert to LowerCase
          </button>
        </div>
      </div>
      <p></p>
      <div className="my-3">
        <div className="d-grid gap-2">
          <button className="btn btn-dark" onClick={handleclear}>
            Clear Text
          </button>
        </div>
      </div>
      <div
        className="container mt-5 p-4"
        style={{
          backgroundColor: "#d6d5d3",
          color: "#3498db",
          borderRadius: "15px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2 className="text-center">Text Summary</h2>
        <p>
          Number of Words:{" "}
          {text.split(/\s+/).filter((word) => word !== "").length}
        </p>
        <p>Number of Characters: {text.length}</p>
        <p>
          Time to read:{" "}
          {0.008 * text.split(/\s+/).filter((word) => word !== "").length}{" "}
          seconds
        </p>
      </div>
    </div>
  );
}
