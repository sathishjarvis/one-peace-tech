import React from "react";
import { useState } from "react";

// function navbarbutton() {
  
//   const show = document.getElementById("bs-example-navbar-collapse-1");
//   if (show.className === "collapse"){
//     show.className += "responsived";
//   }
//   else {
//     show.className = "collapse"
//   }
// }

export const Navigation = (props) => {
  const [click , setClick] = useState(false);
  const toggleMenu = () =>{
    setClick(!click);
  }
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed navbarbutton"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
            onClick={toggleMenu}
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="/">
          <img src="..\img\onepeacelogo.png" alt="logo" className="logo"/>
          </a>{" "}
        </div>

        <div
          className = {`collapse navbar-collapse ${click ? 'navMenu' :''}`}
          id="bs-example-navbar-collapse-1"
          
          >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#about" className="page-scroll">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Services
              </a>
            </li>
            <li>
              <a href="#features" className="page-scroll">
                Features
              </a>
            </li>
            <li>
              <a href="#project" className="page-scroll">
                Projects
              </a>
            </li>
            <li>
              <a href="#testimonials" className="page-scroll">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll">
                Team
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
