const express = require('express');
const router  = express.Router();
const todaysEntry = require('../models/journalEntry');
const takeABreather = require('../models/stuff');
const dashboard = require('../models/stuff')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});
router.get('/today', (req, res, next) => {
  todaysEntry.find().then(entry =>{
    console.log(entry)
    res.render('../views/thoughts/journal.hbs',{entry})
  })
   .catch(err =>{
     console.log(err)
   })
 });

 router.get('/chillout', (req, res, next) => {
  takeABreather.find().then(stuff =>{
    console.log(stuff)
    res.render('../views/thoughts/stuff.hbs',{stuff})
  })
   .catch(err =>{
     console.log(err)
   })
 });
  router.get("/chillout/{{id}}", (req, res, next) => {
    dashboard.findOne({ _id: req.query.stuff_id })
      .then(stuff => {
        res.redirect("/dashboard", { stuff })
      })
      .catch(error => {
        console.log(error);
      });
   });


   router.get('/dashboard', (req, res, next) => {
    res.render('thoughts/mypage');
   });

   router.post("/dashboard", (req, res, next) => {
     const {pic } = req.body;
     dashboard.update({ _id: req.query.stuff_id }, { $set: {pic} })
       .then(stuff => {
         res.redirect('../views/thoughts/mypage.hbs');
       })
       .catch(error => {
         console.log(error);
       });
   });


module.exports = router;
