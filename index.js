var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/books");
var BooksController = require("./controllers/BooksController");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride());

app.get("/", function(req, res) {
    res.send("hello world!!");
});

app.post("/book",BooksController.create); // Create
app.get("/book/:id",BooksController.readOne); // Read One
app.get("/book/",BooksController.readAll); // Read All
app.put("/book/:id",BooksController.update); // Update
app.delete("/book/:id",BooksController.delete); // Delete


app.listen(5000, function(){
    console.log("index.js listening to port 5000");
})