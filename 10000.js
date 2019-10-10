const { exec } = require('child_process')

async function run() {
  for(let i = 0; i < 10000; i++) {
    await exec(`touch output/${i}`, (err, stdout, stderr) => {
      if (err) return
    })
  }
}

run()

