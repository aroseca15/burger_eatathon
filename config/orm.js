const { table } = require('console');
let connection = require('../config/connection');

let objRelMap = {
    // Select All Function:
    function(table, cBack) {
        let Query = "SELECT * FROM" + table + ";";
        connection.query(Query, function (res, err) {
            cBack(res);
            if (err) {
                throw err;
            }
        });
    },

    // Insert New Function:
    function(table, col, val, cBack) {
        let Query = "INSERT INTO" + table + "(" + col.toString() + ")" + "VALUES (" + val.length + ")";
        console.log(Query);
        connection.query(Query, function (res, err) {
            cBack(res);
            if (err) {
                throw err;
            }
        });
    },

    // Updating Function:
    function(table, colVal, condition, cBack) {
        let Query = "UPDATE" + table + "SET" + translate(colVal) + "WHERE" + condition;
        console.log(Query);
        connection.query(Query, function (res, err) {
            cBack(res);
            if (err) {
                throw err;
            }
        });
    },
        // Delete Function:
        function(table, condition, cBack) {
            let Query = "DELETE FROM" + table + "WHERE" + condition;
            console.log(Query);
            connection.query(Query, function (res, err) {
                cBack(res);
                if (err) {
                    throw err;
                }
            });
    },










}