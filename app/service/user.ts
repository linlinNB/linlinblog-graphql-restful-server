import { Service } from 'egg';
import { UserModel } from '../model/user';

export default class UserService extends Service {
  public async add() {
    const result = await UserModel.create({
      username: '林麟',
      password: '卧槽',
    });
    return result;
  }

  public async fetchAllUserList() {
    const { ctx } = this;
    const result = await ctx.model.User.find();
    console.log('---- 查询所有的users = ', result);
    return result;
  }
}
