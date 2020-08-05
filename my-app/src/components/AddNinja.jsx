import React, { useState } from "react";

const AddNinja = ({ addNinja }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [belt, setBelt] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleAge = (e) => {
    setAge(e.target.value);
  };
  const handleBelt = (e) => {
    setBelt(e.target.value);
  };

  const handleForm = (e) => {
    e.preventDefault();

    let newNinja = {
      name: name,
      age: age,
      belt: belt,
      id: Math.random(),
    };

    addNinja(newNinja);
  };

  return (
    <div>
      <form onSubmit={handleForm}>
        <label htmlFor="name">
          Name: <input id="name" type="text" onChange={handleName} />
        </label>
        <label htmlFor="age">
          Age: <input id="age" type="text" onChange={handleAge} />
        </label>
        <label htmlFor="belt">
          Belt: <input id="belt" type="text" onChange={handleBelt} />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddNinja;
