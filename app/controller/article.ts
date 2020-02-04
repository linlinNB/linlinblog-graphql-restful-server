import { Controller } from 'egg';
// import ArticleInterFace from '../interface/article';

export default class ArticleController extends Controller {
  /**
   * 作用: 测试article路由存在的页面
   */
  public async index() {
    this.ctx.body = await this.ctx.service.article.sayArticles('Article');
  }

  /**
   * 作用: 获取article表中所有文章
   */
  public async getAllArticles() {
    this.ctx.body = await this.ctx.service.article.getAllArticlesList();
  }

  public async createArticle() {
    // const { ctx: { request } } = this;
    // const params = {
    //   title: request.body.description,
    //   description: request.body.description,
    //   content: request.body.content,
    // };
    console.log('---- createArticle params = ');
    this.ctx.body = await this.ctx.service.article.createArticleInDB();
  }
}
