const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const stuffSchema = new Schema({
  pic: String,
}, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

const stuff = mongoose.model("stuff", stuffSchema);

module.exports = stuff;