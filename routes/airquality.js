var express = require('express');
var router = express.Router();

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
    title: '今日空氣品質' ,
    jsonstr:JSON.stringify(jsonstr)
  }); 

});

module.exports = router;
