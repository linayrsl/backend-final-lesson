const express = require('express');
const users = require('../controllers/users');
const apiRouter = express.Router();

apiRouter.get('/user', users.getAll);

module.exports = apiRouter;