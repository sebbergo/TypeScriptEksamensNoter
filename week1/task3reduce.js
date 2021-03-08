var myArray = ["Lars", "Peter", "Jan", "Bo"];
var numbers = [2, 3, 67, 33];
let members = [
  { name: "Peter", age: 18 },
  { name: "Jan", age: 35 },
  { name: "Janne", age: 25 },
  { name: "Martin", age: 22 },
];

console.log(myArray.join(", "));
console.log(myArray.join(" "));
console.log(myArray.join("#"));

const reducer = (accumulator, currentValue) => accumulator + currentValue;
//var reducer2 = (accumulator, currentValue) => accumulator + currentValue.age;

console.log(numbers.reduce(reducer));
console.log(
  members.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.age / members.length,
    0
  )
);

var votes = [
  "Clinton",
  "Trump",
  "Clinton",
  "Clinton",
  "Trump",
  "Trump",
  "Trump",
  "None",
];

var reducer3 = function (voteObj, currentValue) {
  if (!voteObj[currentValue]) {
    voteObj[currentValue] = 1;
  } else {
    voteObj[currentValue] += 1;
  }

  return voteObj;
};

var result = votes.reduce(reducer3, {});
console.log(result);
