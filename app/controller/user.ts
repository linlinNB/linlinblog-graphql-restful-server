import { Controller } from 'egg';

const jwt = require('jsonwebtoken');

export default class UserController extends Controller {
  public async add() {
    this.ctx.body = await this.ctx.service.user.add();
  }

  public async getAllUserInfo() {
    this.ctx.body = await this.ctx.service.user.fetchAllUserList();
  }

  /**
   * 作用: 按照密码登录，这里使用koa-jwt进行统一管理
   */
  public async loginByPwd() {
    const data = this.ctx.request.body;
    // 获取等待校验的username和password
    const { username, password } = data;
    console.log('---- 获取loginByPwd的data = ', data);
    if (!username || !password) {
      return (this.ctx.body = {
        msg: '参数不合法',
      });
    }
    const result = await this.ctx.service.user.findUserByPwd({ username, password });
    if (!result) {
      this.ctx.body = {
        code: 500,
        status: 500,
        msg: '账户和密码错误',
      };
    } else {
      console.log('---- 开始使用jwt加密信息 ---- ');
      const token = jwt.sign(
        {
          name: username,
          _id: result._id,
        },
        'my_token',
        {
          expiresIn: '2h',
        },
      );
      return (this.ctx.body = {
        data: token,
        msg: 'success',
      });
    }
  }

  /**
   * 作用: 测试是否需要登录
   */
  public testNeedLogin() {
    const { ctx } = this;
    ctx.body = '验证过的接口返回的数据';
  }
}
