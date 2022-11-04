const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,//关闭语法检查
  //开启代理服务器
  devServer:{
    proxy:{
      '/api1':{
        target: 'http://localhost:5000',  
        pathRewrite:{
          '^/api1':''
        },
        changeOrigin:true  //请求来自于8080,如果是true:就说来自于5000 true就是说谎

      },
      '/api2':{
        target: 'http://localhost:5001',
        pathRewrite:{
          '^/api2':''
        },
        changeOrigin:true  //请求来自于8080,如果是true:就说来自于5000 true就是说谎

      }
    }
  }
})
