const { contextBridge } = require("electron");
const { realStateService } = require("./src/dependencies");

contextBridge.exposeInMainWorld("api", {
  add(state, callback) {
    realStateService.findAll(state, callback);
  },
  update(state, callback) {
    realStateService.update(state, callback);
  },
  find(idRequest, callback) {
    realStateService.update(idRequest, callback);
  },
  findAll(callback) {
    realStateService.findAll({}, callback);
  },
  remove(idRequest, callback) {
    realStateService.remove(idRequest, callback);
  },
});
