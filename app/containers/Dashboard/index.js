/*
 *
 * Dashboard
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import NavButton from 'components/NavButton';

export default class Dashboard extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      speciality: '',
      physician: '',
      practice: '',
      phone: '',
      website: '',
      token: sessionStorage.getItem("token")
    };
  }

  componentWillMount() {
    if (!this.state.token) {
      this.context.router.push("/signin");
    }
  }

  handleSpeciality = (event) => {
    this.setState({speciality: event.target.value});
  }

  handlePhysician = (event) => {
    this.setState({physician: event.target.value});
  }
  handlePractice = (event) => {
    this.setState({practice: event.target.value});
  }
  handlePhone = (event) => {
    this.setState({phone: event.target.value});
  }
  handleWebsite = (event) => {
    this.setState({website: event.target.value});
  }

  storeMember = () => {
    var data = new FormData();
    data.append('speciality', this.state.speciality);
    data.append('physician', this.state.physician);
    data.append('practice', this.state.practice);
    data.append('phone', this.state.phone);
    data.append('website', this.state.website);

    fetch("http://localhost:8000/api/storeMember?token=" + this.state.token, {
      method: 'post',
      speciality: data,
      physician: data,
      practice: data,
      phone: data,
      website: data,
      headers: {
        "Authorization": "Bearer " + this.state.token
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
  }

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
    const preferredContainer = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      background: '#E7DCEA',
      paddingTop: '30px',
      paddingLeft: '30px',
      paddingBottom: '30px'
    }
    const preferred = {
      width: '25%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'Raleway',
      fontSize: '20px',
      color: '#31137C'
    }
    const preferredSpeciality = {
      width: '100%',
      display: 'flex',
      flexWrap: 'auto',
      background: '#BF1932',
      paddingLeft: '5px'
    }
    const preferredPhysician = {
      width: '100%',
      display: 'flex',
      flexWrap: 'auto',
      background: '#D74388',
      paddingLeft: '5px'
    }
    const preferredPractice = {
      width: '100%',
      display: 'flex',
      flexWrap: 'auto',
      background: '#DB7453',
      paddingLeft: '5px'
    }
    const preferredPhone = {
      width: '100%',
      display: 'flex',
      flexWrap: 'auto',
      background: '#D1B6E4',
      paddingLeft: '5px'
    }
    const preferredWebsite = {
      width: '100%',
      display: 'flex',
      flexWrap: 'auto',
      background: '#FCFAF1',
      paddingLeft: '5px'
    }
    const inputSubmit = {
      width: '100%',
      height: 'auto',
      background: '#74D1EA'
    }
    return (
      <div>
        <Helmet title="Dashboard" meta={[{
            name: 'description',
            content: 'Description of Dashboard'
          }
        ]}/>
        <div style={headTextStyle}>
          Dashboard
        </div>
        <main>
          <div style={titleStyle}>Enter UPA CIN Physician Membership Database Parts</div>

          <div style={preferredContainer}>
            <div style={preferred}>Add Physician to Membership:
              <textarea style={preferredPhysician} onChange={this.handlePhysician} value={this.state.physician} placeholder="Physician's Name"></textarea>
              <textarea style={preferredSpeciality} onChange={this.handleSpeciality} value={this.state.speciality} placeholder="Physician's Speciality #"></textarea>
              <textarea style={preferredPractice} onChange={this.handlePractice} value={this.state.practice} placeholder="Practice Name"></textarea>
              <textarea style={preferredPhone} onChange={this.handlePhone} value={this.state.phone} placeholder="Practice Phone Number"></textarea>
              <textarea style={preferredWebsite} onChange={this.handleWebsite} value={this.state.website} placeholder="Practice Website Address"></textarea>
              <input style={inputSubmit} onTouchTap={this.storeMember} type="submit"/>
            </div>
          </div>
        </main>
        <NavButton/>
      </div>
    );
  }
}

Dashboard.contextTypes = {
  router: React.PropTypes.object
}
