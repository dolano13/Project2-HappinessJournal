const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const thoughtsSchema = new Schema({
  date: { type: Date,default: Date.now} ,
  Question1:{type: String, required:true},
  mood:{ type: Number, min: 0, max: 5, required:true},
}, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

const entry = mongoose.model("Thoughts", thoughtsSchema);

module.exports = entry;