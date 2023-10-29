// Documentation: https://www.npmjs.com/package/dotenv
require('dotenv').config()
// That's it. process.env now has the keys and values you defined in your .env file.


// import { Express } from 'express -> Common JS
const express = require('express') //Module JS
const app = express() //express ki saari functionality hmne app me le li hain.
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req,res) => {
    res.send('hiteshdotcom')
} )

app.get('/login',(req, res) => {
    res.send('<h1>Please Login at Chai aur Code </h1>')
} )

app.get('/youtube', (req, res) => {
    res.send("<h2>Chai Aur Code YT Channel</h2>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})

// After modifying ConvolverNode.apply.apply. Restart i.e. run the command npm run start again in terminal. Because of a concept of hot reloading.👀

// Concept of Hot reloading in React: 💡💡
// Timestamp: 23:00 
// https://www.youtube.com/watch?v=pOV4EjUtl70&list=PLu71SKxNbfoBGh_8p_NS-ZAh6v7HhYqHW&index=2

