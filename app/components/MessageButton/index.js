/**
*
* MessageButton
*
*/

import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'Material-ui/TextField';

class MessageButton extends React.PureComponent {
  constructor(props){
    super(props);
    this.state={
      contactOpen: false
    }
  }
  handleOpen = () => {
    this.setState({
      contactOpen: true
    })
  }
  handleClose = () => {
    this.setState({
      contactOpen: false
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
      bottom: "20px",
      right: "10px",
      padding: "15px",
      borderRadius: "50px",

    }
    const messageBoxStyle={
      fontFamily: "Raleway",
      color: "#3E262A"
    }

    const actions = [
      <FlatButton label="Cancel" onTouchTap={this.handleClose}/>,
      <FlatButton label="Submit"/>
    ]
    return (
      <div>
        <footer style={footerStyle}>
          <FlatButton style={buttonStyle} label="Have a Comment ?" onTouchTap={this.handleOpen}/>
        </footer>
        <Dialog titleStyle={messageBoxStyle} title="Have a suggestion or comment? Send a message from here!" actions={actions} open={this.state.contactOpen}>
        <br/>
        <TextField hintText="Enter your eMail address here."/>
        <br/>
        <TextField hintText="Enter your message here!"/>
        </Dialog>
      </div>
    );
  }
}

export default MessageButton;
