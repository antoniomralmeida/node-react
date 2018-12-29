'use strict';

const
    express = require('express'),
    userController = require('../controllers/user');

let router = express.Router();

router.use('/find', userController.find);
router.get('/create', userController.create);
router.get('/update/:id', userController.update);
router.use('/destroy/:id', userController.destroy);
module.exports = router;