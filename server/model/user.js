const Sequelize = require('sequelize');

// Database
const db = require('../config/database').db;

const User = db.define('user', {
    username: Sequelize.STRING,
    birthday: Sequelize.DATE
  });
  
  
function save(user){
    function save(user){
        console.log('user.save');
        User.create({user})
            .then(jane => {
            console.log(jane.toJSON());
            
        });
    }
}
  
 module.exports = {User, save};
