/*
 *
 * Edit
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import {Link} from "react-router";
import Responsive from 'react-responsive';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import NavButton from 'components/NavButton';

export default class Edit extends React.PureComponent {
  constructor(props){
    super(props);
    this.state={
      speciality: "",
      physician: "",
      practice: "",
      phone: "",
      website: "",
      value:"",
      physicians:[],
      data:"",
      token: sessionStorage.getItem("token")
    }
  }

  componentWillMount(){
    fetch('http://localhost:8000/api/getPhysician')

    .then(function(response){
      return response.json();
    })
    .then(function(json){
      this.setState({
        physicians:json
      })
    }.bind(this))
  }

  handleChange = (event, index, value) => {
    var physicians=this.state.physicians;

    for(var i=0; i<physicians.length; i++)
    {
      if(value == physicians[i].id)
      {
        this.setState({
          speciality:physicians[i].speciality,
          physician:physicians[i].physician,
          practice:physicians[i].practice,
          phone:physicians[i].phone,
          website:physicians[i].website,
        })
      }
    }
  };

  showPhysician = () => {
    const detailsContainer={
      display: "flex",
      flexDirection: "column",
      flexWrap: "wrap",
      width: "100%",
      maxWidth: "500px",
      margin: "0 auto"
    }
    const detail={
      width: "100%",
      height: "auto",
      display: "flex",
      flexDirection: "column",
      padding: "5px"
    }
    const detailName={
      width: "100%",
      height: "auto",
      fontFamily: "Raleway",
      fontSize: "20px",
      color: "#31137C",
      display:'block',
    }
    const detailPractice={
      width: "100%",
      height: "auto",
      fontFamily: "Raleway",
      fontSize: "20px",
      color: "#31137C",
      paddingTop: "20px",
      display:'block',
    }
    const detailPhone={
      width: "100%",
      height: "auto",
      fontFamily: "Raleway",
      fontSize: "20px",
      color: "#31137C",
      display:'block',
    }
    const detailWebsite={
      width: "100%",
      height: "auto",
      fontFamily: "Raleway",
      fontSize: "20px",
      color: "#31137C",
      display:'block',
    }
    if(this.state.data !== "")
    {

      return(
        <div style={detailsContainer}>
          <div style={detail}>
            <div style={detailName}> {this.state.data.physician} </div>
            <div style={detailPractice}> {this.state.data.practice} </div>
            <div style={detailPhone}> {this.state.data.phone} </div>
            <div style={detailWebsite}> {this.state.data.website} </div>
            <br/>
          </div>
        </div>
      )
    }
  };

  handleSpeciality = (event) => {
    this.setState({
      speciality: event.target.value
    })
  }

  handlePhysician = (event) => {
    this.setState({
      physician: event.target.value
    })
  }
  handlePractice = (event) => {
    this.setState({
      practice: event.target.value
    })
  }
  handlePhone = (event) => {
    this.setState({
      phone: event.target.value
    })
  }
  handleWebsite = (event) => {
    this.setState({
      website: event.target.value
    })
  }

    storeMember = () => {
        var data = new FormData();
        data.append("speciality", this.state.speciality);
        data.append("physician", this.state.physician);
        data.append("practice", this.state.practice);
        data.append("phone", this.state.phone);
        data.append("website", this.state.website);

        fetch ("http://localhost:8000/api/storeMember?token="+this.state.token, {
          method: "post",
          speciality: data,
          physician: data,
          practice: data,
          phone: data,
          website: data,
          headers: {
            "Authorization":"Bearer "+this.state.token
          }
        })
        .then (function(response) {
          return response.json();
        })
        .then (function(json) {
          if (json.success) {
            alert(json.success);
          }
          else if (json.error) {
            alert(json.error);
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
    const dataContainer={
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      background: "#E7DCEA",
      paddingTop: "30px",
      paddingLeft: "30px",
      paddingBottom: "30px"
    }
    const data={
      width: "25%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      fontFamily: "Raleway",
      fontSize: "20px",
      color: "#31137C",
    }
    const dataSpeciality={
      width: "100%",
      display: "flex",
      flexWrap: "auto",
      background: "#BF1932",
      paddingLeft: "5px"
    }
    const dataPhysician={
      width: "100%",
      display: "flex",
      flexWrap: "auto",
      background: "#FCFAF1",
      paddingLeft: "5px"
    }
    const dataPractice={
      width: "100%",
      display: "flex",
      flexWrap: "auto",
      background: "#DB7453",
      paddingLeft: "5px"
    }
    const dataPhone={
      width: "100%",
      display: "flex",
      flexWrap: "auto",
      background: "#D1B6E4",
      paddingLeft: "5px"
    }
    const dataWebsite={
      width: "100%",
      height: "auto",
      display: "flex",
      flexWrap: "auto",
      background: "#D74388",
      paddingLeft: "5px"
    }
    const inputSubmit={
      width: "100%",
      height: "auto",
      background: "#74D1EA",
    }
    const selectStyle={
      width: "100%",
      fontFamily:"Raleway",
      fontWeight:"Bold",
      fontSize: "30px",
      color: "#000000",
      textDecoration: "none",
      display:'block'
    }

    return (
      <div>
        <Helmet title="Edit" meta={[ { name: 'description', content: 'Edit Member Details' }]}/>
        <div style={headTextStyle}>
          Edit Dashboard
        </div>
      <main>
        <div style={titleStyle}>Edit Physician Details Here!</div>

        <div style={dataContainer}>
          <div style={data}>
            <div style={dataPhysician}>
            <SelectField style={selectStyle} value={this.state.value} onChange={this.handleChange}>
            {this.state.physicians.map((p, i) => (
                <MenuItem value={p.id} primaryText={p.physician}/>
            ))}
            </SelectField>
            {this.showPhysician()}
            </div>
            <br/>
            <input type="text" style={dataPhysician} onChange={this.handlePhysician} value={this.state.Physician} placeholder="Physician's Name"/>
            <input type="text" style={dataSpeciality} onChange={this.handleSpeciality} value={this.state.speciality} placeholder="Physician's Speciality #"/>
            <input type="text" style={dataPractice} onChange={this.handlePractice} value={this.state.practice} placeholder="Practice Name"/>
            <input type="text"style={dataPhone} onChange={this.handlePhone} value={this.state.phone} placeholder="Practice Phone Number"/>
            <input type="text" style={dataWebsite} onChange={this.handleWebsite} value={this.state.website} placeholder="Practice Website Address"/>
            <input style={inputSubmit} onTouchTap={this.storeMember} type="submit"/>

          </div>
        </div>
        <div>

        </div>
        </main>
      <NavButton/>
      </div>
    );
  }
}
