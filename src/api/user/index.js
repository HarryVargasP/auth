const router = require('express').Router();
const { authenticate } = require("../../services/middlewares");
const UserController = require('./controller');

const path = '/users';

// >> Here will be the
// definition of the routes.

router.get('', UserController.getAllUsers);
router.get('/user/:id', authenticate, UserController.getUser);
router.post('/createUser', UserController.createUser);
router.put('/update/:id', UserController.updateUser);
router.delete('/delete/:id', UserController.deleteUser);

module.exports = {
  path,
  router,
}