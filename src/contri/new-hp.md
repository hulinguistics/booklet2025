---
title: あたらしいHulingのHPのはなし
---

# あたらしいHulingのHPのはなし

私 xiupos は北大言語学サークル Huling で現役構成員として公式サイト [huling.org](https://huling.org/) を作っています（執筆時点）。昨年末、このHPを大きく作りなおしました。その改修までの経緯がこの記事の趣旨です。

## 改修前の構成

2022年4月に発足した Huling ですが、同年6月にはすでにHPの開発がはじまりました。言語関係の記事を載せるための「ブログ」が求められていたのです。git のログを見る限り、北大祭の1日目の夕方に作り始めていました。お祭りの勢いですね。

![git log --reverse の出力結果](https://assets.st-note.com/img/1733889078-3Mpz2NrsFo1ygO9KJ5Ca4PWY.png?width=4000&height=4000&fit=bounds&format=jpg&quality=90){width=400}

最初のHPは **VuePress** で作成されました。たしか最初は頒布冊子の電子版みたいな想定でいたので、VuePress にしたのだと思います。詳しい経緯はよく覚えていません。このときに Hugo や Astro などにしていたら、今回の改修も変わっていたと思います。

やがて **VitePress** に落ち着き、改修直前には36個の記事が掲載されていました（後述の文字変換器を除く）。改修直前のコミット ([ac63b47](https://github.com/hulinguistics/huling/tree/ac63b47)) 時点のリポジトリから往時の様子を偲ぶことができます。

![改修前のトップページ](https://assets.st-note.com/img/1733905730-N1qdKkYFEauIxR8elUzr4MGH.png?width=4000&height=4000&fit=bounds&format=jpg&quality=90){width=400}

![改修前の記事ページの例（現在は note に掲載）](https://assets.st-note.com/img/1733906139-A13Vx8WvwLQGnqEaNry4oe0R.png?width=4000&height=4000&fit=bounds&format=jpg&quality=90){width=400}

VitePress のデフォルトテーマを使っているとはいえ、テーマを改変したり、コンポーネントを定義したりすることができるので、様々な改良が施されました。たとえば、文中のフォントの指定には特に注意が払われており、キリル文字でも古教会スラブ語では文献の書体に近付けるため Monomakh というフォントを使う、といった設定がなされていました。大量のフォントをロードする時間を抑えるため、毎回ビルド時にフォントサブセットを自動作成していたほどです。

![改修前のHPで使われていた文字の一覧。ロード時間を短縮するため、ビルド時にこれらの文字だけを含むフォントサブセットが生成されていた。](https://assets.st-note.com/img/1733907570-e6IrUx3jWQiHXytgwldZRmuV.png?width=4000&height=4000&fit=bounds&format=jpg&quality=90){width=400}

また、文字変換器も言語学サークルならではの機能でした。改修後は別のリポジトリに切り出されています。ある文字を別の文字へ相互に変換することのできるウェブツールです。言葉で説明するより実際に使ってもらった方がわかってもらえる思います↓

![文字変換器 by Huling](https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://hulinguistics.github.io/conv/){width=130}

## 問題点

### 開発・執筆に関わる敷居が高い

このようにモダンSSGを最大限活用していたHPでしたが、問題も多くありました。一番の問題は「開発・執筆に関わる敷居が高い」という点です。記事を作成するだけでも、規定の場所に md ファイルを作成して commit する必要があります。非テックサークルで構成員に git の概念を伝え、GitHub アカウントを作成してもらい、Markdown の文法を理解してもらっていたのだから、今考えると異様なサークルです。これを読んでいるあなた、はじめて git を触った日のことを覚えていますか？

やがて、記事執筆の敷居を下げるため、**Netlify CMS**（現 Decap CMS）という Headless CMS を導入して、GitHub アカウントさえ作成すれば git も md も知らずに記事を作成できる環境が整えられました。CMSの導入は、記事執筆の敷居を下げるのに大きく寄与したと思います。ですが、まだ構成員からは敬遠されていました。

![改修前に導入していた Netlify CMS（現 Decap CMS）](https://assets.st-note.com/img/1733909201-ukb8IW2cBMzHNOgraPn3TQpE.png?width=4000&height=4000&fit=bounds&format=jpg&quality=90){width=400}

### 担当の引き継ぎがむずかしい

年度の変わり目になって、新たな問題も浮上しました。「HP担当の引き継ぎ」です。記事の執筆や文字変換器などは複数の構成員が率先して追加していましたが、サイトの根幹は私が好き勝手に作っていました。モダンSSGで作られたWebサイト、しかも「ハウルの動く城」と呼ぶべきほどに増改築を繰り返したHPです。これを非テックサークルで引き継ぐことは、よほどのテック人材が入会しない限り難しいです。反省しています。

**そんなこんなで、HPの大改修が求められていたのです！**

## 改修後の構成

年度が明けようとしている時期に改修は始まりました。

まず、記事はすべて note など既存のブログサービスで書くことになりました。フォントの問題など、反対意見もありましたが、引き継ぎのことを考えれば止むなしです。HP上にあった記事の大半も note に移されました。記事を追加するときは、各々のアカウントで記事を書き、Huling の note のマガジンにそれを追加する、という手順です。

![Huling の note のマガジン](https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://note.com/huling/m/m8a70e16198cc){width=130}

文字変換器は前述の通り、別のサイトに切り出されました。各方面からお褒めの言葉を頂いていただけに、廃止には絶対にできませんでした。リダイレクトの設定がなされていますが、ブックマークをするときは新しいURLへの登録をお願いします。

そして、HP本体ですが、モダンSSGをやめてピュアな **HTML+CSS+JS を直接書く**という古式ゆかしい佇まいになりました。サークルの概要を記述するだけの、一枚もののサイトになっています。記事や他機能が切り出されたことから、HPのコードを触る構成員はHP担当だけです。GitHub上での開発は続けていますが、このくらいの構成なら現実的に引き継げると思います。

また、改修後のHPには、note マガジンの最新記事がリスト表示されています。改修前には無かったアピールです。技術的には note マガジンのRSSから取得して表示しているだけですが、最近の CSS や Vanilla JS は非常に良い体験で書くことができます。（CSS Nesting Module や Web Components など。）

Huling 公式サイト上で Ctrl+U をすると、素朴なソースコードを読むことができます。この記事を執筆した時点でのページは Wayback Machine にもアーカイブされています。執筆時点でのリポジトリからも様子が伺えると思います。

執筆時点では、まだ私がHP担当ですが、この改修をした後であれば難なく引き継げると確信しています。ちなみに今回の北大祭時点ではまだ引き継げていません。

<p style="text-align: right;">
(理学部4年 xiupos)
</p>

![改修後のトップページ](https://assets.st-note.com/img/1733912625-Auy1pKBmn0NYLCPOVqwGr5zv.png?width=4000&height=4000&fit=bounds&format=jpg&quality=90){width=400}

![改修後に追加された note マガジンへのリンク](https://assets.st-note.com/img/1733915399-Nx854L6YSMjnhIFBAWDeGC0V.png?width=4000&height=4000&fit=bounds&format=jpg&quality=90){width=400}
