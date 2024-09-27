import React, { useState, useEffect, useRef } from "react";
const inputEle = useRef("");
const Useref = () => {
  const [myData, setMyData] = useState("");
  const count = useRef(3);
  console.log(count);
  useEffect(() => {
    count.current = count.current + 1;
  });

  return <></>;
};
