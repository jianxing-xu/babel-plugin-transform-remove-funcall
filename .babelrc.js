module.exports = {
  plugins: [['./dist/index.mjs', {
    callChains: ['Logger', 'debug', 'log'],
  }]],
}
