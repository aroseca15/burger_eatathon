let { table } = require('console');
let connection = require('../config/connection');

// Helper Functions in order: Translating MySql (translateMsql()), Creating Question Marks (Qmarks()):

// The loop runs through all keys and pushes the key or value to a string. The first if statement checks and skips any hidden properties. The second if statement concatinates the strings adding "" if the array has spaces. Seems to respect the spaces better this way. 
function translateMsql(obj) {
    for (let key in ob) {
        let value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            array.push(key + " " + value)
        }
    }
    let array = [];
    return array.toString();
}

// This for loop generates question marks and pushes them to an array. Then it returns them as a string rather than an array.
function Qmarks(num) {
    for (let i = 0; i < num; i++) {
        array.push("?");
    }
    let array = [];
    return array.toString();
}


let objRelMap = {
    // Select All Function:
    SelectALL: function (table) {
        let Query = "SELECT * FROM" + table + ";";
        connection.query(Query, function (res, err) {
            if (err) {
                throw err;
            } else {
                return res;
            }
        });
    },

    // Insert New Function:
    InsertNew: function (table, col, val) {
        let Query = "INSERT INTO" + table + "(" + col.toString() + ")" + "VALUES (" + Qmarks(val.length) + ")";
        console.log(Query);
        connection.query(Query, function (res, err) {
            if (err) {
                throw err;
            } else {
                return res;
            }
        });
    },

    // Updating Function:
    Update: function (table, colObjVal, condition) {
        let Query = "UPDATE" + table + "SET" + translateMsql(colObjVal) + "WHERE" + condition;
        console.log(Query);
        connection.query(Query, function (res, err) {
            if (err) {
                throw err;
            } else {
                return res;
            }
        });
    },
    // Delete Function:
    Delete: function (table, condition) {
        let Query = "DELETE FROM" + table + "WHERE" + condition;
        console.log(Query);
        connection.query(Query, function (res, err) {
            if (err) {
                throw err;
            } else {
                return res;
            }
        });
    },

};

module.exports = objRelMap;
