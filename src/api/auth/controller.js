const AuthController = {};

// >> Here will be the
// endpoints for the Users.

AuthController.getUser = (req, res) => {
    let { id } = req.params;

    model.findById(id, { username: 1, password: 1, __v: 1 })
    .then((user) => res.status(200).json(user))
    .catch((err) => res.status(400).json(err));
};

AuthController.validateUser = async (req, res) => {
    let { username, password } = req.body;

    user = await model.findOne({ username: username }).then(async (user) => {
        const match = await user.validatePassword(password);
        if (match) {
          res.status(200).json({ msg: "Validated" });
        } else {
          res.status(401).json({ msg: "Unauthorized" });
        }
    });
};

module.exports = AuthController;