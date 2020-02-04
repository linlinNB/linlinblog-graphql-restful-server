import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
  // 开始cors跨域访问
  cors: {
    enable: true,
    package: 'egg-cors',
  },
  // 使用egg-router-plus进行路由拆分，习惯了根据namespace进行路由管理的方式
  routerPlus: {
    enable: true,
    package: 'egg-router-plus',
  },
  // 使用mongoose连接MongoDB
  mongoose: {
    enable: true,
    package: 'egg-mongoose',
  },
  // 使用egg-graphQL支持graphQL, 后期使用apollo-koa-schema进行设置
  // graphql: {
  //     enable: true,
  //     package: 'egg-graphql',
  // },
};

export default plugin;
