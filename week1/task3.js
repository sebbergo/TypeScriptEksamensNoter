var myArray = ["Lars", "Peter", "Jan", "Bo"];

Array.prototype.myFilter = (callback) => {
  return callback;
};

myFilterMethod = (array) => {
  let newArray = [];

  array.forEach((element) => {
    if (element[0] == "L") {
      newArray.push(element);
    }
  });

  return newArray;
};

console.log(myArray.myFilter(myFilterMethod(myArray)));

Array.prototype.myMap = (callback) => {
  return callback;
};

myMapMethod = (array) => {
  let newArray = [];

  array.forEach((element) => {
    newArray.push(element + "JA");
  });

  return newArray;
};

console.log(myArray.myMap(myMapMethod(myArray)));
