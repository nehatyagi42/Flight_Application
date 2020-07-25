
const mongoose = require('mongoose');

const radioComSchema = new mongoose.Schema({
    aircraft_id: String,
    message_type: String,
    radio: String
});
module.exports= mongoose.model('RadioCom', radioComSchema, 'radioCom')
