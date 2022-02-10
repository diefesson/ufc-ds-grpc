const { contextBridge } = require("electron");
const { realStateService } = require("./src/dependencies");

contextBridge.exposeInMainWorld("api", {
  findAll(callback) {
    realStateService.findAll({}, callback);
  },
});
