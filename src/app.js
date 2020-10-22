const http = require('http');
const { env, mongo, port, ip, apiRoot } = require('./config');
const mongoose = require('./services/mongoose');
const express = require("./services/express");

const api = require('./api');

// >> Here is where the app
// is initializated and the
// server start running
//
// A) Uncomment this lines:
const app = express(apiRoot, api);
const server = http.createServer(app);

// >> Here will be the connection
// to mongodb.

mongoose.connect(mongo.uri, { 
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then((db) => {
    console.log("Conexión establecida con MongoDB");
  })
  .catch((err) => {
    console.log(`Error al conectar con MongoDB: ${err}`);
  });

setImmediate(() => {
  server.listen(port, ip, () => {
    console.log('Express server listening on http://%s:%d, in %s mode', ip, port, env)
  })
})

module.exports = app;