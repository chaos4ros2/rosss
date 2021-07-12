// var { ipcRenderer } = require('electron');

const util = require('util');
const childProcess = require('child_process');
const exec = util.promisify(childProcess.exec);


function test() {
  // const button = document.getElementById('button');
  // ipcRenderer.send('test', 'test');
  exec('zx index.mjs');
}
