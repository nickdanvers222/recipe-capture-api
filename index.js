require('dotenv').config()
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .get('/', (req, res) => res.json({"pages":"index"}))
  .post('/do', (req, res)=> {
    res.json({"pages":"do"})
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
