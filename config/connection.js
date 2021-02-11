let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'burgers_Db'
});

connection.connect((err) => {
    if (err) {
        console.log(err)
    }

    console.log("connect complete!")
});

module.exports = connection;