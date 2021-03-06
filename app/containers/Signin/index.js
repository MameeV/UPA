/*
 *
 * Signin
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import NavButton from 'components/NavButton';


export default class Signin extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }
  handleEmail= (event) => {
    this.setState({email: event.target.value});
  }
  handlePassword = (event) => {
    this.setState({password: event.target.value});
  }
  signin = () => {
    var _this = this;
    var data = new FormData();
    data.append('email', this.state.email);
    data.append('password', this.state.password);

    fetch('http://myhealth-map.com/api/signin', {
      
      method: 'post',
      body: data
    }).then(function(response) {
      return response.json();
    }).then(function(json) {
      if (json.error) {
        alert(json.error);
      } else if (json.token === false) {
        alert('Invalid Credentials');
      } else if (json.token !== false) {
        sessionStorage.setItem('token', json.token);

        _this.context.router.push('/dashboard');
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
    };
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
    };
    const accessContainer = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      background: '#E7DCEA',
      paddingTop: '30px',
      paddingLeft: '30px',
      paddingBottom: '30px'
    };
    const access = {
      width: '25%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    };
    const accessEmail = {
      width: '100%',
      display: 'flex',
      flexWrap: 'auto',
      background: '#DB7453',
      paddingLeft: '5px'
    };
    const accessPassword = {
      width: '100%',
      display: 'flex',
      flexWrap: 'auto',
      background: '#D1B6E4',
      paddingLeft: '5px'
    };
    const inputSubmit = {
      width: '100%',
      height: 'auto',
      background: '#74D1EA'
    };
    const issueStyle = {
      width: '100%',
      height: 'auto',
      fontFamily: 'Raleway',
      fontSize: '18px',
      color: '#74D1EA',
      textAlign: 'center',
      paddingTop: '30px',
      paddingBottom: '20px',
      background: '#31137C'
    };

    return (
      <div>
        <Helmet title="Access" meta={[{
            name: 'description',
            content: 'Admin SignIn Page'
          }
        ]}/>

        <div style={headTextStyle}>
          Please Sign In
        </div>
        <main>
          <div style={titleStyle}>UPA CIN Physician Membership Database</div>
          <div style={accessContainer}>
            <div style={access}>
            <label style={accessEmail}>
              Email:
              <input onChange={this.handleEmail} style={accessEmail} value={this.state.email}/>
            </label>
              <label style={accessPassword}>
                Password:
                <input onChange={this.handlePassword} style={accessPassword} value={this.state.password}/>
              </label>
              <input onTouchTap={() => this.signin()} type="submit" value="SUBMIT" style={inputSubmit}/>
            </div>
          </div>
        </main>
        <NavButton/>
      </div>
    );
  }
}
Signin.contextTypes = {
  router: React.PropTypes.object
};
