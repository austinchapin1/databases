var models = require('../models');

module.exports = {
  get: function (req, res) {

    models.users.getAll((err, results) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.json(results);
      }
    });
  },




  post: function (req, res) {

    var userData = [ req.body.username ];

    models.users.create(userData, (err, results) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.sendStatus(201);
      }
    });
  }
};
