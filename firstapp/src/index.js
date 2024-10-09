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
import Hook from "./Activity5.jsx";
import Useref from "./Regi.jsx";
import Usereducer from "./Usereducer.jsx";
import Timer from "./Timer.jsx";
import { Add, Subtract, Divide, Multiply } from "./calculator.jsx";
import Img from "./Img";
import Navigation from "./Navigation";
import Paragraph from "./Paragraph";
import { Secondpara, Thirdpara } from "./Paragraph";
import Heading from "./Heading";
// import Hook from "./Hook";
import Registration from "./Registration";
import GetTimeButton from "./GetTimeButton";
import Propvalidation from "./propsvalidation";
// import "bootstrap/dist/css/bootstrap.min.css";

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
    {/* <GetTimeButton /> */}
    {/* <Propvalidation /> */}
    {/* <Navigation />
    <Heading />
    <Paragraph />
    <Secondpara />
    <Thirdpara /> */}
    {/* <ol>
      <li>{Add(30, 5)}</li>
      <li>{Subtract(30, 5)}</li>
      <li>{Divide(30, 5)}</li>
      <li>{Multiply(30, 5)}</li>
    </ol> */}
    {/* <Img /> */}
    {/* <Hook/> */}
    <Usereducer />
  </>,
  document.getElementById("root")
);

// ReactDOM.render(<p>Hello World!</p>, document.getElementById("r"));
