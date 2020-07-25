import React, { Component,useState } from 'react'
import { register }from '../../actions/authAction'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

function Register(props) {
  

  const[first_name_Value, setFirstName] = useState('');
  const[last_name_Value, setLastName] = useState('');
  const[emailValue, setEmail] = useState('');
  const [passwordValue, setPassword] = useState('');
  

  const firstNameOnCahange=(e) => {
    setFirstName(e.target.value)
  }
  const lastNameOnCahange=(e) => {
    setLastName(e.target.value)
  }
  const EmailOnChange=(e) => {
    setEmail(e.target.value)
  }
  const PasswordOnChange=(e) => {
    setPassword(e.target.value)
  }
  
 const onSubmit = (e)=>{
    e.preventDefault()

    const newUser = {
      first_name:  first_name_Value,
      last_name: last_name_Value,
      email:  emailValue,
      password: passwordValue,
    }
   props.register(newUser)
   if (props.loggedIn) {
    props.history.push('/alerting'); 
  }
  }
    return (
        <div className="row">
        <div className="col-md-12 mt-5 mx-auto">
          {props.registered ? 'registered':null}
            <form noValidate onSubmit={ onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Register</h1>
              <div className="form-group">
                <label htmlFor="name">First name</label>
                <input
                  type="text"
                  className="form-control"
                  name="first_name"
                  placeholder="Enter your first name"
                  value={ first_name_Value}
                  onChange={ firstNameOnCahange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Last name</label>
                <input
                  type="text"
                  className="form-control"
                  name="last_name"
                  placeholder="Enter your lastname name"
                  value={ last_name_Value}
                  onChange={ lastNameOnCahange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
                  value={ emailValue}
                  onChange={ EmailOnChange}
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
                  onChange={PasswordOnChange }
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Register!
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
  register,
 })(withRouter(Register));
