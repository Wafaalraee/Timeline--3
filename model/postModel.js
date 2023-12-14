const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const post = new Schema({
    name: {
        type: String,
        required: true,
        maxLength: [15, 'The title must be less than 15 letters.'],
    },
    message: {
        type: String,
        required: true,
        maxLength: [40, 'The article must be less than 40 letters.'],
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
});
module.exports = mongoose.model('post', post);

 