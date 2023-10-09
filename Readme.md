# SpringBootとVite（vue3,js)を使用した開発環境のサンプル

## 概要
ViteのHMRを利用してフロントサイドで変更した内容が即座にSpringBootに反映される開発環境

## 起動方法
・vue3-js-vite-frontendモジュールをカレントとしたコンソールを開く<br>
・Viteの開発サーバを起動する "npm run dev" <br>
・localhost:8089で起動したことを確認 <br>
・spring-boot-backendモジュールをSpringBootダッシュボードでサーバ起動する <br>
・ブラウザで "http://localhost:8080/customer" を開く <br>
・Vueのページが表示されていることを確認する <br>
・Vueのコンポーネントを変更すると、ブラウザの内容が即座に変更されることを確認する <br>

