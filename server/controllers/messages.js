var models = require('../models');

module.exports = {


  get: function (req, res) {

    models.messages.getAll((err, data) => {
      if (err) {
        res.json(err);
      } else {
        res.json(data);
      }
    });
  },





  post: function (req, res) {

    var bodyData = [ req.body.username, req.body.message, req.body.roomname ];

    models.messages.create(bodyData, (err, data) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.sendStatus(201);
      }
    });
  }
};

