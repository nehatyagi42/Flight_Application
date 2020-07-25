
const mongoose = require('mongoose');

const logicalSchema = new mongoose.Schema({
    message_type: String
});
module.exports= mongoose.model('Logical', logicalSchema, 'logical')
