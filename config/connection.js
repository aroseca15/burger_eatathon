let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'burgers-db.cmrzzsxgjlbe.us-east-2.rds.amazonaws.com',
    user: 'root',
    password: 'ssTm21722',
    database: 'burgers_db'
});

connection.connect((err) => {
    if (err) {
        console.log(err)
    }

    console.log("connect complete!")
});

module.exports = connection;