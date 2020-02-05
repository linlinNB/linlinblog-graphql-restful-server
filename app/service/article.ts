import { Service } from 'egg';
// import ArticleInterFace from '../interface/article';

export default class ArticleService extends Service {
  /**
   * 作用: 测试article的service
   * @param name
   */
  public async sayArticles(name: string) {
    return `Hi, say ${name}`;
  }

  /**
   * 作用: 获取所有文章列表
   */
  public async getAllArticlesList() {
    const allArticlesList = await this.ctx.model.Article.find();
    console.log('---- 获取当前所有文章列表 = ', allArticlesList);
    return allArticlesList;
  }

  /**
   * 作用: 创建一篇文章
   * @param params
   */
  public async createArticleInDB() {
    // 测试数据
    const testCreateArticleParams = {
      title: '卧槽',
      description: '一个测试',
      content: '1111',
    };
    const createArticleInfo = await this.ctx.model.Article.create(testCreateArticleParams);
    return createArticleInfo;
  }
}
