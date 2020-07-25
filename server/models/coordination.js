
const mongoose = require('mongoose');

const coordinationSchema = new mongoose.Schema({
    aircraft_id: String,
    message_type: String,
    departure: String,
    destination: String,
    other: String,
    amendment: String
});
module.exports= mongoose.model('Coordination', coordinationSchema, 'coordination')
