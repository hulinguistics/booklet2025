---
title: 言語当てゲーム Languessr の紹介
---

# 言語当てゲーム Languessr の紹介

ランダムに表示される Wikipedia の要約記事からその表示言語を当てるブラウザゲーム「Languessr」を作りました。その紹介です。

| | Languessr (ランゲッサー) |
| :-: | :-: |
| 概要 | 表示される文章の言語を当てるゲーム |
| URL | [languessr.xiupos.net](https://languessr.xiupos.net/) |
| 開発者 | xiupos (筆者) |
| 機種 | ウェブブラウザ |
| 人数 | シングルプレイヤー |
| GitHub | [xiupos/languessr](https://github.com/xiupos/languessr) |
| モデル | GeoGuessr, Wordle 等 |

## 内容紹介

![Languessr プレイ画面](https://assets.st-note.com/img/1708078934644-sSfUOlg6sG.png?width=2000&height=2000&fit=bounds&format=jpg&quality=85)

上の画像は Languessr のプレイ画面です。中央に見慣れない文字で書かれた文章がありますね。さて、これは何語でしょう？言語好きの方なら簡単ですね。これはベンガル語で、バングラデシュやインドなどで話されている言語です。この文章は「[インドネシアの地理](https://ja.wikipedia.org/wiki/%E3%82%A4%E3%83%B3%E3%83%89%E3%83%8D%E3%82%B7%E3%82%A2%E3%81%AE%E5%9C%B0%E7%90%86)」という Wikipedia の記事の[ベンガル語版](https://bn.wikipedia.org/wiki/%E0%A6%AC%E0%A6%BE%E0%A6%82%E0%A6%B2%E0%A6%BE_%E0%A6%AD%E0%A6%BE%E0%A6%B7%E0%A6%BE)の要約です。私はベンガル語が読めないので文章の内容はわかりませんが、慣れればこの文章がベンガル語で書かれていることは文字からわかります。「Select your guess」から「bn: বাংলা」を選択して「GUESS」ボタンを押してみましょう。

このように、Languessr は様々な言語で表示される文章を見て、その言語を当てるゲームです。言語数の異なる3つのモードがあり、問題数も5問と30問から選択することができるため、初心者から上級者？まで楽しめます。正解した問題数、または全問正解のクリアタイムをSNSでシェアして、みんなで楽しみましょう！

> #Languessr 📖 Beginner 5/5 in 00:26.674 🎉🎉🎉🎉🎉
> https://languessr.xiupos.net

## 技術的な話

現時点では [Svelte](https://svelte.dev/) で実装されています。Svelte は JavaScript フレームワークの一つで、実行前に最適化されるために React や Vue に比べて軽いという特徴があります。また, デザインは [Pico.css](https://picocss.com/) という CSS フレームワークを使っています。シンプルな実装とモダンなデザインで、大変使いやすいです。

## 今後

サークルのある日の昼に思い付き、夕方までに実装したものであるため、元々は実装や難易度設定に無理がありました。しかし、様々な方に遊んでいただき、沢山のアイデアをいただいて今の形に落ち着きました。これからも、積極的にSNSで共有し、攻略記事等を書いていただくことで、Languessr を普及していきたいと思っています。いつかは競技会をしたい！
