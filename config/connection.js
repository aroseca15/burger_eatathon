let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ssTm@1722',
    database: 'burgers_Db'
});

connection.connect((err) => {
    if (err) {
        throw (err)
    }

    console.log("connect complete!")
});

module.exports = connection;