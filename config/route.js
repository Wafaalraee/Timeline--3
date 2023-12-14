const express = require('express');
const route = express.Router();
const postController = require('../controller/postController');

route.get('/', postController.goHomePage);
route.post('/post', postController.createPost);
route.post('/delete-user/:id', postController.deleteUser);


module.exports = route;

