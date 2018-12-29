'use strict';

const user = require('../model/user')

function create (req, res) {
  user.create({username: req.query.username,
    birthday: req.query.birthday,
    email: req.query.email})
    .then(u => res.send(u) )  
   .catch(err => res.send(err));  
}


function update (req, res) {
  user.update({username: req.query.username,
    birthday: req.query.birthday,
    email: req.query.email},{where:{id:req.params.id}})
    .then(u => res.send(u) )  
   .catch(err => res.send(err));  
}


function find(req, res) {  
    user.findAll({})
    .then( rows  => res.send(rows) )
    .catch(err => res.status(412));  
}

function destroy (req, res) {
    const id = req.params.id;
    user.destroy({where: {id:id}})
      .then(u => res.json(u) )  
     .catch(err => res.send(err));  
} 

module.exports = {create, update, find, destroy};

