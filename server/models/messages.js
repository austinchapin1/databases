var db = require('../db');

module.exports = {

  getAll: function (callback) {

    var queryString = 'SELECT messages.messageText, messages.roomname, users.username \
                      FROM messages LEFT OUTER JOIN users \
                      ON messages.userID=users.id';

    db.connection.query(queryString, (err, results) => {
      if (err) {
        callback(err);
        console.error('This is line 13 in /modes/messages.js');
      } else {
        callback(null, results);
      }
    });
  },


  create: function (bodyData, callback) {

    var queryString = 'INSERT INTO messages(usersID, messageText, rooms) VALUES ((SELECT usersID FROM users where username = ?), ?, ?)';

    db.connection.query(queryString, bodyData, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  }
};

