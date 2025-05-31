---
title: 補助記号のついたキリル文字《І і》のフォント問題
---

キリル文字の І, і にダイアクリティカル・マーク（補助記号）をつける際のフォントについて、簡単にまとめました。

## アクセント付きの і

ウクライナ語やベラルーシ語、ルシン語の単語にアクセント記号をつける際、І́ і́  の字形を気にする方がいる思います。特に問題になるのが小文字 і のドット (tittle) を省略させるかどうかという点です。ラテン文字を使う多くの西欧言語では i にアクセント記号をつけると í というドットのない形になります。筆者の好みとしてはキリル文字の і でも同じようになってほしいのですが、実際のフォントではドットを省かずにアクセント記号をそのまま上に乗せるような字形が大半になっています。

![](https://private-user-images.githubusercontent.com/26175482/449521281-0eb0a83e-e588-4b7f-ab10-935ff3a7cedf.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDg2OTAxOTAsIm5iZiI6MTc0ODY4OTg5MCwicGF0aCI6Ii8yNjE3NTQ4Mi80NDk1MjEyODEtMGViMGE4M2UtZTU4OC00YjdmLWFiMTAtOTM1ZmYzYTdjZWRmLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA1MzElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNTMxVDExMTEzMFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWJjMGQ4ZWU1ZmM0ZGVkMzQzOWI3MjFhMWQzZmQ3YmY4YTE2ZGQwYzJkZWZkMDAxNTZjZDZkMWRkMzNkYWEzNDEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.4TVQgD3-eg5uO-jgRapdKBStz2zvXkdOhBXjAzXoH1Q){width=300}

以下、各フォントにおける і のドットの有無を表にまとめました。筆者の手元のPC (Windows) にインストールされているフォントのみを比較しています。ドットが省略されている場合は赤字で強調してあります。

![セリフ体における字形の比較](https://assets.st-note.com/img/1735122338-NoDwMFZ3TIH7GmvBVlcrnkCQ.png?width=4000&height=4000&fit=bounds&format=jpg&quality=90){width=400}

![サンセリフ体における字形の比較](https://assets.st-note.com/img/1735123390-ohUIkXjZECzST8vBdmAnDlQ2.png?width=4000&height=4000&fit=bounds&format=jpg&quality=90){width=400}

## ドットを省略させるフォント

改めて、ダイアクリティカル・マークが付される際にキリル文字 і のドットを省略するフォントをまとめます。入手先へのリンクを貼ったのでご活用ください。

- **Charis SIL**: https://software.sil.org/charis/

- **Doulos SIL**: https://software.sil.org/doulos/

- **Gentium Plus**: https://software.sil.org/gentium/

- **Noto Serif**: https://fonts.google.com/noto/specimen/Noto+Serif

- **Noto Sans**: https://fonts.google.com/noto/specimen/Noto+Sans

- **DejaVu Serif**: https://dejavu-fonts.github.io/

- **DejaVu Sans**: https://dejavu-fonts.github.io/

- **Andika**: https://software.sil.org/andika/

## おわりに

この記事を書いた背景には、筆者が卒業研究で扱ったルシン語のテキストデータにおいて、アクセント記号をつけた**キリル文字 і** にあろうことか**ラテン文字 í (U+00ED)** が使用されていたせいで分析に大変な手間がかかったことが関係しています。その文書には Arial と Roboto が使用されていたのですが、上表で示した通りこれらのフォントではキリル文字 і́ のドットがアクセント記号をつけても残ってしまいます。そのため文書の作成者はこれをラテン文字 í で代用したのでしょう。しかしこれではキリル文字のみによる文字列検索ができなくなり、まあまあ面倒なことなります。

この記事は、わざわざラテン文字で代用しなくてもフォントを適切に指定すれば問題が解消するのだということを周知させるために書きました。同時に、筆者自身を含むキリル文字を扱うすべての人たちのために、どのフォントを使用すべきかをメモ書きとして残そうと思いこのような記事を書いた次第です。何か少しでも参考になる情報があれば大変幸いです。

<p style="text-align: right;">
(文学院M1 Mija)
</p>
