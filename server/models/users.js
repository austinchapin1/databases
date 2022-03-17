var db = require('../db');

module.exports = {
  // ERROR FIRST CB?
  getAll: function (callback) {
    connection.query('STRING TO PASS TO MYSQL'), (err, results) => {
      if (err) {
        console.log(err);
      } else {
        callback(null, results);
      }
    };
  },
  create: function () {}
};



// // simple query
// connection.query(
//   'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45',
//   function(err, results, fields) {
//     console.log(results); // results contains rows returned by server
//     console.log(fields); // fields contains extra meta data about results, if available
//   }
// );

// // with placeholder
// connection.query(
//   'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
//   ['Page', 45],
//   function(err, results) {
//     console.log(results);
//   }
// );