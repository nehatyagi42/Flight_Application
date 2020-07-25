
const mongoose = require('mongoose');

const currentFlightPlanSchema = new mongoose.Schema({
    aircraft_id: String,
    aircraft_type: String,
    message_type: String,
    flight_rules: String,
    equipment: String,
    departure: String,
    route: String,
    destination: String,
    estimate_data: String,
    other: String
});
module.exports= mongoose.model('CurrentFlightPlan', currentFlightPlanSchema, 'currentFlightPlan')
