cryptoArray = {
  title: "Crypto randoms",
  randoms: [],
};

/* function makeSecureRandom(size) {
  return new Promise((resolve, reject) => {
    require("crypto").randomBytes(size, function (err, buffer) {
      let secureHex = buffer.toString("hex");
      const obj = { length: size, random: secureHex };
      resolve(obj);
    });
  });
} */

function makeSecureRandomArr(array) {
  return new Promise((resolve, reject) => {
    array.forEach((element) => {
      require("crypto").randomBytes(element, function (err, buffer) {
        let secureHex = buffer.toString("hex");
        const obj = { length: element, random: secureHex };
        cryptoArray.randoms.push(obj);
      });
    });

    setTimeout(() => {
      resolve(cryptoArray);
    }, 1000);
  });
}

/* makeSecoureRandom(8).then((data) => {
  cryptoArray.randoms.push(data);
}); */

/* Promise.all([
  makeSecureRandom(8),
  makeSecureRandom(16),
  makeSecureRandom(24),
]).then((values) => {
  cryptoArray.randoms.push(values);
  console.log(cryptoArray);
}); */

module.exports.makeSecureRandomArr = makeSecureRandomArr;
