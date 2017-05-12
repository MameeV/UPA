/*
 *
 * Home
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import {Link} from "react-router";
import Responsive from 'react-responsive';
import MessageButton from 'components/MessageButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


export default class Home extends React.PureComponent {
  constructor (props){
    super(props);
    this.state={
      value:0,
      speciality:[],
      physician:[],
    }
  }

  componentWillMount(){
    fetch('http://localhost:8000/api/getSpeciality')

    .then(function(response){
      return response.json();
    })
    .then(function(json){
      this.setState({
        speciality:json
      })
    }.bind(this))

  }

//  constructor (props){
//    super(props);
//    this.state={
//      value:0,
//      physician:[],
//    }
//  }
//
//  post Speciality
//    fetch('http://localhost:8000/api/getPhysician')
//
//    .then(function(response){
//      return response.json();
//    })
//    .then(function(json){
//      this.setState({
//        physician:json
//      })
//    }.bind(this))
//
//  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    const titleStyle={
      borderTop:"3px solid #74D1EA",
      borderBottom:"3px solid #74D1EA",
      background: "#EB9444",
      display: "flex",
      flexDirection: "row",
      justifyContent: 'center'
    }
    const logoStyle={
      width: "200px",
      height: "150px",
      paddingTop: "20px"
    }
    const headingStyle={
      fontFamily:"Raleway",
      fontWeight:"Bold",
      color: "#31137C",
      fontSize: "48px",
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
      display: "flex",
      flexDirection: "column",
      flexWrap: "wrap",
      width: "100%",
      maxWidth: "1000px",
      justifyContent: "space-around",
      background: "#FCFAF1",
      margin: "0 auto"
    }
    const preferred={
      width: "100%",
      height: "auto",
      display: "flex",
      flexDirection: "column",
      padding: "10px"
    }
    const preferredSpeciality={
      width: "100%",
      height: "100px",
      background: "#74D1EA",
      fontFamily: "Raleway",
      fontSize: "20px",
      color: "#31137C",
      paddingTop: "15px",
      paddingLeft: "15px"
    }
    const preferredPhysician={
      width: "100%",
      height: "100px",
      paddingTop: "40px",
      background: "#EB9444",
      fontFamily: "Raleway+Dots",
      fontSize: "20px",
      color: "#31137C",
      paddingTop: "35px",
      paddingLeft: "15px"
    }
    const preferredPractice={
      width: "100%",
      height: "auto",
      paddingTop: "20px",
      background: "#FCFAF1"
    }
    const preferredPhone={
      width: "100%",
      height: "auto",
      paddingTop: "20px",
      background: "#FCFAF1"
    }
    const preferredWebsite={
      width: "100%",
      height: "auto",
      paddingTop: "20px",
      background: "#FCFAF1"
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
    const textStyle={
      fontFamily:"Raleway",
      fontWeight:"Bold",
      color: "#31137C",
      fontSize: "20px"
    }
    const selectStyle={
      width: "100%",
      fontFamily:"Raleway",
      fontWeight:"Bold",
      fontSize: "30px",
      color: "#000000",
      textDecoration: "none",
      display:'block',
    }



    return (
      <div>
        <Helmet title="CIN" meta={[ { name: 'description', content: 'UPAs Searchable CIN Application' }]}/>

        <header>


          <span style={titleStyle}>
            <img style={logoStyle} src="http://h4z.it/Image/7e3c1e_UPA.jpg"/>
          <div style={headingStyle}>
            Clinically Integrated Network
            <br/>
            Physician LookUp Application
          </div>
          </span>


        </header>

        <main style={mainStyle}>
          <div style={preferredContainer}>
            <div style={preferred}>
              <br/>
              <br/>
              <div style={textStyle}> If you are looking for a PCP, search for Primary Care Physician in this Speciality Dropdown Box! </div>
              <div style={preferredSpeciality}>
                <SelectField style={selectStyle} floatingLabelText="Choose A Speciality" value={this.state.value} onChange={this.handleChange}>
                {this.state.speciality.map((s, i) => (
                  <MenuItem value={s.id} primaryText={
                      <Link to={`/speciality/${s.id}`} style={selectStyle} key={i}>{s.name}</Link>
                    }
                  />
                ))}

                </SelectField>

              </div>
              <br/>
              <br/>
              <br/>
              <br/>
              <div style={textStyle}> Select or Search for a Physician to Reveal Contact Information </div>
              <div style={preferredPhysician}>
              </div>
              (You Can Search for Physician Names Without Choosing a Specialty)
              <br/>
              <br/>
              <br/>
              Physician Practice Location, Phone Number & Website:
              <div style={preferredPractice}>  </div>
              <br/>
              <div style={preferredPhone}>  </div>
              <br/>
              <div style={preferredWebsite}>  </div>
              <br/>
            </div>
          </div>
        </main>

            <div style={footerStyle}>
              <div style={indentStyle}>
              &copy; Medical Advocacy Partners. Assisting with Navigation through the Value-Based World of Healthcare
              </div>
            </div>

        <MessageButton/>

      </div>
    );
  }
}
