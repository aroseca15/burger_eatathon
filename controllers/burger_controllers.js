let express = require("express");
const Burgers = require("../models/burger.js");
let router = express.Router();

// The first route was given to me as an example by a tutor.
router.get('/', async function (req, res) {
    try {
        let hbrsOb = await Burgers.SelectALL();
        res.render('home', { Burgers: hbrsOb });
        console.log("See...Burgers!!");
    } catch (err) {
        res.status(505).send(err);
        console.log(err);
    }

});

router.post("/api/burgers", async (req, res) => {
    try {
        let hbrsOb = await Burgers.InsertNew(["burgers_name","eaten"], [req.body.burger_name, req.body.eaten], function (res) {
            res.json({ id: hbrsOb.insertId });
            // res.render('home', {Burgers: hbrsOb});
            console.log("Do the burgers show?");
        });
    } catch (err) {
        res.status(505).send(err);
        console.log(err);
    }
});


module.exports = router