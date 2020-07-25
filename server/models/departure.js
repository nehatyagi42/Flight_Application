
const mongoose = require('mongoose');

const departureSchema = new mongoose.Schema({
    aircraft_id: String,
    message_type: String,
    departure: String,
    destination: String,
    estimate_data: String
});
module.exports= mongoose.model('Departure', departureSchema, 'departure')
