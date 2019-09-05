const express = require("express");
const massive = require("massive");
require("dotenv").config();
//controllers
const {addMovie, getMovie} = require("./controllers/movieController");

const app = express();

massive(process.env.CONNECTION_STRING)
.then(dbInstance => {
    app.set("db", dbInstance);
    console.log("Database Connected");
})

app.use(express.json());

app.post("/api/movies", addMovie)
app.get("/api/movies", getMovie)

app.listen(5050, () => console.log("Listening on Port 5050"));