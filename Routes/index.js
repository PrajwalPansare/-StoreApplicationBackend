const express = require('express');
const router = express.Router();
const controller = require('../Controllers/index');

router.get('/lnc',controller.getAllItems);
router.get('/Search_category/:category',controller.get_search_category);
router.get('/option_category',controller.getallcategory);

module.exports = router;