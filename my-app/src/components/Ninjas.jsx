import React from "react";

const Ninjas = ({ ninjas, deleteNinja }) => {
  const renderList = ninjas.map((ninja) => {
    return ninja.age > 20 ? (
      <div key={ninja.id}>
        <h3>Name: {ninja.name}</h3>
        <p>Age: {ninja.age}</p>
        <p>Belt: {ninja.belt}</p>
        <button
          onClick={() => {
            deleteNinja(ninja.id);
          }}
        >
          Delete
        </button>
        <hr />
      </div>
    ) : null;
  });

  return <div className="ninja-list">{renderList}</div>;
};

export default Ninjas;
