const {model} = require('./model'); 
const UserController = {};

// >> Here will be the
// endpoints for the Users.

UserController.getAllUsers = (req, res) => {
    model.find({})
    .then((users) => res.status(200).json(users))
    .catch((err) => res.status(400).json(err));
};

UserController.getUser = (req, res) => {
    let { id } = req.params;

    model.findById(id)
    .then((user) => res.status(200).json(user))
    .catch((err) => res.status(400).json(err));
};

UserController.createUser = async (req, res) => {
    let newUser = new model(req.body);
    await newUser
    .save()
    .then(() => {
      //console.log(newUser);
      res.json({ msg: "User created" });
    })
    .catch((e) => {
      //console.log(err);
      res.status(500).json(e);
    });
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