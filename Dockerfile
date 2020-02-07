FROM node:alpine
WORKDIR /linlinblog_graphql_server
COPY . /linlinblog_graphql_server/
RUN npm i -g typescript eslint --registry=https://registry.npm.taobao.org
RUN npm i --registry=https://registry.npm.taobao.org
RUN npm run ci
EXPOSE 7001
CMD npm run start


