const router = require('express').Router();
const UserController = require('./controller');

const path = '/users';

// >> Here will be the
// definition of the routes.

router.get('', UserController.getAllUsers);
router.get('/user/:id', UserController.getUser);
router.post('/createUser', UserController.createUser);
router.put('/update/:id', UserController.updateUser);
router.delete('/delete/:id', UserController.deleteUser);

module.exports = {
  path,
  router,
}