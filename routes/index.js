const express = require('express');
const router  = express.Router();
const todaysEntry = require('../models/journalEntry');
const takeABreather = require('../models/stuff');
const dashboard = require('../models/stuff')
const User = require("../models/user");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});
router.get('/today', (req, res, next) => {
  todaysEntry.find().then(entry =>{
    console.log(entry)
    res.render('thoughts/journal',{entry})
  })
   .catch(err =>{
     console.log(err)
   })
 });

 router.post('/allPosts', (req, res, next) => {
   req.user._id
 })

 router.get('/chillout', (req, res, next) => {
  takeABreather.find().then(stuff =>{
    console.log(stuff)
    res.render('thoughts/stuff',{stuff})
  })
   .catch(err =>{
     console.log(err)
   })
 });
  router.post("/chillout/:id", (req, res, next) => {
    if(!req.user) { res.redirect('/login')}
    dashboard.findOne({ _id: req.params.id })
      .then(stuff => {
        console.log("the stuff to add", stuff);
        req.user.favorites.push(stuff._id)
        req.user.save()
        .then(updatedUser => {
          console.log("updated user fav's -------- ", updatedUser)
          res.redirect("/dashboard")
        })
        .catch(err => {
          next(err);
        });
      })
      .catch(err => {
        next(err);
      });
   });


   router.get('/dashboard', (req, res, next) => {
     if(!req.user) { res.redirect('/login')}
    User.findById(req.user._id).populate('favorites')
    .then(userInfo => {
      console.log("the user info when at the dashboard ---------- ", userInfo);
      data = {
        userFaves: userInfo.favorites
      }
      console.log("the info in the data object ========= ", data)
      res.render('thoughts/mypage', data)
    })
    .catch(err => {
      next(err);
    }) 
   });




module.exports = router;
