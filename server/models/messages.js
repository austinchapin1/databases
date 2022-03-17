var db = require('../db');

module.exports = {
  // a function which produces all the messages
  // What do we want to get?
  // messages, username, and room?
  getAll: function (callback) {
    connection.query('SELECT messages.messages, userNames.users, messages.rooms FROM messages INNER JOIN userNames '), (err, results, fields) => {
      if (err) {
        console.log(err);
      } else {
        callback(null, results);
      }
    };
  },
  // a function which can be used to insert a message into the database
  create: function (callback) {
    connection.query('INSERT INTO messages (id, users, messages, rooms) VALUES ***(id, ${users}, messages, rooms)***'), (err, results) => {
      if (err) {
        console.log(err);
      } else {
        callback(null, results);
      }
    };
  }
};

