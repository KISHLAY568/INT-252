// import React from "react";
// import PropTypes from "prop-types";
// function Navigation(props) {
//   return (
//     <nav className="navbar">
//       <span>
//         <a href="#home">{props.title}</a>
//       </span>
//       <span>
//         <a href="#about">About Us</a>
//       </span>
//       <span>
//         <a href="#contact">{props.type}</a>
//       </span>
//       <span>
//         <a href="#service">Services</a>
//       </span>
//       <div>
//         <input type="search" placeholder="search here" />
//         <button>Go</button>
//       </div>
//     </nav>
//   );
// }

// export default Navigation;

// import React from "react";
import "./Navbar.css"; // Assuming you have a CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">MyWebsite</div>
      <ul className="nav-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

