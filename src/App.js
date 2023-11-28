import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [alerts, setAlerts] = useState(null);
  const [showTextForm, setShowTextForm] = useState(true);

  const showAlert = (message, type) => {
    setAlerts({
      msg: message,
      type: type,
    });
  };

  const handleAboutClick = () => {
    setShowTextForm(false);
  };

  const handleHomeClick = () => {
    setShowTextForm(true);
  };

  return (
    <>
      <Navbar
        title="TextUtils"
        handleAboutClick={handleAboutClick}
        handleHomeClick={handleHomeClick}
      />
      <Alert Alert={alerts} />
      <div className="my-20">
        {showTextForm && (
          <TextForm showAlert={showAlert} heading="Enter the text to analyze" />
        )}
      </div>
    </>
  );
}

export default App;
