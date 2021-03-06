const Router = require('express').Router;

const { authMiddleware } = require('../middlewares');
const { userController } = require('../controllers');

const userRouter = Router();

userRouter.post('/sign-up', authMiddleware, userController.signUp);
userRouter.post('/sign-out', authMiddleware, userController.signOut);
userRouter.get('/:userId', userController.getUser);

module.exports = {
  userRouter,
};
