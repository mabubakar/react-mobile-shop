import React from "react";

const ErrorExample = () => {
  let title = "random title";
  const handleClick = () => {
    title = "Hello Abubakar";
    console.log(title);
  };
  return (
    <>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Change text
      </button>
    </>
  );
};

export default ErrorExample;
