const router = require('express').Router();
const AuthController = require('./controller');

const path = '/auth';

const user = require("../user");

// >> Here will be the
// definition of the routes.

router.post('/token', AuthController.signIn);

module.exports = {
  path,
  router,
}