const portVars = require("./global.vars");
class GlobalSetup {
  setVars() {
    return (global.ports = portVars);
  }
}

module.exports = new GlobalSetup();
