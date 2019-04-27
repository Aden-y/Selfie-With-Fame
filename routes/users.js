var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer({dest:'./uploads'});
var sockets=require('socket.io');
var User = require('../modals/user');
/* GET users listing. */
router.get('/', function(req, res, next) {
   res.send('respond with a resource');
});

router.get('/dashboard', function(req, res, next) {
  res.render('dashboard', { title: 'Selfie-With-fame' });
});

router.post('/register',function(req,res,next) {
	// body...
	var data=req.body;
	var username=data.username;
	var password=data.password;
	var newUser= new User({
		username:username,
		password:password
	});
	/*User.createUser(newUser, function(err,user){
		if (err) {
			throw err;
		}
		console.log(user);
	});
	res.location('/');
	res.redirect('/');*/

var MongoClient = require('mongodb').MongoClient

var URL = 'mongodb://localhost:3000/selfiewithfame';

MongoClient.connect(URL, function(err, db) {
  if (err) return

  var collection = db.collection('users');
  collection.insert({username: username, password: password}, function(err, result) {
    /*collection.find({name: 'taco'}).toArray(function(err, docs) {
      console.log(docs[0])
      db.close()
    })*/
  });
   db.close();
});

});

router.post('/login',function(req,res,next) {
	console.log(JSON.parse(req.body.password));
	var data=req.body;
	var username=data.username;
	var password=data.password;
	var MongoClient = require('mongodb').MongoClient

	var URL = 'mongodb://localhost:3000/selfiewithfame';

	MongoClient.connect(URL, function(err, db) {
	  if (err) return

	  var collection = db.collection('users');
	    collection.find({username: username}).toArray(function(err, docs) {
	      var pwd=docs[1];
	      if (pwd===password) {	res.location('/dashboard');res.redirect('/dashboard');}
	      db.close();
	    })
	  
	});

});


router.post('/add',function(req,res,next){
	console.log(req.body);
});
module.exports = router;
