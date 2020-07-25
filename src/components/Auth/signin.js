import React, { Component,useState } from 'react'
import { login } from '../../actions/authAction'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

function Signin(props) {

  const [emailValue, setEmail] = useState('')
  const [passwordValue, setPassword] = useState('')

 const EmailOnChange=(e) => {
    setEmail(e.target.value)
  }

  const PasswordOnChange = (e) => {
    setPassword(e.target.value)
  }

  
  const onSubmit = (e) => {
    e.preventDefault()
    const user = {
      email: emailValue,
      password: passwordValue
    }

    props.login(user);
    if (props.loggedIn) {
      props.history.push('/alerting'); 
    }
  }
    return (
        <div className="row">
        <div className="col-md-12 mt-5 mx-auto">
        {props.loggedIn ? 'loggedIn':null}

          <form noValidate onSubmit={onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
                  value={emailValue}
                  onChange={EmailOnChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={passwordValue}
                  onChange={PasswordOnChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
    )
}
const mapStateToProps = (state) => {
 return state
};
export default connect(mapStateToProps, {
  login,
})(withRouter(Signin));