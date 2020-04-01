import React from "react";
import "./Characters.css";

const DisplayCharacter = ({ character, handleClick }) => {
  return (
    <div onClick={() => handleClick(character.id - 1)} className="pdiv">
      <p>{character.name}</p>
      <img
        className="imgCharacter"
        src={character.image}
        alt={character.name}
      />
      <p>{character.species}</p>
    </div>
  );
};

export default DisplayCharacter;
