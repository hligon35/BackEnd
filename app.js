const express = require("express");
const Song = require("./models/song");
var cors = require('cors')

const app = express();
app.use(cors())

//Middleware that parses HTTP request with JSON body
app.use(express.json());

const router = express.Router();

//Get list of all songs in a database
router.get("/songs", async(req, res) =>{
    try{
        //Find all songs in the database. Sen objects. Then log them out.
        const songs = await Song.find({})
        res.send(songs)
        console.log(songs)
    }
    catch (err){
        console.log(err)
    }
})

router.post("/songs", async(req, res) =>{
    try{
        const song = await new Song(req.body)
        await song.save()
        res.status(201).json(song)
        console.log(song)
    }
    catch (err){
        res.status(400).send(err)
    
    }})

//all request that usually use an api start with /api...so the url would be localhost:3000/api/songs
app.use("/api", router);

app.listen(3000);