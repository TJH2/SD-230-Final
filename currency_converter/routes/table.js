const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
    response.render("table");
  });


module.exports = router;