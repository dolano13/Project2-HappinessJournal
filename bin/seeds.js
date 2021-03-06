//this is where the database info goes
const mongoose = require('mongoose');
const takeABreather = require('../models/stuff');

const dbName = 'happinessJournal';
mongoose.connect(`mongodb+srv://dolano13:36938614@cluster0-qegeg.mongodb.net/test?retryWrites=true'${dbName}`);

const stuff= [
  {pic:'/images/c.jpg',},
  {pic: '/images/30.jpg',},
  {pic: '/images/1.jpg',},
  {pic: '/images/2.jpg',},
  {pic:'/images/72.jpg',},
  {pic: '/images/27.jpg',},
  {pic: '/images/56.jpg',},
  {pic: '/images/15minYoga.jpg',},
  {pic: '/images/6.jpg',},
  {pic: '/images/42.png',},
  {pic:'/images/d.jpg',},
  {pic: '/images/8.jpg',},
  {pic: '/images/9.jpg',},
  {pic: '/images/33.png',},
  {pic: '/images/43.png',},
  {pic:'/images/e.jpg',},
  {pic: '/images/10.jpg',},
  {pic: '/images/45.png',},
  {pic: '/images/36.png',},
  {pic: '/images/46.png',},
  {pic:'/images/f.jpg',},
  {pic: '/images/13.jpg',},
  {pic:'/images73.jpg',},
  {pic: '/images/39.png',},
  {pic: '/images/20.jpg',},
  {pic: '/images/37.png',},
  {pic: '/images/15.jpg',},
  {pic: '/images/17.jpg',},
  {pic:'/images/g.jpg',},
  {pic: '/images/19.jpg',},
  {pic: '/images/48.png',},
  {pic: '/images/21.jpg',},
  {pic:'/images/h.jpg',},
  {pic: '/images/22.jpg',},
  {pic: '/images/41.png',},
  {pic: '/images/1aba88650a8c33f79be06de1c9fdbb92.jpg',},
  {pic: '/images/23.jpg',},
  {pic:'/images/i.jpg',},
  {pic: '/images/3.jpg',},
  {pic: '/images/24.jpg',},
  {pic:'/images/74.jpg',},
  {pic: '/images/29.jpg',},
  {pic: '/images/32.jpg',},
  {pic:'/images/j.jpg',},
  {pic: '/images/31.png',},
  {pic: '/images/16.jpg',},
  {pic: '/images/34.png',},
  {pic: '/images/53.png',},
  {pic: '/images/35.png',},
  {pic:'/images/k.jpg',},
  {pic: '/images/25.jpg',},
  {pic: '/images/40.png',},
  {pic: '/images/2c7650bfa2c1f6b675d595e195d446c3.jpg',},
  {pic: '/images/26.jpg',},
  {pic: '/images/44.png',},
  {pic: '/images/47.png',},
  {pic:'/images/75.jpg',},
  {pic: '/images/18.jpg',},
  {pic: '/images/4.jpg',},
  {pic:'/images/99.jpg',},
  {pic:'/images/1.jpg',},
  {pic: '/images/49.png',},
  {pic: '/images/52.png',},
  {pic:'/images/m.jpg',},
  {pic: '/images/38.png',},
  {pic: '/images/54.png',},
  {pic: '/images/14.jpg',},
  {pic:'/images/76.jpg',},
  {pic:'/images/n.jpg',},
  {pic: '/images/55.jpg',},
  {pic: '/images/57.png',},
  {pic: '/images/5e0e8d105868b425c171c62fcfc1cf46.jpg',},
  {pic:'/images/o.jpg',},
  {pic: '/images/6c0b2c2151a0bf96f0ee7eb82040ea64.jpg',},
  {pic:'/images/97.jpg',},
  {pic:'/images/7d54bd2fc8d9c80705b56241749f3e93.jpg',},
  {pic:'/images/p.jpg',},
  {pic:'/images/12c87392d926b76f58c35ebae9d312da.jpg',},
  {pic:'/images/77.jpg',},
  {pic:'/images/0017dfde19062700fcf4266c90658c1f.jpg',},
  {pic:'/images/q.jpg',},
  {pic:'/images/88.jpg',},
  {pic:'/images/23f10fbb0ab293901be3093064932fe1.jpg',},
  {pic:'/images/45a82bf0700196b79c91f132ef488f7a.jpg',},
  {pic:'/images/78.jpg',},
  {pic:'/images/059d15cf9af56a9dea5d47ea11775113.jpg',},
  {pic:'/images/60.jpg',},
  {pic:'/images/61.jpg',},
  {pic:'/images/80.jpg',},
  {pic:'/images/81.jpg',},
  {pic:'/images/58.jpg',},
  {pic:'/images/59.jpg',},
  {pic:'/images/82.jpg',},
  {pic:'/images/79.jpg',},
  {pic:'/images/83.jpg',},
  {pic:'/images/r.jpg',},,
  {pic:'/images/84.jpg',},
  {pic:'/images/92.jpg',},
  {pic:'/images/85.jpg',},
  {pic:'/images/u.jpg',},
  {pic:'/images/86.jpg',},
  {pic:'/images/87.jpg',},
  {pic:'/images/94.jpg',},,
  {pic:'/images/44eae1b5c325946c574266f862f830b6.jpg',},
  {pic:'/images/89.jpg',},
  {pic:'/images/90.jpg',},
  {pic:'/images/91.jpg',},
  {pic:'/images/93.jpg',},
  {pic:'/images/s.jpg',},
  {pic:'/images/70.jpg',},
  {pic:'/images/a.jpg',},
  {pic:'/images/b.jpg',},
  {pic:'/images/95.jpg',},
  {pic:'/images/96.jpg',},
  {pic:'/images/t.jpg',},
  {pic:'/images/98.jpg',},
  {pic:'/images/71.jpg',},
  {pic:'images/b4c078021cf2b62255db87458358d96b.jpg',},





]
takeABreather.create(stuff, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${stuff.length} stuff`)
  mongoose.connection.close();
});