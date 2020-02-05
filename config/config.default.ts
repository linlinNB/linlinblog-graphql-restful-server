import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1580845167023_4684';

  config.cors = {
    origin: '*',
    allowMethods: 'GET, HEAD, PUT, POST, DELETE, PATCH',
  };

  config.security = {
    csrf: {
      ignore: () => true,
    },
  };

  // connect MongoDB
  config.mongoose = {
    client: {
      url: 'mongodb://39.106.161.15:27017/test',
      options: {
        useUnifiedTopology: true,
      },
    },
  };

  config.graphql = {
    router: '/graphql',
    app: true,
    // agent: false,
    // graphiql: true,
    // 是否加载到 app 上，默认开启
    dateScalarMode: 'timestamp',
    // // graphQL路由前拦截器
    // onPreGraphQL: function* (ctx) {
    //
    // },
    // // graphQL路由后拦截器
    // onPreGraphiQL: function* (ctx) {
    //
    // }
  };
  config.cors = {
    origin: '*',
    allowMethods: 'GET, HEAD, PUT, POST, DELETE, PATCH',
  };

  config.security = {
    csrf: {
      ignore: () => true,
    },
  };

  // connect MongoDB
  config.mongoose = {
    client: {
      url: 'mongodb://39.106.161.15:27017/test',
      options: {
        useUnifiedTopology: true,
      },
    },
  };

  config.graphql = {
    router: '/graphql',
    app: true,
    // agent: false,
    // graphiql: true,
    // 是否加载到 app 上，默认开启
    dateScalarMode: 'timestamp',
    // // graphQL路由前拦截器
    // onPreGraphQL: function* (ctx) {
    //
    // },
    // // graphQL路由后拦截器
    // onPreGraphiQL: function* (ctx) {
    //
    // }
  };

  // add your egg config in here
  config.middleware = [];

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
