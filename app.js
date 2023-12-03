const express = require("express");
const app = express();
const mongoose = require("mongoose")
const bodyParser = require("body-parser");

const port = process.env.port || 3000;

app.use(bodyParser.json())
app.use(express.static(__dirname))

app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect("mongodb+srv://Shrinidhi:Shri@crud.8vx9pff.mongodb.net/users").then(() => {
    console.log('Connection successful');
}).catch((e) => {
    console.log('No connection', e);
});




//create data schema 
var db = mongoose.connection;

db.on('error', () => console.log("Error in Connecting to Database"));
db.once('open', () => console.log("Connected to Database"))
app.get("/", function (req, res) {
    res.redirect('index.html')
})

app.post("/signup", function (req, res) {
    console.log(req.body);
    const pdfFile = req.body.pdfFile;
    var name = req.body.name;
    var surname = req.body.surname;
    var email = req.body.email;
    var need = req.body.need;
    var message = req.body.message;
    var user = req.body.user;
    var other = req.body.other || "None";

    var data = {
        "name": name,
        "surname": surname,
        "email": email,
        "need": need,
        "message": message,
        "pdfFile": pdfFile, // Include the PDF file data in the data object
        "user": user,
        "other choice": other
    }
    db.collection('agents').insertOne(data, (err, collection) => {
        if (err) {
            throw err;
        }
        console.log("Recorded Successfully");
    });

    return res.redirect('index.html');
});

app.listen(port, function () {
    console.log(`server is running on ${port}`)
})