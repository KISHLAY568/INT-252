import React from "react";
import PropTypes from "prop-types";
function Navigation(props) {
  return (
    <nav class="nav">
      <span>
        <a href="#home">{props.title}</a>
      </span>
      <span>
        <a href="#about">About Us</a>
      </span>
      <span>
        <a href="#contact">{props.type}</a>
      </span>
      <span>
        <a href="#service">Services</a>
      </span>
      <div>
        <input type="search" placeholder="search here" />
        <button>Go</button>
      </div>
    </nav>
  );
}

export default Navigation;
