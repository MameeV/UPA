/*
 *
 * SignUp
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import MessageButton from 'components/MessageButton';

export default class SignUp extends React.PureComponent {
  constructor(props){
    super(props);
    this.state={
      username: "",
      password: "",
      email: ""
    }
  }
  handleUsername = (event) => {
    this.setState({
      username: event.target.value
    })
  }
  handlePassword = (event) => {
    this.setState({
      password: event.target.value
    })
  }
  handleEmail = (event) => {
    this.setState({
      email: event.target.value
    })
  }

  signup = () => {
    var data = new FormData();
    data.append ("username", this.state.username);
    data.append ("password", this.state.password);
    data.append ("email", this.state.email);

    fetch ("", {
      method: "post",
      body: data
    })
    .then (function(response) {
      return response.json();
    })
    .then (function(json) {
      if (json.error) {
        alert (json.error);
      }
      else if (json.success) {
        alert (json.success);
      }
    })
  }

  render() {
    const titleStyle={
      width: "100%",
      height: "auto",
      fontFamily: "Raleway Dots",
      fontSize: "30px",
      color: "#EB9444",
      textAlign: "center",
      paddingTop: "5px",
      background: "#31137C"
    }
    const headTextStyle={
      width: "100%",
      height: "80px",
      top: "auto",
      borderTop:"3px solid #74D1EA",
      borderBottom:"3px solid #74D1EA",
      background: "#E7DCEA",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      fontFamily: "Fredericka the Great",
      fontStyle: "cursive",
      fontWeight: "bold",
      fontSize: "40px",
      color: "#31137C",
      textTransform: "uppercase",
      textAlign: "center",
      paddingTop: "10px"
    }
    const registerContainer={
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      background: "#E7DCEA",
      paddingTop: "30px",
      paddingLeft: "30px",
      paddingBottom: "30px"
    }
    const register={
      width: "25%",
      height: "100%",
      display: "flex",
      flexDirection: "column"
    }
    const registerEmail={
      width: "100%",
      display: "flex",
      flexWrap: "auto",
      background: "#DB7453",
      paddingLeft: "5px"
    }
    const registerUsername={
      width: "100%",
      display: "flex",
      flexWrap: "auto",
      background: "#D74388",
      paddingLeft: "5px"
    }
    const registerPassword={
      width: "100%",
      display: "flex",
      flexWrap: "auto",
      background: "#D1B6E4",
      paddingLeft: "5px"
    }
    const inputSubmit={
      width: "100%",
      height: "auto",
      background: "#74D1EA",
    }
    const issueStyle={
      width: "100%",
      height: "auto",
      fontFamily: "Raleway",
      fontSize: "18px",
      color: "#74D1EA",
      textAlign: "center",
      paddingTop: "30px",
      paddingBottom: "20px",
      background: "#31137C"
    }

    return (
      <div>
        <Helmet title="Enroll" meta={[ { name: 'description', content: 'Please SignUp for Access To UPAs CIN Membership Application' }]}/>
        <div style={headTextStyle}>
          Sign Up For Dashboard Access
        </div>
        <main>
          <div style={titleStyle}>UPA CIN Physician Membership Database</div>
          <div style={registerContainer}>
            <div style={register}>
              <textarea style={registerEmail} onChange={this.handleEmail} value={this.state.email} type="text" placeholder="Enter Your Email Address"/>
              <textarea style={registerUsername} onChange={this.handleUsername} value={this.state.username} type="text" placeholder="Please Enter Your Name"/>
              <textarea style={registerPassword} onChange={this.handlePassword} value={this.state.password} type="text" placeholder="Choose A Password"/>
              <input style={inputSubmit} on TouchTap={this.signup} type="submit"/>
            </div>
          </div>
          <div style={issueStyle}>
            If you are unable to enroll, please click the COMMENT button and send a message about your issue.
            <br/>
            You can expect a reply, to your email address, within 24 to 48 hours.
          </div>
        </main>
        <MessageButton/>
      </div>
    );
  }
}
