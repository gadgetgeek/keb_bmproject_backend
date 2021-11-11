//////////////////////////////////
// Dependencies
/////////////////////////////////

require("dotenv").config();
const { PORT = 3001, DATABASE_URL } = process.env;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");

/////////////////////////////////
// Database Connection
////////////////////////////////
// establish connection
mongoose.connect(DATABASE_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

// Connection Events
mongoose.connection
  .on("open", () => console.log("You are connected to Mongo"))
  .on("close", () => console.log("You are disconnected from Mongo"))
  .on("error", (error) => console.log(error));

//////////////////////////////
// Models
//////////////////////////////
// the bookmark schema
const BookmarkSchema = new mongoose.Schema(
  {
    title: String,
    url: String,
  },
  { timestamps: true }
);

const Bookmark = mongoose.model("Bookmark", BookmarkSchema);

//////////////////////////////
// Middleware
//////////////////////////////
// import middleware
app.use(cors()); // prevent cors errors, opens up access for frontend
app.use(morgan("dev")); //logging
app.use(express.json()); // parse json bodies

////////////////////////////////
// Routes
////////////////////////////////
// create a test route
app.get("/", (req, res) => {
  res.send("Hello KEB");
});

// BOOKMARK index route
// get request to /bookmark, returns all bookmarks as json
app.get("/bookmark", async (req, res) => {
  try {
    // send all bookmarks
    res.json(await Bookmark.find({}));
  } catch (error) {
    res.status(400).json({ error });
  }
});

//BOOKMARK create route
// post request to /bookmark, uses request body to make a new bookmark
app.post("/bookmark", async (req, res) => {
  try {
    // create a new bookmark
    res.json(await Bookmark.create(req.body));
  } catch (error) {
    res.status(400).json({ error });
  }
});

// BOOKMARK update  route
// put request to /bookmark/:id, updates the bookmark based on id with request body
app.put("/bookmark/:id", async (req, res) => {
  try {
    // update a new bookmark
    res.json(
      await Bookmark.findByIdAndUpdate(req.params.id, req.body, { new: true })
    );
  } catch (error) {
    res.status(400).json({ error });
  }
});

// BOOKMARK Destroy Route
// delete request to "/bookmark/:id", deletes the bookmark specified
app.delete("/bookmark/:id", async (req, res) => {
  try {
    // delete a bookmark
    res.json(await Bookmark.findByIdAndRemove(req.params.id));
  } catch (error) {
    res.status(400).json({ error });
  }
});

/////////////////////////////////
// Server Listener
/////////////////////////////////
app.listen(PORT, () => {
  console.log(`listening on PORT ${PORT}`);
});
