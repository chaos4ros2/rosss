#!/usr/bin/env zx

// todo: rclpp.mjsとの統合（重複部分の分割）

// ワークスペース名（第4引数）の取得
const ws_name = process.argv.slice(4).toString();

// pkg名（第3引数から第4引数を引いた分）の取得
const pkg_name = process.argv.slice(3).toString().replace(`,${ws_name}`, '');

// パッケージ作成
await $`cd ../${ws_name} && ros2 pkg create --build-type ament_python ${pkg_name}`;

// ノードのテンプレートをパッケージフォルダーにコピーする
await $`cp -n ./template/rclpy/* ../${ws_name}/${pkg_name}/${pkg_name}`;