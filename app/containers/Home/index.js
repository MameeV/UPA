/*
 *
 * Home
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import {Link} from 'react-router';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Responsive from 'react-responsive';

export default class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      speciality: [],
      physicians: [],
      disabled: true
    };
  }

  componentWillMount() {
    fetch('http://myhealth-map.com/api/getSpeciality').then(function(response) {
      return response.json();
    }).then(function(json) {
      this.setState({speciality: json});
    }.bind(this));
  }

  handleChange = (event, index, value) => {
    this.setState({
      value: value
    }, function() {
      this.selectSpeciality();
    }.bind(this));
  };

  selectSpeciality = () => {
    var data = new FormData();
    data.append('speciality', this.state.value);

    fetch('http://myhealth-map.com/api/selectSpeciality', {
      method: 'post',
      body: data
    }).then(function(response) {
      return response.json();
    }).then(function(json) {
      this.setState({physicians: json, disabled: false});
    }.bind(this));
  }

  render() {
    const titleStyle = {
      borderTop: '3px solid #74D1EA',
      borderBottom: '3px solid #74D1EA',
      background: '#EB9444',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center'
    };
    const logoStyle = {
      width: '200px',
      height: '150px',
      paddingTop: '20px'
    };
    const headingStyle = {
      fontFamily: 'Raleway',
      fontWeight: 'Bold',
      color: '#31137C',
      fontSize: '48px',
      margin: '15px'
    };
    const mainStyle = {
      display: 'flex',
      flexDirection: 'row'
    };
    const indentStyle = {
      margin: '15px'
    };
    const preferredContainer = {
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      width: '100%',
      maxWidth: '1000px',
      justifyContent: 'space-around',
      background: '#FCFAF1',
      margin: '0 auto'
    };
    const preferred = {
      width: '100%',
      height: 'auto',
      display: 'flex',
      flexDirection: 'column',
      padding: '10px'
    };
    const preferredSpeciality = {
      width: '100%',
      height: '100px',
      background: '#74D1EA',
      fontFamily: 'Raleway',
      fontSize: '20px',
      color: '#31137C',
      paddingTop: '15px',
      paddingLeft: '15px'
    };
    const preferredPhysician = {
      width: '100%',
      height: '100px',
      paddingTop: '40px',
      background: '#EB9444',
      fontFamily: 'Raleway',
      fontSize: '20px',
      color: '#31137C',
      paddingLeft: '15px',
      display: 'block'
    };
    const footerStyle = {
      background: '#EB9444',
      display: 'flex',
      flexDirection: 'row',
      fontFamily: 'Raleway',
      fontWeight: 'Bold',
      color: '#31137C',
      fontSize: '18px'
    };
    const textStyle = {
      fontFamily: 'Raleway',
      fontWeight: 'Bold',
      color: '#31137C',
      fontSize: '20px',
      textDecoration: 'none'
    };
    const selectStyle = {
      width: '100%',
      fontFamily: 'Raleway',
      fontWeight: 'Bold',
      fontSize: '25px',
      color: '#000000',
      textDecoration: 'none'
    };
    const menuStyle = {
      color: '#000000',
      textDecoration: 'none'
    };

    return (
      <div>
        <Helmet title="CIN" meta={[{
            name: 'description',
            content: 'UPAs CIN LookUp Application'
          }
        ]}/>
        <header>
          <span style={titleStyle}>
            <img style={logoStyle} src="http://h4z.it/Image/7e3c1e_UPA.jpg"/>
            
            <Responsive minDeviceWidth={1024}>
            <div style={headingStyle}>
              Clinically Integrated Network
              <br/>
              Physician LookUp Application
            </div>
            </Responsive>
            
            <Responsive maxDeviceWidth={1023}>
            <div style={headingStyle}>
              CIN
              <br/>
              App
            </div>
            </Responsive>
            
          </span>
        </header>
        <main style={mainStyle}>
          <div style={preferredContainer}>
            <div style={preferred}>
              <br/>
              <br/>
              <div style={textStyle}>
                If you are looking for a PCP, search for Primary Care Physician in this Speciality Dropdown Box!
              </div>
              <div style={preferredSpeciality}>
                <SelectField style={selectStyle} hintText="Choose A Speciality" value={this.state.value} onChange={this.handleChange}>
                  {this.state.speciality.map((s, i) => (<MenuItem style={selectStyle} value={s.id} primaryText={s.name}/>))}
                </SelectField>
              </div>
              <br/>
              <br/>
              <div style={textStyle}>
                Select a Physician to Reveal Contact Information
              </div>
              <div style={preferredPhysician}>
                <SelectField style={selectStyle} disabled={this.state.disabled}>
                  {this.state.physicians.map((p, i) => (
                    <Link to={`/details/${p.id}`} style={menuStyle}>
                      <MenuItem value={p.id} style={selectStyle} primaryText={p.physician}/>
                    </Link>
                  ))}
                </SelectField>
              </div>
            </div>
          </div>
        </main>
        <div style={footerStyle}>
          <div style={indentStyle}>
            &copy; Medical Advocacy Partners. Assisting with Navigation in the Value-Based World of Healthcare
          </div>
        </div>
        
      </div>
    );
  }
}
