const Sequelize = require('sequelize');

// Database
const db = require('../config/database').db;

const User = db.define('user', {
    username: Sequelize.STRING,
    birthday: Sequelize.DATE
  });
  
  
function save(user){
       User.create(user)
            .then(jane => {
            console.log(jane.toJSON());        
        });
}

function list() {
    results =  [];
    User.findAll({ limit: 10 }).then( rows  => results = JSON.stringify(rows));  
    console.log(results);
    return results;
}
  
 module.exports = {User, save, list};
