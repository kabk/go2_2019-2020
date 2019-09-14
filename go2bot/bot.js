const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
})

rl.on('line', str => {
  console.error(`BOT PROCESSING ${str}`)
  switch(str) {
    case 'foo':
      console.log('bar')
      break
    case 'bar':
      console.log('baz')
      break
    default:
      console.log('foo')
      break
  }
})

