let objRelMap = require("../config/orm.js");

let Burgers = {
    // Calling all of the ORMs

    // Seleting All:
    SelectALL: async function(SAres) {
        let SAres = await objRelMap.selectAll("burgers");
        return SAres; // EACH OF THESE WERE ORIGINALLY CALLED "res". WHEN I KEPT GETTING THE ERROR I CHANGED THE NAMES TO WHAT YOU SEE. STILL GETTING THE SAME ERROR. ALSO CONFUSING, EVERYONE ELSE HAS "response" OR "result" AS THEIR NAMES AND IT WORKS FINE. I'M NOT UNDERSTANDING WHERE I AM GOING WRONG WITH THIS. 
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
// I HAVE BEEN LOOKING EVERYWHERE TO FIGURE OUT WHY MY EXPORTS ARE NOT WORKING. I FINALLY GOT IT TO CONNECT WHEN I REQUIRED THE ACTUAL FILE. BUT IT SHOULD HAVE WORKED THIS WAY.