const { app, BrowserWindow } = require("electron");

function createWindow() {
  const window = new BrowserWindow({
    width: 1000,
    height: 1000,
  });
  window.loadFile("dist/index.html");
}

app.on("ready", () => {
  createWindow();
});
