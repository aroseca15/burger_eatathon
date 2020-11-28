let objRelMap = require("../config/orm.js");

let Burgers = {
    // Calling all of the ORMs

    // Seleting All:
    SelectALL: async function(SAres) {
        let SAres = await objRelMap.selectAll("burgers");
        return SAres;
    },

    // Create:
    Create: async function(col, val, Cres) {
        let Cres = await objRelMap.create("burgers", col, val);
        return Cres;
    },


    // Delete:
    Delete: async function(condition, Dres) {
        let Dres = await objRelMap.delete("burgers", condition);
        return Dres;
    },


    // Update:
    Update: async function(colObjVal, condition, Ures) {
        let Ures = await objRelMap.update("burgers", colObjVal, condition);
        return Ures;
    }
};

module.exports = Burgers; 
