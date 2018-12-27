'use strict';

const
    express = require('express'),
    userController = require('../controllers/user');

let router = express.Router();

router.use('/create', userController.create);
router.use('/list', userController.list);

module.exports = router;