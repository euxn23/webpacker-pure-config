const { basename, dirname, extname, relative } = require('path')

module.exports.mapPathArrayToEntryHash = (paths, baseDir, extensions) =>
  paths.filter(p => extensions.includes(extname(p))).reduce(
    (prev, next) => ({
      ...prev,
      [relative(
        '.',
        `${dirname(relative(baseDir, next))}/${basename(next, extname(next))}`
      )]: next
    }),
    {}
  )
