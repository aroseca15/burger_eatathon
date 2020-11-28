let objRelMap = require("../config/orm");

let Burgers = {
    // Calling all of the ORMs

    // Seleting All:
    SelectALL: async function(response) {
        let res = await objRelMap.SelectALL("burgers");
        return res; //  
    },

    // Create:
    Create: async function(col, val, response) {
        let res = await objRelMap.create("burgers", col, val);
        return res;
    },


    // Delete:
    Delete: async function(condition, response) {
        let res = await objRelMap.delete("burgers", condition);
        return res;
    },


    // Update:
    Update: async function(colObjVal, condition, response) {
        let res = await objRelMap.update("burgers", colObjVal, condition);
        return res;
    }
};

module.exports = Burgers; 
// I HAVE BEEN LOOKING EVERYWHERE TO FIGURE OUT WHY MY EXPORTS ARE NOT WORKING. I FINALLY GOT IT TO CONNECT WHEN I REQUIRED THE ACTUAL FILE. BUT IT SHOULD HAVE WORKED THIS WAY.