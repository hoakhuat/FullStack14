const express = require('express');
const mongoose = require('mongoose');
const apiRouter = require('./routers/apiRouter');

const bodyParser = require('body-parser');
const session = require('express-session');
mongoose.connect('mongodb://localhost/tk-hotgirl', { useNewUrlParser: true }, (err) => {
    if (err) throw err
    else console.log('Connect DB success');
})
let app = express();
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: false,
        maxAge: 7 * 24 * 60 * 60 * 1000

    }
}))
app.get('/', (req, res) => {
    console.log(req.session)
    console.log(req.sessionID)
    res.send("techkids hotgirl api.")
})
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api', apiRouter);

app.listen(6969, (err) => {
    if (err) throw err
    else console.log('App Started');
})