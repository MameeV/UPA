/*
 *
 * Edit
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import {Link} from 'react-router';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import NavButton from 'components/NavButton';

export default class Edit extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      id:'',
      speciality: '',
      physician: '',
      practice: '',
      phone: '',
      website: '',
      token: sessionStorage.getItem('token')
    };
  }

  componentWillMount() {
    fetch('http://localhost:8000/api/showPhysician/' + this.props.params.id).then(function(res) {
      return res.json();
    }).then(function(json) {
      this.setState({
        id:json.id,
        physician: json.physician,
        practice: json.practice,
        phone: json.phone,
        website: json.website,
        speciality: json.speciality
      });
    }.bind(this));
  }

  handleSpeciality = (event) => {
    this.setState({speciality: event.target.value});
  };

  handlePhysician = (event) => {
    this.setState({physician: event.target.value});
  };

  handlePractice = (event) => {
    this.setState({practice: event.target.value});
  };

  handlePhone = (event) => {
    this.setState({phone: event.target.value});
  };

  handleWebsite = (event) => {
    this.setState({website: event.target.value});
  };

  updateMember = () => {
    var data = new FormData();
    data.append('speciality', this.state.speciality);
    data.append('physician', this.state.physician);
    data.append('practice', this.state.practice);
    data.append('phone', this.state.phone);
    data.append('website', this.state.website);

    fetch('http://localhost:8000/api/updateMember/'+this.state.id+'?token=' + this.state.token, {
      method: 'post',
      body:data,
      headers: {
        'Authorization': 'Bearer ' + this.state.token
      }
    }).then(function(response) {
      return response.json();
    }).then(function(json) {
      if (json.success) {
        alert(json.success);
      } else if (json.error) {
        alert(json.error);
      }
    });
  };

  render() {
    const titleStyle = {
      width: '100%',
      height: 'auto',
      fontFamily: 'Raleway Dots',
      fontSize: '30px',
      color: '#EB9444',
      textAlign: 'center',
      paddingTop: '5px',
      background: '#31137C'
    }
    const headTextStyle = {
      width: '100%',
      height: '80px',
      top: 'auto',
      borderTop: '3px solid #74D1EA',
      borderBottom: '3px solid #74D1EA',
      background: '#E7DCEA',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      fontFamily: 'Fredericka the Great',
      fontStyle: 'cursive',
      fontWeight: 'bold',
      fontSize: '40px',
      color: '#31137C',
      textTransform: 'uppercase',
      textAlign: 'center',
      paddingTop: '10px'
    }
    const dataContainer = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      background: '#E7DCEA',
      paddingTop: '30px',
      paddingLeft: '30px',
      paddingBottom: '30px'
    }
    const data = {
      width: '25%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'Raleway',
      fontSize: '20px',
      color: '#31137C'
    }
    const dataSpeciality = {
      width: '100%',
      display: 'flex',
      flexWrap: 'auto',
      background: '#BF1932',
      paddingLeft: '5px'
    };
    const dataPhysician = {
      width: '100%',
      display: 'flex',
      flexWrap: 'auto',
      background: '#FCFAF1',
      paddingLeft: '5px'
    }
    const dataPractice = {
      width: '100%',
      display: 'flex',
      flexWrap: 'auto',
      background: '#DB7453',
      paddingLeft: '5px'
    }
    const dataPhone = {
      width: '100%',
      display: 'flex',
      flexWrap: 'auto',
      background: '#D1B6E4',
      paddingLeft: '5px'
    }
    const dataWebsite = {
      width: '100%',
      height: 'auto',
      display: 'flex',
      flexWrap: 'auto',
      background: '#D74388',
      paddingLeft: '5px'
    }
    const inputSubmit = {
      width: '100%',
      height: 'auto',
      background: '#74D1EA'
    }
    const selectStyle = {
      width: '100%',
      fontFamily: 'Raleway',
      fontWeight: 'Bold',
      fontSize: '30px',
      color: '#000000',
      textDecoration: 'none',
      display: 'block'
    }

    return (
      <div>
        <Helmet title="Edit" meta={[{
            name: 'description',
            content: 'Edit Member Details'
          }
        ]}/>
        <div style={headTextStyle}>
          Edit Dashboard
        </div>
        <main>
          <div style={titleStyle}>Edit Physician Details Here!</div>

          <div style={dataContainer}>
            <div style={data}>
              <br/>
              <input type="text" style={dataPhysician} onChange={this.handlePhysician} value={this.state.physician} placeholder="Last Name, M. First, MD/DO"/>
              <input type="text" style={dataSpeciality} onChange={this.handleSpeciality} value={this.state.speciality} placeholder="Physician's Speciality #"/>
              <input type="text" style={dataPractice} onChange={this.handlePractice} value={this.state.practice} placeholder="Practice Name"/>
              <input type="text" style={dataPhone} onChange={this.handlePhone} value={this.state.phone} placeholder="Practice Phone Number"/>
              <input type="text" style={dataWebsite} onChange={this.handleWebsite} value={this.state.website} placeholder="Practice Website Address"/>
              <input style={inputSubmit} onTouchTap={this.updateMember} type="submit"/>
            </div>
          </div>
          <div></div>
        </main>
        <NavButton/>
      </div>
    );
  }
}
