//this is where the database info goes
const mongoose = require('mongoose');
const takeABreather = require('../models/stuff');

const dbName = 'happinessJournal';
mongoose.connect(`mongodb://localhost/${dbName}`);

const stuff= [
  {pic: '/images/15minYoga.jpg',},
  {pic: '/images/deepbreathing.jpg',},
  {pic: '/images/mentalwellnesschart.jpg',},
  {pic: '/images/1.jpg',},
  {pic: '/images/2.jpg',},
  {pic: '/images/3.jpg',},
  {pic: '/images/4.jpg',},
  {pic: '/images/5.jpg',}
]
takeABreather.create(stuff, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${stuff.length} stuff`)
  mongoose.connection.close();
});