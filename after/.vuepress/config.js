module.exports = {
  plugins: [
    ['serve', {
      staticOptions: {
        redirect: false,
      }
    }],
    ['ssr-mismatch-workaround']
  ]
}
