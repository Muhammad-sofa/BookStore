const express = require('express');
const router = express.Router();
const {auth} = require('../../middlewares/auth');
const {getAllCategories} = require('./controller');
const {createCategories} = require('./controller');

/* GET home page. */
router.get('/categories', auth, getAllCategories);
router.post('/categories', auth, createCategories);

module.exports = router;
