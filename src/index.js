const express = require("express");
require('dotenv').config();
const app = express();

const port = process.env.PORT

app.get("/", (req, res) => {
    res.send("Hello Nihar");
})

app.get("/twitter", (req, res) => {
    res.send("Hello Twitter");
})

app.get("/login", (req, res) => {
    res.send("<h1> Login Page </h1>");
})

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
})


// console.log("Hello World");