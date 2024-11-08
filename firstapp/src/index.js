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
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Hook from "./Activity5.jsx";
import Useref from "./Regi.jsx";
import Usereducer from "./Usereducer.jsx";
import LoginForm from "./form.jsx";
import Formvalidation from "./Formvalidation.jsx";
import AuthForm from "./activity9.jsx";
import Addition from "./acticity8.jsx";
import Timer from "./Timer.jsx";
import { Add, Subtract, Divide, Multiply } from "./calculator.jsx";
import Img from "./Img";
import Navigation from "./Navigation";
import Paragraph from "./Paragraph";
import { Secondpara, Thirdpara } from "./Paragraph";
import Heading from "./Heading";
import Stories from "./Fetch";
import Get from "./Get.jsx";
import Post from "./Post.jsx";
import Put from "./Put.jsx";
import AddPost from "./AddPost.jsx";
import Router1 from "./Router1.jsx";
import FetchUser from "./Activity10.jsx";
// import Hook from "./Hook";
import Registration from "./Registration";
import GetTimeButton from "./GetTimeButton";
import Propvalidation from "./propsvalidation";
import SearchComponent from "./Example.jsx";
import QueryParam from "./Param.jsx";
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
    {/* <Formvalidation /> */}
    <QueryParam />
  </>,
  document.getElementById("root")
);

// ReactDOM.render(<p>Hello World!</p>, document.getElementById("r"));
