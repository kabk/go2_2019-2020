const { execSync } = require('child_process')

function run() {
  for(let i = 0; i < 10000; i++) {
    execSync(`touch output/${i}`)
  }
}

run()

