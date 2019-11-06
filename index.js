
const express = require('express')
const app = express()
const port = 3000

// This is an example of how to integretate the last project into a server - JBG

const { execSync } = require('child_process')

function run() {
  for(let i = 0; i < 10000; i++) {
    execSync(`touch output/${i}`)
  }
}

// End -- 10000 example - JBG

function bar(req, res) {
  res.send("<a href='/foo'>foo</a>")
}

function foo(req, res) {
  // Uncommenting this line would create 10000 documents - JBG
  //run()
  res.send("FOO")
}

app.get('/', bar)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
