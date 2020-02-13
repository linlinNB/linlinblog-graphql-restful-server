const jwt = require('koa-jwt');
module.exports = options => {
  let jwtMiddleWare = jwt({
    secret: options.secret,
  });
  if (options.unless) {
    jwtMiddleWare = jwtMiddleWare.unless({ path: options.unless });
  }
  return jwtMiddleWare;
};
