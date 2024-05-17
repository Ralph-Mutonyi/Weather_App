// import dependencies

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const app = express();

// initialize the dotenv package
dotenv.config();

// global object to holds env variables in key : value pairs

const PORT = process.env.PORT;

// add a middleware
app.use(bodyParser.json());
// connect to mongodb database
mongoose.connect(`${process.env.DB_URL}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
// set up routes for productAPI
app.use("/products", require("./routes/products"));
// start the server.
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});