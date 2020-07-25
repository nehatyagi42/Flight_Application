
const mongoose = require('mongoose');

const modificationSchema = new mongoose.Schema({
    aircraft_id: String,
    message_type: String,
    departure: String,
    destination: String,
    amendiment: String
});
module.exports= mongoose.model('Modification', modificationSchema, 'modification')
