import React, { useState } from "react";

const UseStateBasics = () => {
  const [text, setText] = useState("random title");
  const clickHandler = () => {
    if (text === "random title") {
      setText("Hello Abubakar");
    } else {
      setText("random title");
    }
  };
  return (
    <>
      <h1>{text}</h1>
      <button className="btn" onClick={clickHandler}>
        change title
      </button>
    </>
  );
};

export default UseStateBasics;
