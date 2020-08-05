import React, { useState } from "react";
import Ninjas from "./Ninjas.jsx";
import AddNinja from "./AddNinja.jsx";

const App = () => {
  const [ninjas, setNinjas] = useState([
    { name: "Ryu", age: 30, belt: "Black", id: 1 },
    { name: "Ken", age: 25, belt: "Orange", id: 2 },
    { name: "Doe", age: 10, belt: "Purple", id: 3 },
  ]);

  const addNinja = (newNinja) => {
    let ninjasx = [...ninjas, newNinja];

    setNinjas(ninjasx);
  };

  const deleteNinja = (id) => {
    setNinjas(
      ninjas.filter((ninja) => {
        return ninja.id !== id;
      })
    );
  };

  return (
    <div>
      <Ninjas ninjas={ninjas} deleteNinja={deleteNinja} />
      <AddNinja addNinja={addNinja} />
    </div>
  );
};

export default App;
