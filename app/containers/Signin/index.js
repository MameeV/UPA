/*
 *
 * Signin
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import MessageButton from 'components/MessageButton';

export default class Signin extends React.PureComponent {
  constructor(props){
    super(props);
    this.state={
      username: "",
      password: ""
    }
  }
  handleUsername = (event) => {
    this.setState({
      username: event.target.value
    })
  }
  handlePassword = (event) => {
    this.setState({
      password: event.targetl.value
    })
  }
  signin = () => {
    var data = new FormData();
    data.append ("username", this.state.username);
    data.append ("password", this.state.password);

    fetch ("" , {
      method: "post",
      body: data
    })
    .then (function(response){
      return response.json();
    })
    .then (function(json){
      if (json.error){
        alert (json.error);
      }
      else if (json.token === false)
      {
        alert ("Invalid Credentials");
      }
      else if (json.token !== false)
      {
        sessionStorage.setItem ("token", json.token);
        alert ("Welcome Back!");
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
    const accessContainer={
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      background: "#E7DCEA",
      paddingTop: "30px",
      paddingLeft: "30px",
      paddingBottom: "30px"
    }
    const access={
      width: "25%",
      height: "100%",
      display: "flex",
      flexDirection: "column"
    }
    const accessEmail={
      width: "100%",
      display: "flex",
      flexWrap: "auto",
      background: "#DB7453",
      paddingLeft: "5px"
    }
    const accessPassword={
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
        <Helmet title="SignIn" meta={[ { name: 'description', content: 'Application SignIn Page' }]}/>

        <div style={headTextStyle}>
          Please Sign In
        </div>
        <main>
          <div style={titleStyle}>UPA CIN Physician Membership Database</div>
          <div style={accessContainer}>
            <div style={access}>
              <div style={accessEmail}> "Enter Your Email Address" </div>
              <div style={accessPassword}> "Enter Your Password" </div>
              <div style={issueStyle}>
                If you can not sign in click the COMMENT button and send a message about your issue.
                <br/>
                You can expect a reply, to your email address, within 24 to 48 hours.
              </div>
            </div>
          </div>
        </main>
        <MessageButton/>
      </div>
    );
  }
}
