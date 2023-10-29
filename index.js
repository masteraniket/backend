// Documentation: https://www.npmjs.com/package/dotenv
require('dotenv').config()
// That's it. process.env now has the keys and values you defined in your .env file.


// import { Express } from 'express -> Common JS
const express = require('express') //Module JS
const app = express() //express ki saari functionality hmne app me le li hain.
const port = 4000

const githubData = {
  "login": "hiteshchoudhary",
  "id": 11613311,
  "node_id": "MDQ6VXNlcjExNjEzMzEx",
  "avatar_url": "https://avatars.githubusercontent.com/u/11613311?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/hiteshchoudhary",
  "html_url": "https://github.com/hiteshchoudhary",
  "followers_url": "https://api.github.com/users/hiteshchoudhary/followers",
  "following_url": "https://api.github.com/users/hiteshchoudhary/following{/other_user}",
  "gists_url": "https://api.github.com/users/hiteshchoudhary/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/hiteshchoudhary/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/hiteshchoudhary/subscriptions",
  "organizations_url": "https://api.github.com/users/hiteshchoudhary/orgs",
  "repos_url": "https://api.github.com/users/hiteshchoudhary/repos",
  "events_url": "https://api.github.com/users/hiteshchoudhary/events{/privacy}",
  "received_events_url": "https://api.github.com/users/hiteshchoudhary/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Hitesh Choudhary",
  "company": null,
  "blog": "https://www.youtube.com/c/HiteshChoudharydotcom",
  "location": "India",
  "email": null,
  "hireable": null,
  "bio": "I make coding videos on youtube and for courses. My youtube channel explains my work more. Check that out",
  "twitter_username": "hiteshdotcom",
  "public_repos": 72,
  "public_gists": 1,
  "followers": 8821,
  "following": 0,
  "created_at": "2015-03-23T13:03:25Z",
  "updated_at": "2023-09-09T03:27:44Z"
}

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

app.get('/github', (req, res) =>{
  res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})

// After modifying ConvolverNode.apply.apply. Restart i.e. run the command npm run start again in terminal. Because of a concept of hot reloading.👀

// Concept of Hot reloading in React: 💡💡
// Timestamp: 23:00 
// https://www.youtube.com/watch?v=pOV4EjUtl70&list=PLu71SKxNbfoBGh_8p_NS-ZAh6v7HhYqHW&index=2

