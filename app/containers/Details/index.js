/*
 *
 * Details
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import {Link} from "react-router";
import Responsive from 'react-responsive';

export default class Details extends React.PureComponent {
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
    const detailsContainer={
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      background: "#E7DCEA",
      paddingTop: "30px",
      paddingLeft: "30px",
      paddingBottom: "30px"
    }
    const detail={
      width: "25%",
      height: "100%",
      display: "flex",
      flexDirection: "column"
    }
    const detailPractice={
      width: "100%",
      display: "flex",
      flexWrap: "auto",
      background: "#DB7453",
      paddingLeft: "5px"
    }
    const detailPhone={
      width: "100%",
      display: "flex",
      flexWrap: "auto",
      background: "#D1B6E4",
      paddingLeft: "5px"
    }
    const detailWebsite={
      width: "100%",
      display: "flex",
      flexWrap: "auto",
      background: "#74D1EA",
      paddingLeft: "5px"
    }

    return (
      <div>
        <Helmet title="Details" meta={[ { name: 'description', content: 'Physician Details' }]}/>

        <div style={headTextStyle}>
          UPA CIN Physician Name
        </div>
        <main>
          <div style={titleStyle}>Contact Details</div>
          <div style={detailsContainer}>
            <div style={detail}>
              <div style={detailPractice}> "See Practice Name" </div>
              <div style={detailPhone}> "See Phone Number" </div>
              <div style={detailWebsite}> "See Website Address & Clickable" </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
