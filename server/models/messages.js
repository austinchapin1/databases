var db = require('../db');

module.exports = {
  // a function which produces all the messages
  getAll: function (callback) {
    connection.query('SELECT messages FROM messageList'), (err, results) => {
      if (err) {
        console.log(err);
      } else {
        callback(null, results);
      }
    };
  },
  // a function which can be used to insert a message into the database
  create: function (callback) {
    connection.query('INSERT INTO messageList (id, users, messages, rooms) VALUES (id, users, messages, rooms)'), (err, results) => {
      if (err) {
        console.log(err);
      } else {
        callback(null, results);
      }
    };
  }
};

