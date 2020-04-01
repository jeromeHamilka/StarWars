import React, { Component } from "react";
import axios from "axios";
import DisplayCharacter from "./DisplayCharacter";
import DisplayFullCharacter from "./DisplayFullCharacter";
import "./Characters.css";

class Characters extends Component {
  state = {
    characters: [],
    isloaded: false,
    idToDisplay: 0
  };
  getCharacters = () => {
    axios
      .get("https://melroune.github.io/starwars-api/api/all.json")
      /* .then(res => console.log(res)); */
      .then(res => this.setState({ characters: res.data, isloaded: true }));
  };

  componentDidMount() {
    this.getCharacters();
  }

  handleClick = id => {
    this.setState({ idToDisplay: id });
  };

  render() {
    const { characters, isloaded, idToDisplay } = this.state;
    return (
      <>
        {!isloaded ? (
          <div className="loading">Loading...</div>
        ) : (
          <div>
            <DisplayFullCharacter character={characters[idToDisplay]} />

            <div className="flexdiv">
              {characters.map(character => (
                <DisplayCharacter
                  handleClick={this.handleClick}
                  character={character}
                  key={character.id}
                />
              ))}
            </div>
          </div>
        )}
      </>
    );
  }
}

export default Characters;
