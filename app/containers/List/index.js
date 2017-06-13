/*
 *
 * List
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import {Link} from 'react-router';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import NavButton from 'components/NavButton';
import FlatButton from 'material-ui/FlatButton';
import Responsive from 'react-responsive';

export default class List extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      physicians: [],
      data: '',
      physician: '',
      contactOpen: false
    };
  }

  componentWillMount() {
    fetch('http://localhost:8000/api/getPhysician').then(function(response) {
      return response.json();
    }).then(function(json) {
      this.setState({physicians: json});
    }.bind(this));
  }

  handleChange = (event, index, value) => {
    var physicians = this.state.physicians;

    for (var i = 0; i < physicians.length; i++) {
      if (value == physicians[i].id) {
        this.setState({data: physicians[i]});
      }
    }
  };
  
  deleteMember=(id)=>{
    fetch('http://localhost:8000/api/deleteMember'+id,{
      headers:{"Authorization":"Bearer "+this.state.token},
      method:"POST",
      body:data
    })
    .then(function(res){
      return res.json();
    })
    .then(function(json){
      if(json.success){
        alert(json.success)
      }else if(json.error){
        alert(json.error)
      }
    })
  }
  
  showPhysician = () => {
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
      display: 'flex',
      flexDirection: 'column',
      padding: '5px'
    };
    const detailName = {
      width: '100%',
      fontFamily: 'Raleway',
      fontSize: '20px',
      color: '#31137C',
      display: 'block'
    };
    const detailPractice = {
      width: '100%',
      fontFamily: 'Raleway',
      fontSize: '20px',
      color: '#31137C',
      paddingTop: '20px',
      display: 'block'
    };
    const detailPhone = {
      width: '100%',
      fontFamily: 'Raleway',
      fontSize: '20px',
      color: '#31137C',
      display: 'block'
    };
    const detailWebsite = {
      width: '100%',
      fontFamily: 'Raleway',
      fontSize: '20px',
      color: '#31137C',
      display: 'block'
    };
    const editStyle = {
      background: '#74D1EA',
      position: 'fixed',
      top: '500px',
      right: '10px',
      borderRadius: '50px',
      fontFamily: 'Raleway',
      fontWeight: 'Bold',
      fontStyle: 'Italic',
      fontSize: '100%',
      color: '#CA4046'
    };
    const deleteStyle = {
      background: '#CA4046',
      position: 'fixed',
      top: '550px',
      right: '10px',
      borderRadius: '50px',
      fontFamily: 'Raleway',
      fontWeight: 'Bold',
      fontStyle: 'Italic',
      fontSize: '100%',
      color: '#74D1EA'
    };
    if (this.state.data !== '') {
      return (
        <div style={detailsContainer}>
          <div style={detail}>
            <div style={detailName}>
              {this.state.data.physician}
            </div>
            <div style={detailPractice}>
              {this.state.data.practice}
            </div>
            <div style={detailPhone}>
              PHONE #: {this.state.data.phone}
            </div>
            <div style={detailWebsite}>
              <a href={this.state.data.website} target="_blank">Website Link (if available)</a>
            </div>
            <FlatButton style={editStyle} label="Edit Details" containerElement={< Link to={`/edit/${this.state.data.id}`} > </Link>} onTouchTap={this.handleOpen}/>
            <FlatButton style={deleteStyle} label="DELETE Physician!" onTouchTap={()=>this.deleteMember(this.state.data.id)}/>
          </div>
        </div>
      );
    }
  };

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
    const preferredContainer = {
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      width: '100%',
      maxWidth: '500px',
      background: '#FCFAF1',
      margin: '0 auto'
    };
    const preferred = {
      width: '100%',
      height: '40px',
      display: 'flex',
      flexDirection: 'column'
    };
    const preferredPhysician = {
      width: '100%',
      height: '100px',
      background: '#EB9444',
      fontFamily: 'Raleway',
      fontSize: '28px',
      color: '#31137C',
      display: 'block'
    };
    const selectStyle = {
      width: '100%',
      fontFamily: 'Raleway',
      fontWeight: 'Bold',
      fontSize: '25px',
      color: '#000000',
      textDecoration: 'none',
      display: 'block'
    };

    return (
      <div>
        <Helmet title="List" meta={[{
            name: 'description',
            content: 'UPA CIN Physician Directory'
          }
        ]}/>

        <header>
          <span style={titleStyle}>
            <img style={logoStyle} src="http://h4z.it/Image/7e3c1e_UPA.jpg"/>
            
            <Responsive minDeviceWidth={1024}>
            <div style={headingStyle}>
              CIN
              <br/>
              Physician Directory
            </div>
            </Responsive>
            
            <Responsive maxDeviceWidth={1023}>
            <div style={headingStyle}>
              CIN
              <br/>
              List
            </div>
            </Responsive>
            
          </span>
        </header>
        <main style={mainStyle}>
          <div style={preferredContainer}>
            <div style={preferred}>
              <div style={preferredPhysician}>
                <SelectField style={selectStyle} value={this.state.value} onChange={this.handleChange}>
                  {this.state.physicians.map((p, i) => (<MenuItem value={p.id} style={selectStyle} primaryText={p.physician}/>))}
                </SelectField>
                {this.showPhysician()}
              </div>
            </div>
          </div>
        </main>
        <NavButton/>
      </div>
    );
  }
}
