'use strict';

const
    userRoute = require('./user');

function init(server) {

    server.get('/', function (req, res) {
        res.redirect('/home');
    });

    server.use('/user', userRoute);
}

module.exports = {
    init: init
};
