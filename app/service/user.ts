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
    // const { ctx } = this;
    // console.log('--- ctx = ', ctx.model);
    // const result = await ctx.model.user.find();
    const result = await UserModel.find();
    console.log('---- 查询所有的users = ', result);
    return result;
  }
}
