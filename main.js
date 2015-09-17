var rpc = require('onep/rpc');
var fs = require('fs');

rpc.setOptions({
  host: 'm2.exosite.com',
  path: '/api:v1/rpc/process',
  agent: 'node-onep',
  https: true,
  port: 443,
  strictSSL: false //definitely need to get this to work when this is set to true
});

var cik;

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('submit').addEventListener('click', main);
});

function main() {
  console.log("main executed");
  cik = document.getElementById("cik").value;
  rpc.call(cik, 
    'listing', 
    ['dataport', {}], 
    function(err, rpcresponse, httpresponse) {
  if (err) {
    console.log('error: ' + err);  
  } else {
      if (err) {
        console.log('error: ' + err);
      } else {
        console.log('response: ' + rpcresponse); // need to handle using util but not compatible w/ browserify?
        }
      }
    }
);
}