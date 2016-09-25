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
        host: '',
        user: '',
        password: '',
        database: ''
    }
}

var selectedSource = source.localhost;

var connection = mysql.createConnection(selectedSource);

connection.connect(function(err){
    if (err){
        console.error('Error connecting: ' + err.stack);
        return;
    }
    console.log('Connected as id: ' + connection.threadId);
});

module.exports = connection;