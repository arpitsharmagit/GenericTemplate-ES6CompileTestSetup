import {app,BrowserWindow} from 'electron';

let mainWindow=null;

app.on('ready',()=>{
  mainWindow=new BrowserWindow ({
    width:800,
    height:600,
    titleBarStyle: 'hidden-inset'
  });

  mainWindow.loadURL(`file://${__dirname}/renderer/index.html`);
});

app.on('windows-close-all',()=>{
  app.quit();
});
