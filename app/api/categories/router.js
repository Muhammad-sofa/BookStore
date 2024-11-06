const express = require('express');
const router = express.Router();
const {auth} = require('../../middlewares/auth');

/* GET home page. */
router.get('/categories', auth, function(req, res) {
     res.status(200).json({message: 'Router auth'});
});

module.exports = router;
