let express = require("express");
let Burgers = require("../models/burger.js");
let router = express.Router();

// The first route was given to me as an example by a tutor.
router.get('/', async function (req, res) {
    try {
        let hbrsOb = await Burgers.SelectALL();
        res.render('home', { Burgers: hbrsOb });
        console.log("See...Burgers!!", hbrsOb);
    } catch (err) {
        res.status(505).send(err);
        console.log(err);
    }
});


router.post("/api/burgers", async (req, res) => {
    try {
        let hbrsOb = await Burgers.Create(["name", "eaten"], [req.body.name, req.body.eaten])

        res.json({ id: hbrsOb.insertId });
        // res.render('home', {Burgers: hbrsOb});
        console.log("Do the burgers show?");
    } catch (err) {
        res.status(505).send(err);
        console.log(err);
    }
});

router.put("/api/burgers/:id", async function (req, res) {
    let condition = "id= " + req.params.id;

    console.log("condition", condition);
    let result = await Burgers.Update({ eaten: req.body.eaten }, condition)
    if (result.changedRows === 0) {
        return res.status(404).end();
    } else {
        res.status(200).end();
    }

});

router.delete("/api/burgers/:id", function (req, res) {
    let condition = "id= " + req.params.id;
    console.log("condition", condition);
    Burgers.Delete(condition, function (result) {
        if (result.changedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});



module.exports = router;