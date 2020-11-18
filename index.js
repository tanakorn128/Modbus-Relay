var mongoose = require('./config/mongoose');
var express = require('./config/express');
var cors = require('cors');
var modbusRTU=require('./config/modbus');
var db = mongoose();
//var modbusModel=db.model('modbus');
var app = express();
var render = function(req, res) {

}


setInterval(()=>{
  

  modbusRTU.writeCoil(3,1)
 

},1000);

setInterval(()=>{
  

  modbusRTU.writeCoil(3,0)


},2000);
app.use(cors({origin: 'null'}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



app.listen(3010);
module.exports = app;

console.log('Server running at http://localhost:3010');