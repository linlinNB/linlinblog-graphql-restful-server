import { Controller } from "egg";

export default class UserController extends Controller {
  public async add() {
    this.ctx.body = await this.ctx.service.user.add();
  }

  public async getAllUserInfo() {
    this.ctx.body = await this.ctx.service.user.fetchAllUserList();
  }
}
