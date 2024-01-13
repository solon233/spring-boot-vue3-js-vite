# SpringBootとVite（vue3,js)を使用した開発環境のサンプル

## 概要
ViteのHMRを利用してフロントサイドで変更した内容が即座にSpringBootに反映される開発環境

## 起動方法
* vue3-js-vite-frontendモジュールをカレントとしたコンソールを開く

* Viteの開発サーバを起動する "npm run dev"

* localhost:8089で起動したことを確認

* spring-boot-backendモジュールをSpringBootダッシュボードでサーバ起動する

* ブラウザで "http://localhost:8080/customer" を開く

* Vueのページが表示されていることを確認する

* Vueのコンポーネントを変更すると、ブラウザの内容が即座に変更されることを確認する


# 参考

本番環境のデプロイ方法、マニフェストの使用方法については以下のサンプルを参照

[Spring Boot MPA with vite](https://github.com/Theiaz/spring-boot-mpa-with-vite)

index.htmlに存在するThymeleafの前後２重アンダーバーはプリプロセッシングであり詳細は以下を参照

[Thymeleafチートシート](https://qiita.com/NagaokaKenichi/items/c6d1b76090ef5ef39482#%E3%83%97%E3%83%AA%E3%83%97%E3%83%AD%E3%82%BB%E3%83%83%E3%82%B7%E3%83%B3%E3%82%B0)


[B6：テストを自動化するのをやめ、自動テストを作ろう - JTF2020](https://www.youtube.com/watch?v=WJshz4klFe8)

テスト自動化の具体的に考え方がまとまっていると思います
