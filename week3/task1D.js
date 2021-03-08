const task1B = require("./task1B");

async function getAsyncResult(array) {
  const result = await task1B.makeSecureRandomArr(array);
  return result;
}

module.exports = { getAsyncResult };
