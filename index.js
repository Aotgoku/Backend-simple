require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000
const githubData = {
  "login": "Aotgoku",
  "id": 165877441,
  "node_id": "U_kgDOCeMWwQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/165877441?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Aotgoku",
  "html_url": "https://github.com/Aotgoku",
  "followers_url": "https://api.github.com/users/Aotgoku/followers",
  "following_url": "https://api.github.com/users/Aotgoku/following{/other_user}",
  "gists_url": "https://api.github.com/users/Aotgoku/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Aotgoku/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Aotgoku/subscriptions",
  "organizations_url": "https://api.github.com/users/Aotgoku/orgs",
  "repos_url": "https://api.github.com/users/Aotgoku/repos",
  "events_url": "https://api.github.com/users/Aotgoku/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Aotgoku/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 13,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2024-04-03T06:16:05Z",
  "updated_at": "2025-12-17T03:04:01Z"
}

app.get('/',(req,res)=>{
    res.send('hello world')
})

app.get('/login',(req,res)=>{
    res.send("<h1> please login</h1>")
})

app.get('/twitter',(req,res)=>{
    res.send("<h2> please login</h2>")
})

app.get('/github',(req,res)=>{
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
    console.log(`Exaple app listeing port ${port}`)
})

