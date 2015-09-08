var parser = require('xml2json');
var http = require('http');

var options = {
    host: 'www.yr.no',
    path: '/stad/Noreg/Telemark/Sauherad/Gvarv/varsel.xml'
}
var request = http.request(options, function (res) {
    var data = '';
    res.on('data', function (chunk) {
        data += chunk;
    });
    res.on('end', function () {
      var json = parser.toJson(data); //returns a string containing the JSON structure by default
      console.log(json);
    });
});
request.on('error', function (e) {
  console.log(e.message);
});
request.end();


