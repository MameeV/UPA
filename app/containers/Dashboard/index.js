/*
 *
 * Dashboard
 *
 */

import React from 'react';
import Helmet from 'react-helmet';


export default class Dashboard extends React.PureComponent {
  constructor(props){
    super(props);
    this.state={
      speciality: "",
      physician: "",
      practice: "",
      website: ""
    }
  }
  handleSpeciality = (event) => {
    this.setState({
      speciality: event.target.value
    })
    console.log(this.state.speciality)
  }
  //console log shows whats happening with data. REMOVE logs when finished with project!!!
  handlePhysician = (event) => {
    this.setState({
      body: event.target.value
    })
    console.log(this.state.physician)
  }
  handlePractice = (event) => {
    this.setState({
      speciality: event.target.value
    })
    console.log(this.state.practice)
  }
  handleWebsite = (event) => {
    this.setState({
      speciality: event.target.value
    })
    console.log(this.state.website)
  }

    storeMember = () => {
        var data = new FormData();
        data.append("speciality", this.state.speciality);
        data.append("physician", this.state.physician);
        data.append("practice", this.state.practice);
        data.append("website", this.state.website);

        fetch ("http://localhost:8000/api/storeMember", {
          method: "post",
          body: data
        })
        .then (function(response) {
          return response.json();
        })
        .then (function(json) {
          if (json.success) {
            alert("Success!");
          }
          else if (json.error) {
            alert("Error, Try Again!");
          }
        })
    }

  render() {
    const titleStyle={
      width: "100%",
      height: "auto",
      fontFamily: "Fredericka the Great",
      fontStyle: "cursive",
      fontWeight: "bold",
      fontSize: "40px",
      color: "#74D1EA",
      textAlign: "center",
      paddingTop: "20px",
      background: "#3E262A"
    }
    const headTextStyle={
      width: "100%",
      height: "80px",
      top: "auto",
      borderTop:"3px solid #74D1EA",
      borderBottom:"3px solid #74D1EA",
      background: "#FAE0EE",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      fontFamily: "Fredericka the Great",
      fontStyle: "cursive",
      fontWeight: "bold",
      fontSize: "40px",
      color: "#3E262A",
      textTransform: "uppercase",
      textAlign: "center",
      paddingTop: "10px"
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
      background: "#999999",
      paddingLeft: "5px"
    }
    const preferredPhysician={
      width: "100%",
      display: "flex",
      flexWrap: "auto",
      background: "#888888",
      paddingLeft: "5px"
    }
    const preferredPractice={
      width: "100%",
      display: "flex",
      flexWrap: "auto",
      background: "#777777",
      paddingLeft: "5px"
    }
    const preferredWebsite={
      width: "100%",
      display: "flex",
      flexWrap: "auto",
      background: "#666666",
      paddingLeft: "5px"
    }
    const inputSubmit={
      width: "100%",
      height: "auto",
      background: "#74D1EA",
    }
    return (
      <div>
        <Helmet title="Dashboard" meta={[ { name: 'description', content: 'Description of Dashboard' }]}/>
        <div style={headTextStyle}>
          Dashboard
        </div>
      <main>
        <div style={titleStyle}> Enter UPA CIN Physician Membership Database Parts </div>
        <div style={preferredContainer}>
          <div style={preferred}>
            <textarea style={preferredSpeciality} onChange={this.handleSpeciality} value={this.state.speciality} placeholder="Physician's Speciality"> </textarea>
            <textarea style={preferredPhysician} onChange={this.handlePhysician} value={this.state.physician} placeholder="Physician's Name"> </textarea>
            <textarea style={preferredPractice} onChange={this.handlePractice} value={this.state.practice} placeholder="Practice Name"> </textarea>
            <textarea style={preferredWebsite} onChange={this.handleWebsite} value={this.state.website} placeholder="Practice Website Address"> </textarea>
            <input style={inputSubmit} onTouchTap={this.storeMember} type="submit"/>
          </div>
        </div>
        </main>
      </div>
    );
  }
}
