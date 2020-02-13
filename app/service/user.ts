import { Service } from 'egg';
import { UserModel } from '../model/user';

type LoginType = {
  username: string;
  password: string;
};

export default class UserService extends Service {
  public async add() {
    const result = await UserModel.create({
      username: 'linlin',
      password: '123456',
    });
    return result;
  }

  public async fetchAllUserList() {
    const result = await UserModel.find();
    console.log('---- 查询所有的users = ', result);
    return result;
  }

  public async findUserByPwd(params: LoginType) {
    const { username, password } = params;
    const result = await UserModel.findOne({ username, password });
    return result;
  }
}
