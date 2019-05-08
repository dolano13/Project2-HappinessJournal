//this is where the database info goes
const mongoose = require('mongoose');
const takeABreather = require('../models/stuff');

const dbName = 'happinessJournal';
mongoose.connect(`mongodb://localhost/${dbName}`);

const stuff= [
  {pic: '/images/30.jpg',},
  {pic: '/images/1.jpg',},
  {pic: '/images/2.jpg',},
  {pic: '/images/27.jpg',},
  {pic: '/images/56.jpg',},
  {pic: '/images/15minYoga.jpg',},
  {pic: '/images/6.jpg',},
  {pic: '/images/42.png',},
  {pic: '/images/8.jpg',},
  {pic: '/images/9.jpg',},
  {pic: '/images/33.png',},
  {pic: '/images/43.png',},
  {pic: '/images/10.jpg',},
  {pic: '/images/45.png',},
  {pic: '/images/36.png',},
  {pic: '/images/46.png',},
  {pic: '/images/13.jpg',},
  {pic: '/images/39.png',},
  {pic: '/images/20.jpg',},
  {pic: '/images/37.png',},
  {pic: '/images/15.jpg',},
  {pic: '/images/17.jpg',},
  {pic: '/images/19.jpg',},
  {pic: '/images/48.png',},
  {pic: '/images/21.jpg',},
  {pic: '/images/22.jpg',},
  {pic: '/images/41.png',},
  {pic: '/images/1aba88650a8c33f79be06de1c9fdbb92.jpg',},
  {pic: '/images/23.jpg',},
  {pic: '/images/3.jpg',},
  {pic: '/images/24.jpg',},
  {pic: '/images/29.jpg',},
  {pic: '/images/32.jpg',},
  {pic: '/images/31.png',},
  {pic: '/images/16.jpg',},
  {pic: '/images/34.png',},
  {pic: '/images/53.png',},
  {pic: '/images/35.png',},
  {pic: '/images/25.jpg',},
  {pic: '/images/40.png',},
  {pic: '/images/2c7650bfa2c1f6b675d595e195d446c3.jpg',},
  {pic: '/images/26.jpg',},
  {pic: '/images/44.png',},
  {pic: '/images/47.png',},
  {pic: '/images/18.jpg',},
  {pic: '/images/4.jpg',},
  {pic: '/images/49.png',},
  {pic: '/images/52.png',},
  {pic: '/images/38.png',},
  {pic: '/images/54.png',},
  {pic: '/images/14.jpg',},
  {pic: '/images/55.jpg',},
  {pic: '/images/57.png',},
]
takeABreather.create(stuff, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${stuff.length} stuff`)
  mongoose.connection.close();
});