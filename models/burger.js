let objRelMap = require("../config/orm.js");

let Burgers = {
    // Calling all of the ORMs

    // Seleting All:
    async function(res) {
        let res = await objRelMap.selectAll("burgers");
        return res;
    },

    // Create:
    async function(col, val, res) {
        let res = await objRelMap.create("burgers", col, val);
        return res;
    },


    // Delete:
    async function(condition, res) {
        let res = await objRelMap.delete("burgers", condition);
        return res;
    },


    // Update:
    async function(colObjVal, condition, res) {
        let res = await objRelMap.update("burgers", colObjVal, condition);
        return res;
    }
};

module.exports = Burgers; 
