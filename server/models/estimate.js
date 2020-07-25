
const mongoose = require('mongoose');

const estimateSchema = new mongoose.Schema({
    aircraft_id: String,
    message_type: String,
    departure: String,
    destination: String,
    estimate_data: String
});
module.exports= mongoose.model('Estimate', estimateSchema, 'estimate')
