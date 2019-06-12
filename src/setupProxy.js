// const proxy = require('http-proxy-middleware');

// module.exports = function(app) {
//   app.use(proxy('/api', { target: 'https://www.kaola.com/api' }));
// };



const proxy = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(
      proxy(
          '/index',
          {
            target: 'http://bm.jd.com',  // http://bm.jd.com/sysPinUser/getPinUserType
            "pathRewrite": {
              "^/index" : ""   // 把 /api 替换成 https://www.kaola.com
            },
            changeOrigin: true
          }
      )
  );
};

//   "proxy": "https://www.kaola.com"

