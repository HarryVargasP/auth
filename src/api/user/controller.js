const {model} = require('./model'); 
const UserController = {};

// >> Here will be the
// endpoints for the Users.

UserController.getAllUsers = (req, res) => {
    model.find({}, { username: 1, password: 1})
    .then((users) => res.status(200).json(users))
    .catch((err) => res.status(400).json(err));
};

UserController.getUser = (req, res) => {
    let { id } = req.params;

    model.findById(id, { username: 1, password: 1})
    .then((user) => res.status(200).json(user))
    .catch((err) => res.status(400).json(err));
};

UserController.updateUser = (req, res) => {
    let { id } = req.params;
    model.updateOne({_id:  id},req.body)
    .then((user) => res.status(200).json(user))
    .catch((err) => res.status(400).json(err));
};
  
  
UserController.deleteUser = (req, res) => {
      let { id } = req.params;
      model.findByIdAndDelete(id)
      .then(user =>  res.status(200).json(user))
      .catch(err => res.status(400).json(err));
};

module.exports = UserController;