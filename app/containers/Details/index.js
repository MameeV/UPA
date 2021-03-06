/*
 *
 * Details
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import {Link} from 'react-router';
import Responsive from 'react-responsive';
import NavButton from 'components/NavButton';

export default class Details extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      physician: ''
    };
  }

  componentWillMount() {
    fetch('http://myhealth-map.com/api/showPhysician/' + this.props.params.id).then(function(res) {
      return res.json();
    }).then(function(json) {
      this.setState({physician: json});
    }.bind(this));
  }

  render() {
    const headTextStyle = {
      width: '100%',
      height: '80px',
      top: 'auto',
      borderTop: '3px solid #74D1EA',
      borderBottom: '3px solid #74D1EA',
      background: '#EB9444',
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
    };
    const headMobileStyle = {
      width: '100%',
      height: '80px',
      top: 'auto',
      borderTop: '3px solid #74D1EA',
      borderBottom: '3px solid #74D1EA',
      background: '#EB9444',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      fontFamily: 'Fredericka the Great',
      fontStyle: 'cursive',
      fontWeight: 'bold',
      fontSize: '24px',
      color: '#31137C',
      textAlign: 'center',
      paddingTop: '14px'
    };
    const detailsContainer = {
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      width: '100%',
      maxWidth: '500px',
      margin: '0 auto'
    };
    const detail = {
      width: '100%',
      height: 'auto',
      display: 'flex',
      flexDirection: 'column',
      padding: '5px'
    };
    const detailPractice = {
      width: '100%',
      height: 'auto',
      fontFamily: 'Raleway',
      fontSize: '20px',
      color: '#31137C',
      paddingTop: '10px',
      display: 'block'
    };
    const detailPhone = {
      width: '100%',
      height: 'auto',
      fontFamily: 'Raleway',
      fontSize: '20px',
      color: '#31137C',
      display: 'block'
    };
    const detailWebsite = {
      width: '100%',
      height: 'auto',
      fontFamily: 'Raleway',
      fontSize: '20px',
      color: '#31137C',
      display: 'block'
    };
    const footerStyle = {
      width: "100%",
      background: '#EB9444',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'left',
      fontFamily: 'Raleway',
      fontWeight: 'Bold',
      color: '#31137C',
      fontSize: '18px',
      paddingLeft: '15px',
      position: "fixed",
      bottom: "5px",
    };

    return (
      <div>
        <Helmet title="Details" meta={[{
            name: 'description',
            content: 'Member Details'
          }
        ]}/>
        
        <Responsive minDeviceWidth={1024}>
        <div style={headTextStyle}>
          {this.state.physician.physician}
        </div>
        </Responsive>
        
        <Responsive maxDeviceWidth={1023}>
        <div style={headMobileStyle}>
          {this.state.physician.physician}
        </div>
        </Responsive>
        
        <main>
          <div style={detailsContainer}>
            <div style={detail}>
              <div style={detailPractice}>
                {this.state.physician.practice}
              </div>
              <div style={detailPhone}>
                PHONE #: {this.state.physician.phone}
              </div>
              <div style={detailWebsite}>
                <a target="_blank" href={this.state.physician.website}>Website Link (if available)</a>
              </div>
            </div>
          </div>

        </main>
        <div style={footerStyle}>
          &copy; Medical Advocacy Partners. Assisting with Navigation in the Value-Based World of Healthcare
        </div>
        <NavButton/>
      </div>
    );
  }
}
