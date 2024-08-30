// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
import ReactDOM from "react-dom";
import React from "react";
import Navigation from "./Navigation";
import Paragraph from "./Paragraph";
import {Secondpara} from "./Paragraph";
import Heading from "./Heading";
// import* as ques from './Paragraph';
// ReactDOM.render(<p>hello</p>,document.getElementById("root"));
// const name = "Kishlay";
// ReactDOM.render(
//   <>
//     <h1>hello {name}</h1>
//     <p>You are in LPU</p>
//   </>,
//   document.getElementById("root")
// );

ReactDOM.render(
  <>
    <Navigation />
    <Heading />
    <Paragraph />
    <Secondpara/>
  </>,
  document.getElementById("root")
);
