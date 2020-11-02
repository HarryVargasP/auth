const {model} = require("../user/model");
const {jwtSignIn} = require("../../services/jwt")

const AuthController = {};

// >> Here will be the
// endpoints for the Users.

AuthController.signIn = ({body: {username, password}}, res) => {
    model.findOne({username}, {__v: 0, createdAt: 0, updatedAt: 0})
    .then((user) => user ? user : null)
    .then((user) => user.validatePassword(password) ? jwtSignIn(user) : null)
    .then((token) => res.json({
        token: token,
        type: "Bearer"
    }))
    .catch((err) => res.status(401).json(err));
};

module.exports = AuthController;