import fetch from "node-fetch";
import "core-js/proposals/promise-any";

console.log("Det virker nu");

function fetchSomething(url) {
  const result = fetch(url).then((res) => res.json());
  return result;
}

const p1 = fetchSomething("https://swapi.dev/api/people/1");
const p2 = fetchSomething("https://swapi.dev/api/people/1");
const p3 = fetchSomething("https://swapi.dev/api/people/1");
const p4 = fetchSomething("https://swapi.dev/api/people/1");

let promiseAll = Promise.all([p1, p2, p3, p4]);
let promiseAny = Promise.any([p1, p2, p3, p4]);
