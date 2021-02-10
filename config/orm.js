let { table } = require('console');
let connection = require('../config/connection');

// Helper Functions in order: Translating MySql (translateMsql()), Creating Question Marks (Qmarks()):

// The loop runs through all keys and pushes the key or value to a string. The first if statement checks and skips any hidden properties. The second if statement concatinates the strings adding "" if the array has spaces. Seems to respect the spaces better this way. 
function translateMsql(ob) {
    let array = [];
    for (let key in ob) {
        let value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            array.push(key + "=" + value)
        }
    }
    return array.toString();
}

// This for loop generates question marks and pushes them to an array. Then it returns them as a string rather than an array.
function Qmarks(num) {
    let array = [];
    for (let i = 0; i < num.length; i++) {
        if (typeof num[i] === "string") {
            array.push(
                `"${num[i]}"`
            )
        } else {
            array.push(num[i]);
        }
    }
    return array.toString();
}


let objRelMap = {
    // Select All Function:
    SelectALL: function (table) {
        return new Promise((resolve, reject) => {
            let Query = "SELECT * FROM " + table + ";";
            connection.query(Query, function (err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        })
    },

    // Insert New Function:
    Create: function (table, col, val) {
        return new Promise((resolve, reject) => {
            let Query = "INSERT INTO " + table + "(" + col.toString() + ")" + " VALUES(" + Qmarks(val) + ")";
            console.log(Query);
            connection.query(Query, function (err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    },

    // Updating Function:
    Update: function (table, colObjVal, condition) {
        return new Promise((resolve, reject) => {
            let Query = "UPDATE " + table + " SET " + translateMsql(colObjVal) + " WHERE " + condition;
            console.log(Query);
            connection.query(Query, function (err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    },
    // Delete Function:
    Delete: function (table, condition) {
        return new Promise((resolve, reject) => {
            let Query = "DELETE FROM " + table + " WHERE " + condition;
            console.log(Query);
            connection.query(Query, function (err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    },


};

module.exports = objRelMap;
