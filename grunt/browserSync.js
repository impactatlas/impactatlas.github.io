module.exports = {
  dev: {
    bsFiles: {
      src : 'dist/css/style.css'
    },
    options: {
      watchTask: true,
      proxy: "impactatlas.dev:8888"
    }
  }
}