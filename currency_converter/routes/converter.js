const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
    response.render("converter");
});


module.exports = router;