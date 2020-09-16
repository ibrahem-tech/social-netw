const mongoose = require("mongoose");

const tiktokSchema = mongoose.Schema({
  url: String,
  channel: String,
  song: String,
  likes: String,
  messages: String,
  description: String,
  shares: String,
});

//collection inside the database
const Videos = mongoose.model("tiktokVideos", tiktokSchema);
module.exports = Videos;
