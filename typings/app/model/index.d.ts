// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBaseModel from '../../../app/model/BaseModel';
import ExportUser = require('../../../app/model/User');
import ExportArticle from '../../../app/model/article';
import ExportUser from '../../../app/model/user';

declare module 'egg' {
  interface IModel {
    BaseModel: ReturnType<typeof ExportBaseModel>;
    User: ReturnType<typeof ExportUser>;
    Article: ReturnType<typeof ExportArticle>;
  }
}
