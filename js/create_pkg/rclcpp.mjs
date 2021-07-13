#!/usr/bin/env zx

// todo1:引数を取得するよりいい方法を探す
// todo2:エラー処理 

// ワークスペース名（第4引数）の取得
const ws_name = process.argv.slice(4).toString();

// pkg名（第3引数から第4引数を引いた分）の取得
const pkg_name = process.argv.slice(3).toString().replace(`,${ws_name}`, '');

// cd('/home/chaos/rosss');
// 基準パスはrosss内、cd関数実行後の
await $`cd ../${ws_name} && ros2 pkg create --build-type ament_cmake ${pkg_name}`;
// homeディレクター内で実行する場合、「~」を認識できない
// await $`cd ../ && ros2 pkg create --build-type ament_cmake "${pkg_name}"`;