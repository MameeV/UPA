/*
 *
 * Signin
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

export default class Signin extends React.PureComponent {
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


    return (
      <div>
        <Helmet title="Signin" meta={[ { name: 'description', content: 'Description of Signin' }]}/>

        <div style={headTextStyle}>
          Dashboard Sign In Page
        </div>
      <main>
        <div style={titleStyle}>UPA CIN Physician Membership Database</div>
        <div style={accessContainer}>
          <div style={access}>
            <div style={accessEmail}> "Enter Your Email Address" </div>
            <div style={accessPassword}> "Enter Your Password" </div>

          </div>
        </div>
      </main>

      </div>
    );
  }
}
