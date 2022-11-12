const { app, BrowserWindow } = require("electron");

class AppWindow extends BrowserWindow {
  constructor(config, urlLocation) {
    const basicConfig = {
      width: 800,
      height: 600,
      webPreferences: {
        contextIsolation: false,
        nodeIntegration: true,
        enableRemoteModule: true,
        nodeIntegrationInWorker: true,
      },
      show: false,
      backgroundColor: "#efefef",
    };
    const finalConfig = { ...basicConfig, ...config };
    super(finalConfig);
    this.loadURL(urlLocation);
    this.once("ready-to-show", () => {
      this.show();
    });
  }
}

app.on("ready", () => {
  const mainWindowConfig = {
    width: 1440,
    height: 768,
  };
  const urlLocation = "http://localhost:5173";
  mainWindow = new AppWindow(mainWindowConfig, urlLocation);
  mainWindow.on("closed", () => {
    mainWindow = null;
    app.quit();
  });
});
