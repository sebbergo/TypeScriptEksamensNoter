const task1B = require("./task1B");

task1B
  .makeSecureRandomArr([8, 16, 24, 32, 40])
  .then((data) => console.log(data));
