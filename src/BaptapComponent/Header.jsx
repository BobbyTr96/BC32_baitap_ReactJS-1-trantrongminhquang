import React from "react";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container">
        <a class="navbar-brand" href="#">Start Bootstrap</a>
          <ul className="navbar-nav">
            <li className="nav-item ">
              <a className="nav-link active" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
