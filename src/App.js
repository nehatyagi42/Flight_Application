import React from 'react';
import { useSelector } from 'react-redux';
import { connect } from "react-redux";
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Main from './components/mainbody/Main';

const App = () => {

  const flight = useSelector((state) => state.flights);
 console.log("App: "+JSON.stringify(flight));
  return (
    <div>
      <Navbar />
      <div id="wrapper" className="toggled content" >
        <div className="col-lg-3 sidebar">
          <Sidebar />
        </div>
        <div className="col-lg-9">
          <div className="form-container">
            <div>
              <div className="row">
                <Main />
              </div>
              <div className="row">
                <div className="container output-section">
                  <div className="row">
                    <h3>{flight.title}</h3>
                  </div>
                  <div className="row">{flight.result}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return state
 };
export default connect(mapStateToProps) (App);

