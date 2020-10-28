const router = require('express').Router();
const AuthController = require('./controller');

const path = '/auth';

const user = require("../user");
const { model, schema } = require("../user/model");

// >> Here will be the
// definition of the routes.

router.get("", async (req, res) => {
  let base_uri = req.protocol + "://" + req.hostname + path;
  res.json({
    register: `${base_uri}`,
    login: `${base_uri}/login`,
  });
});

router.get('/user/:id', AuthController.getUser);
router.get('/validate', AuthController.validateUser);

module.exports = {
  path,
  router,
}