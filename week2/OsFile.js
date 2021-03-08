const os = require("os");

var osInfo = {
  platform: os.platform(),
  osType: os.type(),
  freeMemory: os.freemem(),
  totalMemory: os.totalmem(),
  EOL: "/r/n",
};

module.exports = osInfo;
