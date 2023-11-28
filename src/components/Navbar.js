import PropTypes from "prop-types";
import { useState } from "react";
import About from "./About";

export default function Navbar(props) {
  const [showAbout, setShowAbout] = useState(false);

  const handleHomeClick = (event) => {
    event.preventDefault();
    setShowAbout(false);
    props.handleHomeClick();
  };

  const handleAboutClick = (event) => {
    event.preventDefault();
    setShowAbout(true);
    props.handleAboutClick();
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/" onClick={handleHomeClick}>
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/"
                  onClick={handleHomeClick}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  onClick={handleAboutClick}
                  href="/about"
                >
                  About Creator
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {showAbout && (
        <div>
          <About />
        </div>
      )}
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  handleHomeClick: PropTypes.func.isRequired,
  handleAboutClick: PropTypes.func.isRequired,
};
