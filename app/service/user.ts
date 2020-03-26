import { Service } from 'egg';
import { UserModel } from '../model/user';

type emailAndPwdParams = {
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

  public async findUserByEmailAndPwd(params: emailAndPwdParams) {
    const { username, password } = params;
    const result = await UserModel.findOne({ username, password });
    return result;
  }

  public async findUserByQrCode({ telephone }) {
    console.log('---- 进入二维码扫描登录的service ---  = ', telephone);
    const result = await UserModel.findOne({ telephone });
    console.log('---- 二维码扫码查询结果 = ', result);
    return result;
  }
}
