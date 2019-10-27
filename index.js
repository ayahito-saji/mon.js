var express = require("express");

var modeling = function (mon) {
  var models = {};

  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  models["User"] = new Schema({
    name: { type: String }
  });

  mongoose.model('user', User);
}

var server = function (mon) {
  var app = express();

  app.use(function (req, res, next) {
    console.log('%s %s', req.method, req.path)
    next()
  })

  Object.keys(mon.models).forEach(function (modelName) {
    modelName = modelName.toLowerCase();
    var model = mon.models[modelName];

    // index
    app.get("/"+modelName, function (req, res) {
      res.send(modelName);
    });

    // read
    app.get("/"+modelName+"/:id", function (req, res) {
      res.send(modelName);
    });

    // create
    app.post("/"+modelName, function (req, res) {
      res.send(modelName);
    });

    // update
    app.patch("/"+modelName, function (req, res) {
      res.send(modelName);
    });

    // delete
    app.delete("/"+modelName, function (req, res) {
      res.send(modelName);
    });
  });

  return app;
}

module.exports = function () {
  this.db = {};
  this.models = {};

  this.server = function (args) {
    // args
    var args = args || {};
    var PORT = args.port || 8080;

    // database setup

    var models = models(this);

    // server setup
    server(this).listen(PORT, function () {
      console.log("Listen to port "+PORT);
    });
  };
  this.routes = function () {
    console.log("Routes");
  }
};
