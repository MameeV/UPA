/**
*
* NavButton
*
*/

import React from 'react';
import Burger from 'material-ui/svg-icons/Navigation/menu';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import {Link} from "react-router";
import FlatButton from 'material-ui/FlatButton';

class NavButton extends React.PureComponent {
  constructor(props){
    super(props);
    this.state={
      contactOpen: false
    }
  }
  handleOpen = () => {
    this.setState({
      contactOpen: true,

    })
  }

  render() {
    const buttonStyle={
      fontFamily: "Raleway",
      fontWeight: "Bold",
      fontStyle: "Italic",
      fontSize: "100%",
      color: "#CA4046"
    }
    const footerStyle={
      background: "#74D1EA",
      position: "fixed",
      bottom: "100px",
      right: "10px",
      padding: "15px",
      borderRadius: "50px",

    }
    const homeBoxStyle={
      fontFamily: "Raleway",
      color: "#3E262A"
    }


    return (
      <div>
        <footer style={footerStyle}>
          <FlatButton style={buttonStyle} label="Search by Speciality" containerElement={<Link to="/"></Link>} onTouchTap={this.handleOpen}/>
        </footer>
      </div>
    );
  }
}

export default NavButton;
