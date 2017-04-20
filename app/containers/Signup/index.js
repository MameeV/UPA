/*
 *
 * SignUp
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

export default class SignUp extends React.PureComponent {
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


    return (
      <div>
        <Helmet title="Signin" meta={[ { name: 'description', content: 'Description of Signin' }]}/>

        <div style={headTextStyle}>
          Sign Up For Dashboard Access
        </div>
      <main>
        <div style={titleStyle}>UPA CIN Physician Membership Database</div>
        <div style={registerContainer}>
          <div style={register}>
            <div style={registerEmail}> "Enter Your Email Address" </div>
            <div style={registerUsername}> "Choose A Username" </div>
            <div style={registerPassword}> "Choose A Password" </div>
          </div>
        </div>
      </main>

      </div>
    );
  }
}
