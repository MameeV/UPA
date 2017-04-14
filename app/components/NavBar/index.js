/**
*
* NavBar
*
*/

import React from 'react';
import {Link} from "react-router";


class NavBar extends React.PureComponent {
  constructor(props){
    super(props);
    this.state={
      active:0
    }
  }
  componentWillMount(){
    this.setState({
      active:this.props.activeItem
    })
  }
  showMenu=()=>{
    const linkStyle={
      textDecoration: "none",
      fontFamily: "Raleway",
      fontWeight: "Medium",
      fontSize: "20px",
      color: "#ffffff",
      display: "block",
      paddingTop: "100px",
      paddingLeft: "15px"
    }
    const activeStyle={
      textDecoration: "none",
      fontFamily: "Raleway",
      fontWeight: "Medium",
      fontSize: "20px",
      color: "#3E262A",
      display: "block",
      paddingTop: "100px",
      paddingLeft: "15px",

    }
    if(this.state.active==1){
      return(
        <div>
        <Link style={activeStyle} to="/"> Home </Link>
        <Link style={linkStyle} to="/articles"> Articles </Link>
        <Link style={linkStyle} to="/links"> Links </Link>
        </div>
      )
    }
    else if(this.state.active==2){
      return(
        <div>
        <Link style={linkStyle} to="/"> Home </Link>
        <Link style={activeStyle} to="/articles"> Articles </Link>
        <Link style={linkStyle} to="/links"> Links </Link>
        </div>
      )
    }
    else if(this.state.active==3){
      return(
        <div>
        <Link style={linkStyle} to="/"> Home </Link>
        <Link style={linkStyle} to="/articles"> Articles </Link>
        <Link style={activeStyle} to="/links"> Links </Link>
        </div>
      )
    }
  }
  render() {
    const sideStyle={
      width: "11%",
      height: "100vh",
      background: "#B4938C"
    }
    const indentStyle={
      margin: "15px"
    }


    return (
      <div style={sideStyle}>
        <nav>
          {this.showMenu()}
        </nav>
      </div>
    );
  }
}

export default NavBar;
