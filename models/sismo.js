const mongoose = require('mongoose');

const sismoSchema = mongoose.Schema({
    id: { 
        type: Number,
        required: true,
        index: { unique: true }
    },
    country_id: {
        type: Number,
        required: true
    },
    date: Date,
    magnitude: Number,
    desciption: String

});

module.exports = mongoose.model('sismo', sismoSchema);
