import React from "react";
import "./Characters.css";

const DisplayFullCharacter = ({ character }) => {
  return (
    <div className="bigCard">
      <div>
        <img
          className="imgFullCharacter"
          src={character.image}
          alt={character.name}
        />
      </div>
      <div className="bigCardProperty">
        <p>{character.name}</p>
        <p>Height : {character.height}</p>
        <p>Mass : {character.mass}</p>
        <p>Gender : {character.gender}</p>
        <p>Species : {character.species}</p>
        <p>Homeworld : {character.homeworld}</p>
        <p>
          <a href={character.wiki} target="_blank" rel="noreferrer noopener">
            Page Wiki
          </a>
        </p>
      </div>
    </div>
  );
};

export default DisplayFullCharacter;
