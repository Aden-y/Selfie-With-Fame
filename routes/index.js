var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Selfie-With-fame' });
});

router.post('/',function(req,res,next) {
	// body...
	console.log(req.body.data);
});

module.exports = router;
