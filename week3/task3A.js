const URL = "https://swapi.dev/api/people/";
const fetch = require("node-fetch");
var now = require("performance-now");

async function fetchPerson(url) {
  const result = fetch(url).then((res) => res.json());
  return result;
}

async function printNames() {
  var start = now();
  console.log("Before");
  let [person1, person2] = await Promise.all([
    fetchPerson(URL + "1"),
    fetchPerson(URL + "2"),
  ]);
  console.log(person1.name);
  console.log(person2.name);
  console.log("After all");
  var end = now();
  console.log((start - end).toFixed(3));
}

printNames();
