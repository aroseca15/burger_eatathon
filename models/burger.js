let objRelMap = require("../config/orm.js");

let Burgers = {
    // Calling all of the ORMs

    // Seleting All:
    function(res) {
        let res = await objRelMap.selectAll("burgers");
        return res;
    },

    // Create:
    function(col, val, res) {
        let res = await objRelMap.create("burgers", col, val);
        return res;
    },


    // Delete:
    function(condition, res) {
        let res = await objRelMap.delete("burgers", condition);
        return res;
    },


    // Update:
    function(colObjVal, condition, res) {
        let res = await objRelMap.update("burgers", colObjVal, condition);
        return res;
    }
};

module.exports = Burgers; 
