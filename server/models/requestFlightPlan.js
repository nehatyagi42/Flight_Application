
const mongoose = require('mongoose');

const requestFlightPlanSchema = new mongoose.Schema({
    aircraft_id: String,
    message_type: String,
    departure: String,
    destination: String,
    other: String
});
module.exports= mongoose.model('RequestFlightPlan', requestFlightPlanSchema, 'requestFlightPlan')
