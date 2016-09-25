// Require MySQL
var mysql = require('mysql');

// Sources: One for localhost, and one for JawsDB
var source = {
    localhost: {
        port: 3306,
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'burgers_db'
    },
    jawsDB: {
        port: 3306,
        host: 'sp6xl8zoyvbumaa2.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'cqr16c1fuyw83fov',
        password: 'buzmxaz9bmggnti5',
        database: 'p1acfuwr73yz6pcf'
    }
}

var selectedSource = source.jawsDB;

var connection = mysql.createConnection(selectedSource);

connection.connect(function(err){
    if (err){
        console.error('Error connecting: ' + err.stack);
        return;
    }
    console.log('Connected as id: ' + connection.threadId);
});

module.exports = connection;