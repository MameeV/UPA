/**
*
* Head2
*
*/

import React from 'react';

class Head2 extends React.PureComponent {
  constructor(props){
    super(props);
    this.state={
      pageTitle:""

    }
  }

  componentWillMount(){
    this.setState({
      pageTitle: this.props.title
    })

  }
  render() {
    const heading2Style={
      width: "100%",
      height: "80px",
      top: "auto",
      borderTop:"3px solid #74D1EA",
      borderBottom:"3px solid #74D1EA",
      background: "#FAE0EE",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
    }

    return (
      <div>
      <header>
        <div style={heading2Style}>
          {this.state.pageTitle}
        </div>
      </header>
      </div>
    );
  }
}

export default Head2;
