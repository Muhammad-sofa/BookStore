const express = require('express');
const router = express.Router();
const {auth} = require('../../middlewares/auth');
const {getAllCategories} = require('./controller');
const {createCategories} = require('./controller');
const {updateCategories} = require('./controller');
const {deleteCategories} = require('./controller');

/* GET home page. */
router.get('/categories', auth, getAllCategories);
router.post('/categories', auth, createCategories);
router.put('/categories/:id', auth, updateCategories);
router.delete('/categories/:id', auth, deleteCategories);

module.exports = router;
