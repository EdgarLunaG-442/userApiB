const {Router} = require('express');
const { rolPost } = require('../controllers/rol.controller');
const rolRouter = Router();

rolRouter.post('/',rolPost)

module.exports = rolRouter