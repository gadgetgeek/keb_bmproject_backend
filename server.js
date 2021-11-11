//////////////////////////////////
// Dependencies
/////////////////////////////////

require("dotenv").config()
const {PORT = 3001, DATABASE_URL} = process.env
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")
const morgan = require("morgan")


/////////////////////////////////
// Database Connection
////////////////////////////////
// establish connection
mongoose.connect(DATABASE_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})


// Connection Events
mongoose.connection
.on("open", () => console.log("You are connected to Mongo"))
.on("close", () => console.log("You are disconnected from Mongo"))
.on("error", (error) => console.log(error))


//////////////////////////////
// Models
//////////////////////////////
// the bookmark schema




// import middleware
app.use(cors()) // prevent cors errors, opens up access for frontend
app.use(morgan("dev")) //logging
app.use(express.json()) // parse json bodies



////////////////////////////////
// Routes
////////////////////////////////
// create a test route
app.get("/", (req, res) => {
    res.send("Hello KEB")
})

// index route



// create route


// update  route


// Destroy Route 


/////////////////////////////////
// Server Listener
/////////////////////////////////
app.listen(PORT, () => {console.log(`listening on PORT ${PORT}`)})