import { Context } from 'egg';
import { Ctx } from 'type-graphql';
import { User, UserModel } from '../../model/user';
import { Resolver, Query, Mutation, Arg } from 'type-graphql';

@Resolver(User)
export class UserResolver {
  @Query(() => [User], { description: '获取所有用户列表' })
  async users() {
    return await UserModel.findUserList();
  }

  @Query(() => User, { description: '登录根据email和password进行查找' })
  async findUserByEmailAndPwd(
    @Arg('username') username: string,
    @Arg('password') password: string,
    @Ctx() ctx: Context,
  ) {
    console.log('---- 根据email和pwd进行登录的操作 --- ');
    return await ctx.service.user.findUserByEmailAndPwd({ username, password });
  }

  @Query(() => User, { description: '登录根据二维码扫码进行查找捏' })
  async findUserByScanQrCode(@Arg('telephone') telephone: string, @Ctx() ctx: Context) {
    console.log('----- 根据二维码扫描进行登录操作 ---- ');
    return await ctx.service.user.findUserByQrCode({ telephone });
  }

  @Mutation(() => User, { description: '增加用户 ' })
  async addUser(
    @Arg('username', { nullable: true }) username: string,
    @Arg('password', { nullable: true }) password: string,
    @Ctx() ctx: Context,
  ) {
    console.log('==== 创建用户 = ', username, password);
    return await ctx.service.user.add();
  }

  @Mutation(() => User, { description: '通过service来增加用户' })
  async addUserByService(@Ctx() ctx: Context) {
    return await ctx.service.user.add();
  }
}
