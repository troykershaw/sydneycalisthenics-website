var connect = require('connect');
connect.createServer(
<<<<<<< HEAD
    connect.static(__dirname)
=======
    connect.static(__dirname + '/site/')
>>>>>>> Simple node server
).listen(8080);