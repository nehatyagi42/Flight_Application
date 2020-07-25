
const mongoose = require('mongoose');

const acceptanceSchema = new mongoose.Schema({
    aircraft_id: String,
    message_type: String,
    departure: String,
    destination: String
});
module.exports= mongoose.model('Acceptance', acceptanceSchema, 'acceptance')
