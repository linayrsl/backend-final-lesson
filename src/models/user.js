const mongoose = require('mongoose');

const User = new mongoose.model('User', {
    name: String,
    username: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: new Date()
    }
});

module.exports = User;