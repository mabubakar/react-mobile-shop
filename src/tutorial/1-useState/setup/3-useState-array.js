import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  const removeItem = (id) => {
    let newPeople = people.filter((perosn) => perosn.id !== id);
    setPeople(newPeople);
  };
  return (
    <>
      {people.map((perosn) => {
        const { id, name } = perosn;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      <button className="btn" onClick={() => setPeople([])}>
        clear item
      </button>
    </>
  );
};

export default UseStateArray;
