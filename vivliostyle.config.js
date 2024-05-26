module.exports = {
  title: '北大言語学サークル 文系祭2024企画',
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
    'contri/aynuitak.md', // アイヌ語概説 aynu itak
    'contri/jamc.md', // ジャマイカ・クレオール語(パトワ)文法概説
    'contri/grice-1.md', // グライス語用論 概説 前編
    'contri/grice-2.md', // グライス語用論 概説 中編
    'contri/grice-3.md', // グライス語用論 概説 後編
    'contri/yaimamuni-1.md', // 標準日本語との対照から学ぶ八重山語の音韻 前編
    'contri/yaimamuni-2.md', // 標準日本語との対照から学ぶ八重山語の音韻 後編
    'contri/languessr.md', // 言語当てゲーム Languessr
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
