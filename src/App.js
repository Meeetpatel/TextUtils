import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [alerts, setAlerts] = useState(null);
  const showAlert = (message, type) => {
    setAlerts({
      msg: message,
      type: type,
    });
  };
  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtils" />
        <Alert Alert={alerts} />
        <div className="my-20">
          <Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter the text to analyze"
                ></TextForm>
              }
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
