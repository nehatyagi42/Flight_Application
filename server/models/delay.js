
const mongoose = require('mongoose');

const delaySchema = new mongoose.Schema({
    aircraft_id: String,
    message_type: String,
    departure: String,
    destination: String,
    other: String
});
module.exports= mongoose.model('Delay', delaySchema, 'delay')
