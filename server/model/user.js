// Database
const db = require('../config/database');

const User = db.define('user', {
    username: Sequelize.STRING,
    birthday: Sequelize.DATE
  });
  
  db.sync()
    .then(() => User.create({
      username: 'janedoe',
      birthday: new Date(1980, 6, 20)
    }))
    .then(jane => {
      console.log(jane.toJSON());
    });
  
  
  