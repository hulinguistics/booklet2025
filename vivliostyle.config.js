module.exports = {
  title: '言サ冊子2023(仮称)',
  author: '北大言語学サークル Huling <info@huling.org>',
  language: 'ja',
  // size: 'A4', // paper size.
  theme: './theme', // .css or local dir or npm package. default to undefined.
  entry: [
    'manuscript.md',
  ], // `entry` can be `string` or `object` if there's only single markdown file.
  entryContext: './src', // default to '.' (relative to `vivliostyle.config.js`).
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
