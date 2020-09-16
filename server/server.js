const express = require("express");
const mongoose = require("mongoose");
const data = require("./data.js");
const Videos = require("./dbModel.js");
//app config
const app = express();
const PORT = process.env.PORT || 7000;

// middlewares
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"),
    res.setHeader("Access-Control-Allow-Headers", "*"),
    next();
});

//DB config
const connection_url =
  "mongodb+srv://admin:YGsnPAI5r5VNXA40@cluster0.vk7lr.mongodb.net/tiktok?retryWrites=true&w=majority";

mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

//api endpoints
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

//api endpoints
app.get("/", (req, res) => {
  res.send("Hello Worlds!");
});

app.get("/v1/posts", (req, res) => {
  res.status(200).send(data);
});

app.get("/v2/posts", (req, res) => {
  Videos.find({}, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/v2/posts", (req, res) => {
  const dbVideos = req.body;
  Videos.create(dbVideos, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});
//Listen
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
