
const mongoose = require('mongoose');

const supplementaryFlightSchema = new mongoose.Schema({
    aircraft_id: String,
    message_type: String,
    departure: String,
    destination: String,
    other: String,
    supplementary: String
});
module.exports= mongoose.model('SupplementaryFlight', supplementaryFlightSchema, 'supplementaryFlight')
