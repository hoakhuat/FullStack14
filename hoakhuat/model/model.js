const mongoose = require('mongoose');

const ModelSchema = new mongoose.Schema({
    names : [{
        type: String
    }],
    scores: [[
        {
            type: Number,
            default: 0
        }
    ]]
});

module.exports = mongoose.model("Model", ModelSchema);