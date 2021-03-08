const fetch = require("node-fetch");

async function getPlanetforFirstSpeciesInFirstMovieForPersonAsync(id) {
  result = {
    name: "",
    film: "",
    species: "",
    homeworld: "",
  };

  const namePromise = await fetch("https://swapi.dev/api/people/" + id)
    .then((res) => res.json())
    .then((data) => {
      result.name = data.name;
      return data.films[0];
    });

  const filmPromise = await fetch(namePromise)
    .then((res) => res.json())
    .then((data) => {
      result.film = data.title;
      return data.species[0];
    });

  const speciesPromise = await fetch(filmPromise)
    .then((res) => res.json())
    .then((data) => {
      result.species = data.name;
      return data.homeworld;
    });

  const homeworldPromise = await fetch(speciesPromise)
    .then((res) => res.json())
    .then((data) => {
      result.homeworld = data.name;
    });

  return result;
}

getPlanetforFirstSpeciesInFirstMovieForPersonAsync(1).then((data) =>
  console.log(data)
);
