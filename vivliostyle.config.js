module.exports = {
  title: '北大言語学サークル 北大祭2025企画',
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
    'contri/bamanankan-1.md', // バンバラ語 概説 音韻編
    'contri/bamanankan-2.md', // バンバラ語 概説 文法編
    'contri/itenmen.md', // 活動記録&レポ 小野智香子先生講演会「イテリメン語における否定」
    'contri/golden-kamuy.md', // ドラマ『ゴールデンカムイ』のアイヌ語を読んでみよう！
    'contri/new-hp.md', // あたらしいHulingのHPのはなし
    'contri/nlp-ml-huit.md', // へっぽこAIをつくろう！(NLP/ML 勉強会ノート)
    'contri/i-font.md', // 補助記号のついたキリル文字《І і》のフォント問題
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
