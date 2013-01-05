var connect = require('connect');
connect.createServer(
    connect.static(__dirname + '/site/')
).listen(8080);