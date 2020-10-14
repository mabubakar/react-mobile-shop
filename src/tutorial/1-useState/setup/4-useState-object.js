import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "abubakar",
    age: 28,
    message: "random messages",
  });
  const changeMessage = () => {
    setPerson({ ...person, message: "Abubakar is a good boy" });
  };
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={changeMessage}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;
