import React from "react";
import "./Characters.css";

const DisplayFullCharacter = ({ character }) => {
  return (
    <div>
      <p>{character.name}</p>
      <img
        className="imgFullCharacter"
        src={character.image}
        alt={character.name}
      />
      <p>Height : {character.height}</p>
      <p>Gender : {character.gender}</p>
      <p>Species : {character.species}</p>
      <p>Homeworld : {character.homeworld}</p>
    </div>
  );
};

export default DisplayFullCharacter;
