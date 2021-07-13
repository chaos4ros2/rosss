#!/usr/bin/env zx

// todo: rclpp.mjsとの統合（重複部分の分割）

// ワークスペース名（第4引数）の取得
const ws_name = process.argv.slice(4).toString();

// pkg名（第3引数から第4引数を引いた分）の取得
const pkg_name = process.argv.slice(3).toString().replace(`,${ws_name}`, '');

await $`cd ../${ws_name} && ros2 pkg create --build-type ament_python ${pkg_name}`;