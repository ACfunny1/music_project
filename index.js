var http = require('http')//http模块创建服务器
var fs = require('fs')//path模块根据系统内部自动识别url类型
var url = require('url')//fs模块用于读写文件
var path = require('path')//url模块自动解析用户的url得到一些有用的信息



var server = http.createServer(function(req, res){
  var pathObj = url.parse(req.url, true)
  console.log(pathObj)//得到了一些url的数据，其中有用的就是pathname在后面会用到
  var music = path.join(__dirname,'music.json')//用path模块自动的拼接一个url
  console.log(music)
  var JStest = path.join(__dirname,'JStest.HTML')

    switch (pathObj.pathname) {
    case '/music':
      res.end( fs.readFileSync(music) )//路由是/music时会读取music
      break;
    case '/test':
      res.end( fs.readFileSync(JStest) )//路由是/test时会读取JStest
      break;
    default:
      res.end( console.log('nono') )//不满足以上条件时，默认读取filePath
  }
  res.end()
})
server.listen(7500)//端口9000



