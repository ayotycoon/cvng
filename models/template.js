
const mongoose = require('mongoose');
const template = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,

    template: {
        type: String,
        required: true
    },
    path: String,
    options: {},
    date: {
        type: Date,
        default: Date.now
    },

    owner: mongoose.Schema.Types.ObjectId,



});


module.exports = mongoose.model('templates', template);
