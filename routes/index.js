const express = require('express');
const router  = express.Router();
const journal = require('../models/journalEntry');
const takeABreather = require('../models/stuff');
const dashboard = require('../models/stuff')
const User = require("../models/user");
const uploadCloud = require ("./cloudinary");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});
router.get('/today', (req, res, next) => {
  journal.find().then(entry =>{
    console.log(entry)
    res.render('thoughts/journal',{entry})
  })
   .catch(err =>{
     next(err)
   })
 });

 router.post('/allPosts', uploadCloud.single('pic'), (req, res, next) => {
   let pic = req.file.url;
   let Question = req.body.Question;
   let mood = req.body.bood;
   let song= req.body.SOTD;
   let author = req.user._id

   journal.create({pic, Question, mood, song, author}).then(resFromDB=>{
     res.redirect('/dashboard')
   })

    console.log(req.body,req.file, '&^%&^%*&&%^&^%')
 })

 router.get('/chillout', (req, res, next) => {
  takeABreather.find().then(stuff =>{
    console.log(stuff)
    res.render('thoughts/stuff',{stuff})
  })
   .catch(err =>{
    next(err)
   })
 });
  router.post("/chillout/:id", isLoggedIn, (req, res, next) => {
    //if(!req.user) { res.redirect('/login')}
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


   router.get('/dashboard', isLoggedIn, (req, res, next) => {
    User.findById(req.user._id).populate('favorites')
    .then(userInfo => {
      journal.find({author:req.user._id}).then(journalLog=> {
        console.log("the user info when at the dashboard ---------- ", userInfo);
        data = {
          userFaves: userInfo.favorites,
          thoughts:journalLog
        }
        console.log("the info in the data object ========= ", data)
        res.render('thoughts/mypage', data)
      })
    })
    .catch(err => {
      next(err);
    }) 
   });


   function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
      return next()
    } else {
      res.redirect('/login')
    }
   }


module.exports = router;
