const express = require('express');
const port = 9000;
const app = express();
const dbConnect = require("./config/dbConnection");
const cookieParser = require('cookie-parser');
const passport = require("passport");
const localStratergy = require('./middleware/localStratergy');
const session = require("express-session");
const flash = require('connect-flash');
const flashMassage = require("./middleware/flashMassage");

// database connection
dbConnect();

// middlewares
app.set("view engine", 'ejs');
app.use(cookieParser());
app.use(express.urlencoded());
app.use(express.static('public'));
app.use('/uploads', express.static('uploads'));

app.use(session({
    name: 'blog',
    secret: 'test',
    saveUninitialized:false,
    resave: true,
    cookie: {
        maxAge: 1000*60*60*24
    }
}))

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setUser);
app.use(flashMassage)

// routes
app.use("/", require("./routes/index.routes"));

app.listen(port, () => {
    console.log(`Server Start at http://localhost:${port}/dashBoard`);
});
