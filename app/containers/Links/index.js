/*
 *
 * Links
 *
 */

 import React from 'react';
 import Helmet from 'react-helmet';
 import {Link} from "react-router";
 import NavMobile from 'components/NavMobile';
 import MessageButton from 'components/MessageButton';
 import Responsive from 'react-responsive';

 export default class Articles extends React.PureComponent {
   render() {
   const footerStyle={
     background: "#74D1EA",
     position: "fixed",
     bottom: "10px",
     right: "10px",
     padding: "15px",
     borderRadius: "50px"
   }
   const body2Style={
     width: "100%",
     height: "100vh",
     background: "#FAE0EE",
     fontFamily: "Raleway",
     fontWeight: "Bold",
     fontSize: "20px",
     color: "#3E262A",
     paddingTop: "30px",
     paddingLeft: "25px"
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
   const indentStyle={
     margin: "15px"
   }
   const resourceContainer={
     display: "flex",
     flexDirection: "row",
     flexWrap: "wrap",
     width: "100%",
     maxWidth: "1000px",
     justifyContent: "space-around",
     background: "#FAE0EE",
     margin: "0 auto",
   }
   const resourceContainerMobile={
     display: "flex",
     flexDirection: "column",
     width: "100%",
     background: "#FAE0EE"
   }
   const resource={
     width: "25%",
     display: "flex",
     flexDirection: "column"
   }
   const resourceMobile={
     width: "100%",
     display: "flex",
     flexDirection: "column"
   }
   const resourceImage={
     width: "100%",
     height: "auto"
   }
   const resourceTitle={
     width: "100%",
     height: "120px",
     fontFamily:"Raleway",
     fontWeight:"Bold",
     fontSize: "20px",
     color: "#3E262A",
     textShadow: "2px 5px 15px #74D1EA",
     display: "flex",
     flexDirection: "row",
     justifyContent: "center",
     textAlign: "center",
     textOverflow: "ellipsis",
     paddingTop: "15px",
     paddingLeft: "15px",
     paddingRight: "15px"
   }
   const resourceBody={
     width: "100%",
     height: "80px",
     maxHeight: "100px",
     fontFamily:"Raleway",
     fontWeight:"Medium",
     fontSize: "16px",
     color: "#3E262A",
     textAlign: "center",
     paddingTop: "20px",
     paddingLeft: "35px",
     paddingRight: "35px",
     marginBottom: "35px"
   }
   const arrowStyle={
     fontSize: "1.5em",
     color: "#74D1EA",
     paddingTop: "30px"
   }
   const imageStyle={
     width: "100%",
     height: "auto"
   }
   return (
     <div>
       <Helmet title="Links" meta={[ { name: 'description', content: 'Description of Links' }]}/>
       <div style={headTextStyle}>
         Resource Links
       </div>


       <main>
         <NavMobile active={3}/>
           <div style={resourceContainer}>
             <div style={resource}>
               <div style={resourceImage}>
               Image for Resource
               </div>
               <div style={resourceTitle}>
               Learn more about Xxxxxxxx Xxxxxxxx at this website
               </div>
               <div style={resourceBody}>
               Go To Website <span style={arrowStyle}> &#10173; </span>
               </div>
             </div>

             <div style={resource}>
               <img style={resourceImage} src="http://h4z.it/Image/a5823c_MAP.jpg"/>
               <div style={resourceTitle}>
               Visit my Medical Advocacy Partners website!
               </div>
               <div style={resourceBody}>
               Go To Website <span style={arrowStyle}> &#10173; </span>
               </div>
             </div>

             <div style={resource}>
               <img style={resourceImage} src="http://h4z.it/Image/a51170_logo2lg_75x.png"/>
               <div style={resourceTitle}>
               Check out the Collectors Corner at Wolf and Finch
               </div>
               <div style={resourceBody}>
               Go To Website <span style={arrowStyle}> &#10173; </span>

               </div>
             </div>
           </div>

         <MessageButton/>
       </main>
     </div>
    );
  }
}
