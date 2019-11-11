const express = require('express')
const geoip = require('geoip-lite')
const app = express()
const port = 3000

let cafeCount = 0
let toiletCount = 0
let pd202Count = 0

function cafe(req, res) {
  cafeCount++
  //cafeCount = cafeCount + 1
  res.send('<a href="/results">Results</a>')
}

function toilet(req, res) {
  toiletCount++
  res.send('<a href="/results">Results</a>')
}

function pd202(req, res) {
  pd202Count++
  res.send('<a href="/results">Results</a>')
}

function vote(req, res) {
  res.send('Options: <a href="/cafe">Cafe</a> <a href="/toilet">Toilet</a> <a href="/pd202">PD.202</a><script>alert("voting")</script>')
}

function results(req, res) {
  res.send(`Cafe: ${cafeCount} Toilet: ${toiletCount} PD.202: ${pd202Count}`)
}

app.get('/cafe', cafe)
app.get('/toilet', toilet)
app.get('/pd202', pd202)
app.get('/vote', vote)
app.get('/results', results)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
