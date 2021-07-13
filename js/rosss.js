// var { ipcRenderer } = require('electron');

const util = require('util');
const childProcess = require('child_process');
const exec = util.promisify(childProcess.exec);

/**
 * ダイアログ表示
 */
function show_dialog(style) {
  const dialog = document.getElementById('pkg_name_dialog');
  // ダイアログ表示
  dialog.style.display = 'block';
  // タイトル変更
  dialog.querySelector(".card_title").innerHTML = style;
}

/**
 * パッケージ作成
 * 
 * @todo 最終確認ダイアログ
 */
function create_pkg() {
  // スタイルの取得
  const style = document.getElementById('pkg_name_dialog').querySelector(".card_title").innerHTML;
  // パッケージ名の取得
  const pkg_name = document.getElementById('card_input').value;
  // スタイルで対応の関数を呼び出す
  if (style === 'RCLCPP') create_cpp_pkg(pkg_name);
  else create_py_pkg(pkg_name);
  // ダイアログを閉じる
  document.getElementById('pkg_name_dialog').style.display = 'none';
}

/**
 * rclcppベースのパッケージを作成する
 */
function create_cpp_pkg(pkg_name) {
  exec(`zx ./js/create_pkg/rclcpp.mjs ${pkg_name}`);
  // const button = document.getElementById('button');
  // ipcRenderer.send('test', 'test');
}


/**
 * rclpyベースのパッケージを作成する
 */
function create_py_pkg(pkg_name) {
  exec(`zx ./js/create_pkg/rclpy.mjs ${pkg_name}`);
}