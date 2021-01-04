let objRelMap = require("../config/orm.js");
let { table } = require('console');

let Burgers = {
    // Calling all of the ORMs

    // Seleting All:
    SelectALL: async function() {
        let res = await objRelMap.SelectALL('burgers');
        return res; //  
    },

    // Create:
    Create: async function(col, val) {
        let res = await objRelMap.Create('burgers', col, val);
        return res;
    },


    // Delete:
    Delete: async function(condition) {
        let res = await objRelMap.Delete('burgers', condition);
        return res;
    },


    // Update:
    Update: async function(colObjVal, condition) {
        let res = await objRelMap.Update('burgers', colObjVal, condition);
        return res;
    }
};

module.exports = Burgers; 
// I HAVE BEEN LOOKING EVERYWHERE TO FIGURE OUT WHY MY EXPORTS ARE NOT WORKING. I FINALLY GOT IT TO CONNECT WHEN I REQUIRED THE ACTUAL FILE. BUT IT SHOULD HAVE WORKED THIS WAY.