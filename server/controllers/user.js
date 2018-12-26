'use strict';

const User = require('../model/user')

function create (req, res) {
  User.save({
  username: 'janedoe',
  birthday: new Date(1980, 6, 20)
  });

  res.render('/index', {
        title: 'Home'
    });
}

function info (req, res) {
    res.render('home/info', {
        title: 'More info'
    });
}

module.exports = {
    create: create,
    info: info
};

