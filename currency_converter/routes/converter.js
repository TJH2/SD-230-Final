const express = require("express");
const router = express.Router();

const data = {};

data.information = require("../model/currency_info.json");

router.get("/", (request, response) => {
    response.render("converter", {information: data.information});
});


module.exports = router;