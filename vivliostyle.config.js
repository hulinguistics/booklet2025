module.exports = {
  title: '北大言語学サークル 楡陵祭2023企画',
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
    // 第3外国語概説
    //
    '3gai/index.md', // タイトル
    '3gai/chu.md', // 古教会スラブ語
    '3gai/ain.md', // アイヌ語
    '3gai/ara.md', // アラビア語
    '3gai/fin.md', // フィンランド語
    '3gai/pol.md', // ポーランド語
    '3gai/tur.md', // トルコ語

    //
    // 寄稿
    //
    'contri/index.md', // タイトル
    'contri/consti.md', // 日本国憲法の言語学的解析
    'contri/edu_jpn.md', // 知っていますか?「日本語教育」
    'contri/pol_spolgloski_miekki.md', // 「きのうてきなんしいん」ってなぁに？
    'contri/fra_rus.md', // ロシア国内でのフランス語
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
