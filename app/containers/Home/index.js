/*
 *
 * Home
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import {Link} from "react-router";
import Responsive from 'react-responsive';
import IconButton from 'material-ui/IconButton';
import Burger from 'material-ui/svg-icons/Navigation/menu';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import MessageButton from 'components/MessageButton';
import NavBar from 'components/NavBar';
import NavMobile from 'components/NavMobile';


export default class Home extends React.PureComponent {

  render() {
    const titleStyle={
      borderTop:"3px solid #74D1EA",
      borderBottom:"3px solid #74D1EA",
      background: "#EB9444",
      display: "flex",
      flexDirection: "row",
      fontFamily:"Raleway",
      fontWeight:"Bold",
      color: "#31137C",
      fontSize: "48px"
    }
    const headingStyle={
      margin: "15px"
    }
    const mainStyle={
      display: "flex",
      flexDirection: "row"
    }
    const indentStyle={
      margin: "15px"
    }
    const bodyStyle={
      width: "100%",
      height: "100vh",
      background: "#FCFAF1",
      fontFamily: "Josefin Slab",
      fontWeight: "Bold",
      fontSize: "20px",
      color: "#31137C"
    }


    const preferredContainer={
      justifyContent: "center",
      background: "#FCFAF1",
      paddingTop: "30px",
      paddingLeft: "30px",
      paddingBottom: "30px"
    }
    const preferred={
      height: "100%",
      display: "flex",
      flexDirection: "column"
    }
    const preferredSpeciality={
      display: "flex",
      flexWrap: "auto",
      background: "#BF1932",
      paddingLeft: "5px"
    }
    const preferredPhysician={
      display: "flex",
      flexWrap: "auto",
      background: "#D74388",
      paddingLeft: "5px"
    }
    const preferredPractice={
      display: "flex",
      flexWrap: "auto",
      background: "#DB7453",
      paddingLeft: "5px"
    }
    const preferredPhone={
      display: "flex",
      flexWrap: "auto",
      background: "#D1B6E4",
      paddingLeft: "5px"
    }
    const preferredWebsite={
      display: "flex",
      flexWrap: "auto",
      background: "#FCFAF1",
      paddingLeft: "5px"
    }
    const footerStyle={
      background: "#EB9444",
      display: "flex",
      flexDirection: "row",
      fontFamily:"Raleway",
      fontWeight:"Bold",
      color: "#31137C",
      fontSize: "18px"
    }

    return (

      <div>

        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>
        <header>
          <span style={titleStyle}>
            <img src="http://h4z.it/Image/7e3c1e_UPA.jpg"/>
          <div style={headingStyle}>
            Clinically Integrated Network
          </div>
          </span>
        </header>

        <main style={mainStyle}>

          <div style={preferredContainer}>
            <div style={preferred}>
              UPA CIN Physician Membership LookUp Application
              <br/>
              <br/>
              If you are looking for a PCP, search for Primary Care Physician in the Speciality Dropdown Box!
              <br/>
              <br/>
              <div style={preferredSpeciality}> Speciality </div>
              Need DROPDOWN SEARCH!!!
              <br/>
              <br/>
              <div style={preferredPhysician}> Physician </div>
              Need DROPDOWN SEARCH!!!
              <br/>
              <br/>
              <div style={preferredPractice}> Practice Name </div>
              <br/>
              <div style={preferredPhone}> Practice Phone Number </div>
              <br/>
              <div style={preferredWebsite}> Practice Website Address </div>
              <br/>
            </div>
          </div>
        </main>

            <div style={footerStyle}>
              <div style={indentStyle}>
              Medical Advocacy Partners: Assisting with Navigation to Pay-For-Performance & Quality Healthcare
              </div>
            </div>




        <MessageButton/>

      </div>
    );
  }
}
