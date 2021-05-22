import glob from 'glob'
import esbuild from 'esbuild'

function findTs() {
  return new Promise((resolve, reject) => {
    glob('solve/**/*.ts', {}, function (er, files) {
      if (er) reject(error)
      resolve(files.filter((v) => !v.includes('test')))
    })
  })
}

function buildTs(files) {
  return esbuild.build({
    entryPoints: files,
    write: true,
    outdir: 'dist',
    sourcemap: true,
    outExtension: { '.js': '.mjs' },
  })
}

findTs()
  .then((v) => buildTs(v))
  .catch((e) => {
    console.log('build faild')
  })
