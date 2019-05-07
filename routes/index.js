const express = require('express');
const router  = express.Router();
const journal = require('../models/journalEntry');
const takeABreather = require('../models/stuff');
const dashboard = require('../models/stuff')
const User = require("../models/user");
const uploadCloud = require ("./cloudinary");


var months = [
  "January", "February", "March", "April",
   "May", "June", "July", "August", "September",
    "October", "November", "December"
]
// var d = post.date.getDate();
// var m = monthNames[post.date.getMonth()];
// var y = post.date.getFullYear();

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
   let question = req.body.question;
   let mood = req.body.bood;
   let song= req.body.SOTD;
   let author = req.user._id

   journal.create({pic, question, mood, song, author}).then(resFromDB=>{
     res.redirect('/dashboard')
   })

  //  router.get('/dashboard', isLoggedIn, (req, res, next) => {
  //   User.findById(req.user._id).populate('favorites')
  //   .then(userInfo => {
  //     journal.find({author:req.user._id}).then(journalLog=> {
  //       console.log("the user info when at the dashboard ---------- ", userInfo);
  //       data = { thoughts:journalLog}
  //       console.log("the info in the data object ========= ", data)
  //       res.redirect('/allPosts', data)
  //     })
  //   })
  //   .catch(err => {
  //     next(err);
  //   }) 
  //  });

    console.log(req.body,req.file, '&^%&^%*&&%^&^%')
 })

 router.get('/allPosts', (req, res, next) => {
  res.render('thoughts/allPosts');
});
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
        var theDay = journalLog[0].date.getDate()
        var theMonth = months[journalLog[0].date.getMonth()];
        var theYear = journalLog[0].date.getFullYear();
        data = {
          userFaves: userInfo.favorites,
          thoughts:journalLog,
          theDate: `${theMonth} ${theDay}, ${theYear}`
        }
        // console.log("the info in the data object ========= ", data, "================ ", theMonth, theDay, theYear)
        res.render('thoughts/mypage', data)
      })
    })
    .catch(err => {
      next(err);
    }) 
   });
 
   router.post("/dashboard/delete/:id", isLoggedIn, (req, res, next) => {
    console.log("Deleted a fave");
    // dashboard.findOneAndDelete({ _id: req.params.id }).then(userFaves => {
      req.user.favorites.pull(req.params.id)
      req.user.save()
      .then(updatedUser => {
        console.log("the new user info ============== ", updatedUser);
        res.redirect("/dashboard");

      })
      .catch(err => {
        next(err)
      })
    });
  // });


   function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
      return next()
    } else {
      res.redirect('/login')
    }
   }


module.exports = router;
