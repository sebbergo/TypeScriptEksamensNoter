const fetch = require("node-fetch");
const { resolve } = require("path");

var name = "";
var film = "";
var species = "";
var homeworld = "";

function getPlanetforFirstSpeciesInFirstMovieForPerson(id) {
  return new Promise((resolve, reject) => {
    fetch("https://swapi.dev/api/people/" + id)
      .then((response) => response.json())
      .then((data) => {
        name = data.name;
        fetch(data.films[0])
          .then((response) => response.json())
          .then((data) => {
            film = data.title;
            fetch(data.species[0])
              .then((response) => response.json())
              .then((data) => {
                species = data.name;
                fetch(data.homeworld)
                  .then((response) => response.json())
                  .then((data) => {
                    homeworld = data.name;
                  });
              });
          });
      });
    setTimeout(() => {
      console.log(name, film, species, homeworld);
    }, 1500);
  });
}

getPlanetforFirstSpeciesInFirstMovieForPerson(7);
