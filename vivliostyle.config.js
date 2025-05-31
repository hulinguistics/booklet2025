module.exports = {
  title: '北大言語学サークル 文系祭2025企画',
  author: '北大言語学サークル Huling <info@huling.org>',
  language: 'ja',
  size: 'A4',
  theme: './theme',
  entry: [
    {
      path: 'index.md',
      rel: 'contents',
    },

    'preface.md', // はじめに

    //
    // 寄稿
    //
    'contri/index.md', // タイトル
    'contri/yaimamuni-jpop.md', // 現代のJ-POPに見る琉球八重山語
    'contri/sovet-1.md', // ソ連国歌で学ぶロシア語文法･前編
    'contri/sovet-2.md', // ソ連国歌で学ぶロシア語文法･後編
    'contri/bamanankan-1.md', // バンバラ語 概説 音韻編
    'contri/bamanankan-2.md', // バンバラ語 概説 文法編
    'contri/itenmen.md', // イテリメン語の否定とその現実性について
    'contri/golden-kamuy.md', // ドラマ『ゴールデンカムイ』のアイヌ語を読んでみよう！
    'contri/new-hp.md', // あたらしいHulingのHPのはなし
    'contri/nikolaj.md', // ニコライの『魯話和訳』に関する覚書
  ],
  entryContext: './src',
  output: [ // path to generate draft file(s). default to '{title}.pdf'
    {
      path: './dist/output.pdf',
      format: 'pdf',
      preflight: 'press-ready',
      preflightOption: ['gray-scale'], // 白黒
    },
    {
      path: './dist/webpub',
      format: 'webpub',
    },
  ],
  workspaceDir: '.vivliostyle',
  toc: true,
  tocTitle: '目次',
  http: true,
  cover: '../theme/cover.png', // cover image. default to undefined.
  // vfm: { // options of VFM processor
  //   hardLineBreaks: true, // converts line breaks of VFM to <br> tags. default to 'false'.
  //   disableFormatHtml: true, // disables HTML formatting. default to 'false'.
  // },
}
