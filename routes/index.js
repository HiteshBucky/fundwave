var express = require('express');
var router = express.Router();
var {k} = require('../function')


console.log("HEllo")

router.get('/', (req, res) => {
	res.render('data', {k})
})



module.exports = router;


