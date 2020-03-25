
var mysql = require('mysql');

exports.start = function (req, res) {

    var connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: 'mini_projet'
    });

    connection.connect(function(err) {
        if (err) {
        throw err;
        }
        console.log('connected....');
    });

    global.connection = connection;  
}

//console.log(this.start());
