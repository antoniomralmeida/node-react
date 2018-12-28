'use strict';

const user = require('../model/user')

function create (req, res) {
  user.create({username: req.query.username,
    birthday: req.query.birthday,
    email: req.query.email})
    .then(u => res.send(u) )  
   .catch(err => res.send(err));  
}

function list(req, res) {
    user.findAll({})
    .then( rows  => res.json(rows) )
    .catch(err => res.status(412));  
}

module.exports = {
    create: create,
    list, list
};

