const myArray = [1, 3, 51, 821, 42, 97];

filterMethod = (array) => {
  const newArray = [];

  array.forEach((element) => {
    if (element < 10) {
      newArray.push(element);
    }
  });

  return newArray;
};

filterMethodOg = (element) => {
  return element < 10;
};

myFilter = (array, callback) => {
  return callback(array);
};

ogFilter = (array) => {
  return array.filter(filterMethodOg);
};

console.log(myFilter(myArray, filterMethod));

console.log(ogFilter(myArray));

myMap = (array, callback) => {
  return callback(array);
};

myCondition = (array) => {
  newArray = [];

  array.forEach((element) => {
    newArray.push(element * 2);
  });

  return newArray;
};

ogCondition = (element) => {
  return element * 2;
};

ogMap = (array) => {
  return array.map(ogCondition);
};

console.log(myMap(myArray, myCondition));
console.log(ogMap(myArray));
