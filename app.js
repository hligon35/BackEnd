//setup...this is similar to when we use our default tags in html
const express = require("express")
var cors = require('cors')
//activate or tell this app variable to be an express server


const bodyParser = require("body-parser")
const Song = require("./models/songs")
const app = express()
app.use(cors())

app.use(body-parser.json())
const router = express.Router()

//grab all songs in a database
router.get("/songs", function(req, res){
    let query = {}
    if(req.query.genre){
        query = {genre : req.query.genre}
    }

    //to find all songs in the databaseyou just use the find method that is built into mongodb
    Song.find(query, function(err, songs){
        if(err){
            res.status(400).send(err)
        }
        else{
            res.json(songs)
        }
    })
})

//all request that usually use an api start with /api...so the url would be localhost:3000/api/songs
app.use("/api", router)
app.listen(3000)