import { Application } from 'egg';
// import ArticleInterFace from '../interface/article';

module.exports = (app: Application) => {
  const { router, controller } = app;
  // 定义当前的namespace
  const articleRouter = router.namespace('/article');
  // 定义当前返回的数据
  articleRouter.get('/', controller.article.index);
  articleRouter.get('/list', controller.article.getAllArticles);
  articleRouter.get('/create', controller.article.createArticle);
  // articleRouter.post("/create", controller.article.createArticle);
};
