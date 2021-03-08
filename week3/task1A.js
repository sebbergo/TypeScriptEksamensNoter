const crypotArrayList = {
  title: "6 secure randoms",
  randoms: [],
};

function generateRandomBytes(size, callback) {
  require("crypto").randomBytes(size, function (err, buffer) {
    let secureHex = buffer.toString("hex");
    const obj = { length: size, random: secureHex };
    callback(obj);
  });
}

generateRandomBytes(48, (obj) => {
  crypotArrayList.randoms.push(obj);
  generateRandomBytes(40, (obj) => {
    crypotArrayList.randoms.push(obj);
    generateRandomBytes(32, (obj) => {
      crypotArrayList.randoms.push(obj);
      generateRandomBytes(24, (obj) => {
        crypotArrayList.randoms.push(obj);
        generateRandomBytes(16, (obj) => {
          crypotArrayList.randoms.push(obj);
          generateRandomBytes(8, (obj) => {
            crypotArrayList.randoms.push(obj);
            console.log(crypotArrayList);
          });
        });
      });
    });
  });
});
