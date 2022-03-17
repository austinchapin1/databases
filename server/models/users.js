var db = require('../db');

module.exports = {

  getAll: function (callback) {

    var queryString = 'SELECT * FROM users';

    db.connection.query(queryString, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  },



  create: function (user, callback) {

    var queryString = 'INSERT INTO users(username) VALUES (?)';

    db.connection.query(queryString, user, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  }
};
