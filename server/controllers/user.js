'use strict';

const user = require('../model/user')

function create (req, res) {
    const json = {username:'xxxxxx',
    birthday: new Date(2018,12,26)};

  user.save(json);
  res.json(json);
}

function list(result) {
    user.list(result);
}

module.exports = {
    create: create,
    list, list
};

