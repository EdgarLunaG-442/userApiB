const {Router} = require('express');
const userRouter = Router();

const { userGet } = require('../controllers/user.controllers');

userRouter.get('/',userGet)


module.exports = userRouter