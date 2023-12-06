const express = require("express");
const helmet = require("helmet");
const expressLayouts = require("express-ejs-layouts");
const port = 5000;

const app = express();

// ROUTES
const indexRouter = require("./routes/index");
const aboutRouter = require("./routes/about");
const tableRouter = require("./routes/table");
const converterRouter = require("./routes/converter");
const errRouter = require("./routes/404");

// VIEW ENGINE
app.set('view engine', 'ejs');
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
app.use(expressLayouts);

// STATIC FILES
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));


// HELMET

app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'","v6.exchangerate-api.com/"],
    scriptSrc: ["'self'", "'unsafe-inline'","'unsafe-eval'"]
  },
}));


app.use("/", indexRouter);
app.use("/about", aboutRouter);
app.use("/table", tableRouter);
app.use("/converter", converterRouter);
app.use("/*", errRouter);

/*
OLD ROUTES BEFORE MVC
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

*/

app.listen(process.env.PORT || port, () => {
    console.log(`The Program Is Running On Port ${port}`);
});