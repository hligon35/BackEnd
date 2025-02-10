//setup...this is similar to when we use our default tags in html
const express = require("express")
//activate or tell this app variable to be an express server
const app = express()
const router = express.Router()

//making an api using routes
//Routes are used to handle browser requests. They look like URLs. The difference is that when a browser requests a route, it is dynamically handled by using a function.

router.get("/songs", function(req, res){
    const song = {
        title: "Uptown Funk",
        artist: "Bruno Mars",
        popularity: 10,
        genre: ["funk", "boogie"]
    }
    
    res.json(song)
})

//all request that usually use an api start with /api...so the url would be localhost:3000/api/songs
app.use("/api", router)
app.listen(3000)