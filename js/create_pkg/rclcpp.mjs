#!/usr/bin/env zx

// pkg名（第1引数）の取得
const pkg_name = process.argv.slice(3);
console.log(pkg_name);
// cd('/home/chaos/rosss');
// 基準パスはrosss内、cd関数実行後の
await $`ros2 pkg create --build-type ament_cmake "${pkg_name}"`;
// homeディレクター内で実行する場合、「~」を認識できない
// await $`cd ../ && ros2 pkg create --build-type ament_cmake "${pkg_name}"`;