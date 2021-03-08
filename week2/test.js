const osInfo = require("./OsFile");
const DOS_Detector = require("./dosDetector");

console.log(osInfo);

const dos = new DOS_Detector(3000);

dos.on("DDos detected", (e) => console.log(JSON.stringify(e)));

dos.addUrl("dr.dk");
setTimeout(() => dos.addUrl("dr.dk"), 2500);
