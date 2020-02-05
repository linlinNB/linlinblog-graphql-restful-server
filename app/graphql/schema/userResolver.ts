import { Context } from 'egg';
import { Ctx } from 'type-graphql';
import { User, UserModel } from '../../model/User';
import { Resolver, Query, Mutation } from 'type-graphql';

@Resolver(User)
export class UserResolver {
  @Query(() => [User], { description: '获取所有用户列表' })
  async getUser() {
    return await UserModel.findUserList();
  }

  @Mutation(() => User, { description: '增加用户 ' })
  async addUser() {
    return await UserModel.createUser();
    // return await UserService.add();
  }

  @Mutation(() => User, { description: '通过service来增加用户' })
  async addUserByService(@Ctx() ctx: Context) {
    return await ctx.service.user.add();
  }
}
