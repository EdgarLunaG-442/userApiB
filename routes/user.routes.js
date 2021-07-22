const {Router} = require('express');
const { userGet } = require('../controllers/user.controllers');
const userRouter = Router();

userRouter.get('/',userGet)

module.exports = 
{
    userRouter
}