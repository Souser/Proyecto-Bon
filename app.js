const express = require('express');
const app = express();

app.use(express.static('Public'));
var qs = require("querystring");
var http = require("https");

function apiw(params) {
  
  var options = {
    "method": "POST",
    "hostname": "api.ultramsg.com",
    "port": null,
    "path": "/instance26486/messages/chat",
    "headers": {
      "content-type": "application/x-www-form-urlencoded"
    }
  };
  
  var req = http.request(options, function (res) {
    var chunks = [];
  
    res.on("data", function (chunk) {
      chunks.push(chunk);
    });
  
    res.on("end", function () {
      var body = Buffer.concat(chunks);
      console.log(body.toString());
    });
  });
  
  req.write(qs.stringify({
    token: 'jve4sqqtq7mzhmpg',
    to: '+573142257830',
    body: 'Pedido Numero 1 Cr 7 #3a17',
    priority: '1',
    referenceId: ''
  }));
  req.end();
}
apiw();
app.listen(3000, ()=>{
    console.log('servidor iniciado.');
});