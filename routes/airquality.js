var express = require('express');
var router = express.Router();

// var bodyParser = require('body-parser');

// var app = express();
// var server = require('http').createServer(app);

// app.use(bodyParser.json({limit: '10mb'}));  //body-parser 解析json格式数据
// app.use(bodyParser.urlencoded({            //此项必须在 bodyParser.json 下面,为参数编码
//   extended: true
// }));

const https = require("http");
let jsonstr = "";
const url = "http://opendata.epa.gov.tw/webapi/Data/REWIQA/?$orderby=SiteName&$skip=0&$top=1000&format=json";
https.get(url, res => {
  res.setEncoding("utf8");
  
  res.on("data", data => {
    jsonstr += data;
  });
  res.on("end", () => {
    jsonstr = JSON.parse(jsonstr);
  });
});

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('pages/airquality', { 
    title: '空氣品質指數' ,
    label1:'全台縣市空氣品質',
    jsonstr:JSON.stringify(jsonstr)
  }); 

});

module.exports = router;
