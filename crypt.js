const crypto = require('crypto')

function createSalt() {
  return Math.round((new Date().valueOf() * Math.random())) + ''
}

function encryptPassword(password, salt) {
  return crypto.createHmac('sha1', salt).update(password).digest('hex')
}

//console.log(process.argv)

if(process.argv.length > 2) {
  const salt = createSalt()
  const hash = encryptPassword(process.argv[2], salt)
  console.log("HASH:", hash)
} else {
  console.log("Usage: node crypt.js <PASSWORD>")
}

