var mysql = require('mysql');

var connection;
if (process.env.JAWSDB_URL) {
    // Database is JawsDB on Heroku
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    // Database is local
    connection = mysql.createConnection({
        port: 3306,
        host: 'lzy4wtsaw3sjejnud.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'to5a3myy4iew4m7w',
        password: 'r0d4b0d94i6zr0ug',
        database: 'bh22f0c1919hyoxsu'
    })
};

var mysql = require('mysql');