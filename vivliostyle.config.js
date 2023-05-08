module.exports = {
  title: '言サ冊子2023(仮称)',
  author: '北大言語学サークル Huling <info@huling.org>',
  language: 'ja',
  // size: 'A4', // paper size.
  theme: './theme',
  entry: [
    'preface.md', // はじめに

    //
    // 第3外国語概説
    //
    '3gai/chu.md', // 古教会スラブ語
    '3gai/ain.md', // アイヌ語
    // '3gai/ara.md', // アラビア語
    '3gai/fin.md', // フィンランド語
    '3gai/pol.md', // ポーランド語
    // '3gai/tur.md', // トルコ語

    //
    // 寄稿
    //
    'contri/consti.md', // 日本国憲法の言語学的解析
    'contri/edu_jpn.md', // 知っていますか?「日本語教育」
    // 'contri/chara.md', // 文字
    // 'contri/fra_rus.md', // ロシア国内でのフランス語
  ],
  entryContext: './src',
  output: [ // path to generate draft file(s). default to '{title}.pdf'
    './dist/output.pdf', // the output format will be inferred from the name.
    {
      path: './dist/webpub',
      format: 'webpub',
    },
  ],
  workspaceDir: '.vivliostyle', // directory which is saved intermediate files.
  toc: true, // whether generate and include ToC HTML or not, default to 'false'.
  // cover: './cover.png', // cover image. default to undefined.
  // vfm: { // options of VFM processor
  //   hardLineBreaks: true, // converts line breaks of VFM to <br> tags. default to 'false'.
  //   disableFormatHtml: true, // disables HTML formatting. default to 'false'.
  // },
}
