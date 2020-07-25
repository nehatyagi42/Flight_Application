const mongoose = require('mongoose');

module.exports = (url) => {
  mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});
  mongoose.Promise = global.Promise;

  mongoose.connection.on('error', err => {
    console.error(`Mongoose connection error ${err}`);
    process.exit(1);
  });
  //We are connected
  require('./filedFlightPlan');
  require('./acceptance');
  require('./arrival');
  require('./alerting');
  require('./cancellation');
  require('./coordination');
  require('./currentFlightPlan');
  require('./delay');
  require('./departure');
  require('./estimate');
  require('./logicalAcknowledgement');
  require('./modification');
  require('./radioCommunicationFailure');
  require('./requestFlightPlan');
  require('./requestSupplementaryFlightPlan');
  require('./supplementaryFlightPlan');
}
