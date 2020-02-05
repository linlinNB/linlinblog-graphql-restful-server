FROM node:alpine
WORKDIR /linlinblog_graphql_server
COPY . /linlinblog_graphql_server/
RUN npm install
RUN npm run ci
EXPOSE 7001
CMD npm start

#RUN mkdir -p /usr/src/app
#WORKDIR /usr/src/app
## 需要吧package.json移动到container内部
#COPY package.json /usr/src/app/package.json
## 安装项目
#RUN npm i --production
#COPY . /usr/src/app
#EXPOSE 7001
#CMD npm start

