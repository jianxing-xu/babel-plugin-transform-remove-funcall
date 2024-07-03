/* eslint-disable no-console */
let Logger = {
  debug() {
  },
  ins: {
    log() {},
  },
}
console.log('123')
Logger.debug('hello')
Logger.ins.log()

Logger = () => {}
Logger()
