const Sequelize = require('sequelize');

const db = new Sequelize('node', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  operatorsAliases: false
});

function start() {
  db.authenticate()
  .then(()=> console.log('Database conected.'))
  .catch(err => console.log(err)); 
}

module.exports = {db, start};
