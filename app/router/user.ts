import { Application } from 'egg';

module.exports = (app: Application) => {
  const { router, controller } = app;
  // 定义当前的namespace
  const userRouter = router.namespace('/user');
  // 定义当前返回的数据
  userRouter.get('/list', controller.user.getAllUserInfo);
  userRouter.get('/add', controller.user.add);
};
