import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { FiledFlightPlan, Alerting, Acceptance, RadioCommunicationFailure, 
    RequestFlightPlan, Arrival, Cancellation, Coordination, CurrentFlightPlan,
    Delay, Departure, Estimate, LogicalAcknowledgement, Modification,
    SupplementaryFlightPlan, RequestSupplementaryFlight } from '../pages';
  import SignUp from '../Auth/signup'
  import SignIn from '../Auth/signin'

const Main = (props) => {
    return (
        <Switch>
            <Route exact path="/" render={() => (<Redirect to="/signin" />)} /> 
            <Route exact path="/alerting"><Alerting /></Route>
            <Route path="/radio_communication_failure"><RadioCommunicationFailure /></Route>
            <Route path="/filed_flight_plan"><FiledFlightPlan /></Route>
            <Route path="/modification"><Modification /></Route>
            <Route path="/cancellation"><Cancellation /></Route>
            <Route path="/delay"><Delay /></Route>
            <Route path="/departure"><Departure /></Route>
            <Route path="/arrival"><Arrival /></Route>
            <Route path="/current_flight_plan"><CurrentFlightPlan /></Route>
            <Route path="/estimate"><Estimate /></Route>
            <Route path="/coordination"><Coordination /></Route>
            <Route path="/acceptance"><Acceptance /></Route>
            <Route path="/logical_acknowledgement"><LogicalAcknowledgement  /></Route>
            <Route path="/request_flight_plan"><RequestFlightPlan /></Route>
            <Route path="/request_supplementary_flight_plan"><RequestSupplementaryFlight /></Route>
            <Route path="/supplementary_flight_plan"><SupplementaryFlightPlan /></Route>
            <Route path="/signin"><SignIn /></Route>
            <Route path="/signup"><SignUp /></Route>

        </Switch>
    );
}

const mapStateToProps = (state) => {
    return state
   };
export default connect(mapStateToProps)(Main);