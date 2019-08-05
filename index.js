var http = require('http')//http模块创建服务器
var fs = require('fs')//path模块根据系统内部自动识别url类型
var url = require('url')//fs模块用于读写文件
var path = require('path')//url模块自动解析用户的url得到一些有用的信息



var server = http.createServer(function(req, res){
  var pathObj = url.parse(req.url, true)
  console.log(pathObj)//得到了一些url的数据，其中有用的就是pathname在后面会用到
  var filePath = path.join(__dirname,'music.json')//用path模块自动的拼接一个url
  console.log(filePath)


    switch (pathObj.pathname) {
    case '/music':
      res.end( fs.readFileSync(filePath) )//路由是/123时会读取filePath
      break;
    default:
      res.end( console.log('nono') )//不满足以上条件时，默认读取filePath
  }
  res.end()
})
server.listen(7500)//端口9000



