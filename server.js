const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const passport = require("passport");
const mongoose = require("mongoose")

require("dotenv").config();

const app = express();

const port = process.env.PORT || 3500

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(session({
    secret: "secretKey",
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({
        mongoUrl: "mongodb://localhost:27017/auth",
        collectionName: "sessions"
    }),
    cookie: {

    }
}))

mongoose.connect("mongodb://localhost:27017/auth")

// app.use(passport.initialize());
// app.use(passport.session());

app.use("/auth", require("./routes/athRoute"))


app.get("/", (req, res) => {
    res.send("Hello This is index page");
})

app.listen(port, () => {
    console.log("server started");
});