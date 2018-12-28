const Sequelize = require('sequelize');

// Database
const db = require('../config/database').database;

module.exports  = db.define('user', {
    username: {type: Sequelize.STRING, unique: true},
    birthday: Sequelize.DATE,
    email: {type: Sequelize.STRING, isemail: true}
});
  
  