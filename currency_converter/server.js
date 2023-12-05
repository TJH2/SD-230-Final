const express = require("express");
const helmet = require("helmet");
const expressLayouts = require("express-ejs-layouts");
const port = 5000;

const app = express();

//static files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));

app.use(expressLayouts);
app.set('view engine', 'ejs');


app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'","v6.exchangerate-api.com/"],
    scriptSrc: ["'self'", "'unsafe-inline'","'unsafe-eval'"]
  },
}));


app.get("/", (request, response) => {
  response.render("index");
});

app.get("/about", (request, response) => {
  response.render("about");
});

app.get("/converter", (request, response) => {
  response.render("converter");
});

app.get("/table", (request, response) => {
  response.render("table");
});

app.get("/*", (request, response) => {
  response.render("not-found");
});

app.listen(port, () => {
    console.log(`The Program Is Running On Port ${port}`);
});