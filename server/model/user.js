const Sequelize = require('sequelize');

// Database
const db = require('../config/database').database;

const User = db.define('user', {
    username: Sequelize.STRING,
    birthday: Sequelize.DATE
  });
  
  
function save(user){
       User.create(user)
            .then(n => {
            console.log(n.toJSON());        
        });
}

function list(result) {
    User.findAll({})
    .then( rows  => result = JSON.stringify(rows))
    .catch(err => result.status(412));  
}
  
 module.exports = {User, save, list};
