const router = require('express').Router();

const path = '/auth';

const user = require("../user");
const { model, schema } = require("../user/model");

// >> Here will be the
// definition of the routes.

router.get("/", async (req, res) => {
  let base_uri = req.protocol + "://" + req.hostname + path;
  res.json({
    register: `${base_uri}`,
    login: `${base_uri}/login`,
  });
});

module.exports = {
  path,
  router,
}