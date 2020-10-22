const router = require('express').Router();
const UserController = require('./controller');

const path = '/users';

// >> Here will be the
// definition of the routes.

router.get('', UserController.getAllUsers);
router.get('/getUser/:id', UserController.getUser);
//router.put('/update', UserController.updateUser);
//router.delete('/delete', UserController.deleteUser);

module.exports = {
  path,
  router,
}