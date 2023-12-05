const express = require("express");
const helmet = require("helmet");
const port = 3000;

const app = express();

// need to accept unsafe-eval because my program functions using eval()
app.use(express.static('public'));
app.use(helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-eval'"],
    },
  }));

app.get("/", (request, response) => {
    response.sendFile(__dirname + "/public/calc.html");
});

app.get("/about", (request, response) => {
    response.sendFile(__dirname + "/public/about.html");
});
app.get("/*", (request, response) => {
    response.sendFile(__dirname + "/public/not-found.html");
});

app.listen(port, () => {
    console.log(`The Program Is Running On Port ${port}`);
});