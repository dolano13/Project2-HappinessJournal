const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const thoughtsSchema = new Schema({
  author: {type: Schema.Types.ObjectId, ref:"User"},
  date: {type: Date,default: Date.now} ,
  question:{type: String},
  song: String,
  mood:{ type: Number, min: 0, max: 5},
  pic: String,
}, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

const entry = mongoose.model("Thoughts", thoughtsSchema);

module.exports = entry;