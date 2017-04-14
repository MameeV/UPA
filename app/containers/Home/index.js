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
    const divStyle={
      width:"200px",
      height:"400px",
      background:"#3E262A"
    }
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
    const titleSize={
      width: "100vh",
      height: "60px"
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
    const bodyStyleMobile={
      width: "100%",
      height: "100vh",
      background: "#FAE0EE",
      fontFamily: "Josefin Slab",
      fontWeight: "Bold",
      fontSize: "20px",
      color: "#3E262A"
    }
    const mainStyle={
      display: "flex",
      flexDirection: "row"
    }
    const animeStyle={
      borderRadius: "50%",
      width: "100px",
      height: "100px",
      margin: "3px"
    }
    const mainphotoStyle={
      borderRadius: "2%",
      width: "450px",
      height: "300px",
      margin: "15px"
    }
    const mainphotoStyleMobile={
      borderRadius: "2%",
      width: "100%",
      height: "300px"
    }
    const headingStyle={
      margin: "15px"
    }
    const indentStyle={
      margin: "15px"
    }



    const preferredContainer={
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      background: "#FCFAF1",
      paddingTop: "30px",
      paddingLeft: "30px",
      paddingBottom: "30px"
    }
    const preferred={
      width: "25%",
      height: "100%",
      display: "flex",
      flexDirection: "column"
    }
    const preferredSpeciality={
      width: "100%",
      display: "flex",
      flexWrap: "auto",
      background: "999999",
      paddingLeft: "5px"
    }
    const preferredPhysician={
      width: "100%",
      display: "flex",
      flexWrap: "auto",
      background: "999999",
      paddingLeft: "5px"
    }
    const preferredPractice={
      width: "100%",
      display: "flex",
      flexWrap: "auto",
      background: "999999",
      paddingLeft: "5px"
    }
    const preferredWebsite={
      width: "100%",
      display: "flex",
      flexWrap: "auto",
      background: "999999",
      paddingLeft: "5px"
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

            <div style={bodyStyle}>
              <div style={indentStyle}>
              UPA CIN Physician Membership LookUp Application
            <br/>
            <br/>
              Speciality Dropdown Box
              <br/>
              Physician Name Listing with
              <br/>
              Provider Location Name & Website Address for Contact Options
              <br/>
              <br/>
              <br/>
              Medical Advocacy Partners: Assisting with Navigation to Pay-For-Performance & Quality Healthcare
              </div>



            </div>
          </main>


        <MessageButton/>

      </div>
    );
  }
}
