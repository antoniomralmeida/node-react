'use strict';

const
    express = require('express'),
    userController = require('../controllers/user');

let router = express.Router();

router.use('/create', userController.create);
router.use('/list').get((req,res) => {
    userController.list()
    .then(result => res.json(result));
});

module.exports = router;