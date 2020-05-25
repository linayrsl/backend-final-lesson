const User = require('../models/user');

class Users {
    getAll(req, res) {
        User.find()
            .then((users) => res.json(users))
            .catch((error) => res.status(500).json(error));
    }
}

module.exports = new Users();