// Requires: Express, router, and burger.js
var express = require('express');
var router = express.Router();
var db = require('../models/burger.js');

// router for /
router.route('/')
    .get(function(req,res){
        db.seeBurger(function(burger_data){
            // console.log('I'm here...);
            res.render('index', {burger_data: burger_data});
        });
});

// route for /add
router.route('/add')
    .get(function(req,res){
        db.seeBurger(function(burger_data){
            // console.log('GET ADD');
            res.render('index', {burger_data: burger_data});
        });
    })
    .post(function(req,res){
        db.addBurger(req.body.new_burger_name, function(result){
            // console.log('ADD');
            res.redirect('/');
        });
});

// route for /eat
router.route('/eat')
    .put(function(req,res) {
        db.eatBurger(req.body.burger_id, function(result) {
            // console.log('EAT');
            res.redirect('/');
        })
    })
    .get(function(req,res){
        db.seeBurger(function(burger_data){
            // console.log('GET EAT');
            res.render('index', {burger_data: burger_data});
        });
});

module.exports = router;