const express = require('express');
const bodyParser = require('body-parser');
const hbs = require('express-handlebars');
const mongoose = require('mongoose');
const helpers = require('handlebars-helpers');
const math = helpers.math();

const Model = require('../model/model');

let app = express();

mongoose.connect('mongodb://hoakhuat:hoa123456@ds237832.mlab.com:37832/quyet_de', (err) => {
    if (err) console.error(err)
    else console.log("Connect DB success!");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/game', (req, res) => {
    let createGame = {
        players: [],
        scores: []
    };

    for (let i = 0; i < 4; i++) {
        createGame.players.push(req.body[e]);
    }

    GameModel.create(createGame, (err, createdGame))
    if (err) console.log(err);
    else {
        res.send(`/game/:gameId=${createdGame._id}`);
    }
});


app.put('/game', (req, res) => {
    GameModel.findById(req.body.gameId,(err, gameFound)=>{
        if(err) console.log(err);
        else{

        }
    })
});
