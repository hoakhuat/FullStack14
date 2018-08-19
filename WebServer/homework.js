
var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
    res.write('Hello ' + req.url.substr(1));
    res.end();
}).listen(8080);

http.createServer(function (req, res) {
    var q = url.parse(req.url, true).query;
    var name = q.name;
    res.end('Hello ' + name);
}).listen(6969);
