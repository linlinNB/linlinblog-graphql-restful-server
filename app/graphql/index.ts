import { Application } from 'egg';
import { buildSchema } from 'type-graphql';
// // 导入apollo，重构GraphQL的逻辑，抛弃原有的egg-graphql
import { ApolloServer } from 'apollo-server-koa';
import { GraphQLSchema, GraphQLFormattedError, SourceLocation } from 'graphql';
// tslint:disable-next-line:no-var-requires
const path = require('path');

export interface GraphQLConfig {
  router: string;
  dataScalarMode?: 'isoDate' | 'timestamp';
  graphiql: boolean;
}

export default class GraphQL {
  private readonly app: Application;
  private graphqlSchema: GraphQLSchema;
  private config: GraphQLConfig;

  constructor(app: Application) {
    this.app = app;
    this.config = app.config.graphql;
  }

  getResolvers() {
    const baseProjectEnv = this.app.config.env === 'local';
    return [
      path.resolve(
        this.app.baseDir,
        `app/graphql/schema/**/*.${baseProjectEnv ? 'ts' : 'js'}`,
      ),
    ];
  }

  async init() {
    // 配置apollo的schema
    this.graphqlSchema = await buildSchema({
      resolvers: this.getResolvers(),
      dateScalarMode: 'timestamp',
    });
    // 配置apollo的server
    const server = new ApolloServer({
      schema: this.graphqlSchema,
      formatError: error => {
        console.log('---- apollo server 出现错误 = ', error);
        const projectErrorInfo = new FormatError();
        projectErrorInfo.message = error.message;
        projectErrorInfo.path = error.path;
        if (this.app.config.env === 'local') {
          projectErrorInfo.extensions = error.extensions;
          projectErrorInfo.locations = error.locations;
        }
        return projectErrorInfo;
      },
      tracing: false,
      context: ({ ctx }) => ctx, // 将egg的context中加入resolver字段，进行上下问传递
      introspection: true,
    });
    // 启用apollo-graphql，放在中间件中
    server.applyMiddleware({
      app: this.app,
      path: this.config.router,
      cors: false,
    });
    this.app.logger.info('apollo graphql server finished init!!!');
  }

  get schema(): GraphQLSchema {
    return this.graphqlSchema;
  }
}

class FormatError implements GraphQLFormattedError {
  message: string;
  locations?: readonly SourceLocation[] | undefined;
  path?: readonly (string | number)[] | undefined;// eslint-disabled-line
  extensions?: Record<string, any> | undefined;
}
