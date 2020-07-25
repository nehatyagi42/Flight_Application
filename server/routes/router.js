const express = require('express');
const FiledFlightPlan = require('mongoose').model('FiledFlightPlan');
const Acceptance = require('mongoose').model('Acceptance');
const Alerting = require('mongoose').model('Alerting');
const Arrival = require('mongoose').model('Arrival');
const Cancellation = require('mongoose').model('Cancellation');
const Coordination = require('mongoose').model('Coordination');
const CurrentFlightPlan = require('mongoose').model('CurrentFlightPlan');
const Delay = require('mongoose').model('Delay');
const Departure = require('mongoose').model('Departure');
const Estimate = require('mongoose').model('Estimate');
const Logical = require('mongoose').model('Logical');
const Modification = require('mongoose').model('Modification');
const RadioCom = require('mongoose').model('RadioCom');
const RequestFlightPlan = require('mongoose').model('RequestFlightPlan');
const RequestSuppl = require('mongoose').model('RequestSuppl');
const SupplementaryFlight = require('mongoose').model('SupplementaryFlight');

const router = express.Router();

router.post('/filed_flight_plan', (req, res) => {
    const db = new FiledFlightPlan(req.body);
    db.save((err, data) => {
            res.json(data);
    });
});
router.post('/acceptance', (req, res) => {
  const db = new Acceptance(req.body);
  db.save((err, data) => {
          res.json(data);
  });
});
router.post('/alerting', (req, res) => {
  const db = new Alerting(req.body);
  db.save((err, data) => {
          res.json(data);
  });
});
router.post('/arrival', (req, res) => {
  const db = new Arrival(req.body);
  db.save((err, data) => {
          res.json(data);
  });
});
router.post('/cancellation', (req, res) => {
  const db = new Cancellation(req.body);
  db.save((err, data) => {
          res.json(data);
  });
});
router.post('/coordination', (req, res) => {
  const db = new Coordination(req.body);
  db.save((err, data) => {
          res.json(data);
  });
});
router.post('/current_flight_plan', (req, res) => {
  const db = new CurrentFlightPlan(req.body);
  db.save((err, data) => {
          res.json(data);
  });
});
router.post('/delay', (req, res) => {
  const db = new Delay(req.body);
  db.save((err, data) => {
          res.json(data);
  });
});
router.post('/departure', (req, res) => {
  const db = new Departure(req.body);
  db.save((err, data) => {
          res.json(data);
  });
});
router.post('/estimate', (req, res) => {
  const db = new Estimate(req.body);
  db.save((err, data) => {
          res.json(data);
  });
});
router.post('/logical_acknowledgement', (req, res) => {
  const db = new Logical(req.body);
  db.save((err, data) => {
          res.json(data);
  });
});
router.post('/modification', (req, res) => {
  const db = new Modification(req.body);
  db.save((err, data) => {
          res.json(data);
  });
});
router.post('/radio_communication_failure', (req, res) => {
  const db = new RadioCom(req.body);
  db.save((err, data) => {
          res.json(data);
  });
});
router.post('/request_flight_plan', (req, res) => {
  const db = new RequestFlightPlan(req.body);
  db.save((err, data) => {
          res.json(data);
  });
});
router.post('/request_supplementary_flight_plan', (req, res) => {
  const db = new RequestSuppl(req.body);
  db.save((err, data) => {
          res.json(data);
  });
});
router.post('/supplementary_flight_plan', (req, res) => {
  const db = new SupplementaryFlight(req.body);
  db.save((err, data) => {
          res.json(data);
  });
});

module.exports = router;
