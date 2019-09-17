const irc = require('irc'),
  readline = require('readline')

const channel = '#kabkgo2'
const botname = 'jbgbot'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const client = new irc.Client('irc.freenode.net', botname, {
  channels: [channel],
})

rl.on('line', str => {
  client.say(channel, str);
})

client.addListener('message', (from, to, message) => {
  console.log(message)
})

client.addListener('pm', (from, message) => {
  console.log(message)
})

client.addListener('error', message => {
  console.error('error: ', message)
})

client.join(channel)

