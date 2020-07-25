
const mongoose = require('mongoose');

const alertingSchema = new mongoose.Schema({
  aircraft_id: String,
  description: String,
  aircraft_type: String,
  message_type: String,
  flight_rules: String,
  equipment: String,
  departure: String,
  route: String,
  destination: String,
  other: String,
  supplementary: String,
  alerting_search: String,
});
module.exports= mongoose.model('Alerting', alertingSchema, 'alerting')
