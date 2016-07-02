module.exports = [
  {
    name: 'compile',
    doc : 'compiles sources',
    concurrent: [
      'compile:styles',
      'compile:scripts',
      'compile:markup',
      'copy:assets'
    ]
  },
  {
    name: 'watch',
    doc: 'watch files and do things',
    concurrent: [
      'watch:scripts',
      'watch:styles',
      'watch:markup'
    ]
  },
  {
    name: 'develop',
    doc: 'lets develop',
    concurrent: [
      'watch',
      'server'
    ]
  }
];
