import BaseModel from './BaseModel';
import { ObjectType, Field } from 'type-graphql';
import { prop, getModelForClass } from '@typegoose/typegoose';
import { ModelType } from '@typegoose/typegoose/lib/types';

@ObjectType()
export class User extends BaseModel {
  @prop({ required: true })
  @Field({
    nullable: true,
    description: '名称',
  })
  username?: string;

  @prop({ required: true })
  @Field({
    description: '密码',
  })
  password: string;

  public static async findUserList(this: ModelType<User> & typeof User) {
    const user = await this.find();
    return user;
  }

  public static async createUser(this: ModelType<User> & typeof User) {
    const user = await this.create({
      username: '插件测试',
      password: '插件测试',
    });
    return user;
  }
}

const user = getModelForClass(User);

export const UserModel = user;
