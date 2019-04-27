/*var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/selfiewithfame');
var db=mongoose.connection;

//User schema

var userSchema=mongoose.Schema({

	username:{
		type:String,
		index:true
	},
	password:{
		type:String
	}
});

var User = module.exports=mongoose.model('User',userSchema);
module,exports.createUser = function (newUser,callback) {
	// body...
	newUser.save(callback);
}*/
//var MongoClient = require('mongodb').MongoClient;
/*var url = "mongodb://localhost:3000/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("selfiewithfame");

  var myobj = { username: "username", password: "password" };

  ///Create Collection
    dbo.createCollection("users", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
});

  dbo.collection("users").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
  });*/