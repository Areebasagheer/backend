require('dotenv').config()
import express from "express"
// const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter', (req, res) => {
    res.send('❤ Areeba')
})
app.get('/login', (req, res) => {
    res.send('hi users')
})
app.get('/web', (req, res) => {
    res.send('HI iM AREEBA')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

