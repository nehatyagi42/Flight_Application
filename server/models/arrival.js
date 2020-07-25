
const mongoose = require('mongoose');

const arrivalSchema = new mongoose.Schema({
    aircraft_id: String,
    message_type: String,
    flight_rules: String,
    departure: String,
    destination: String,
    estimate_date: String
});
module.exports= mongoose.model('Arrival', arrivalSchema, 'arrival')
