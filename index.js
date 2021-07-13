"use strict";

const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

// https://noitalog.tokyo/electron-exec/
const util = require('util');
const childProcess = require('child_process');
const exec = util.promisify(childProcess.exec);

const ipc = require('electron').ipcMain

let mainWindow;

// 全てのウィンドウが閉じたら終了
app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});
// Electronの初期化完了後に実行
app.on('ready', function() {
  // メイン画面の表示。ウィンドウの幅、高さを指定できる
  mainWindow = new BrowserWindow({
      width: 800, 
      height: 600,
      title: "ROSSS",
      webPreferences: {
          nodeIntegration: true,
          contextIsolation: false,
      }
    });
  mainWindow.loadURL('file://' + __dirname + '/index.html');

  // zxのテスト
  // exec('zx index.mjs');
  
  // ウィンドウが閉じられたらアプリも終了
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});

// ipc.on('test', function (event, _) {
//     exec('zx ./js/index.mjs');
// })
