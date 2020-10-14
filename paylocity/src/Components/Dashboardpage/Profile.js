import React from 'react';
// import profilepic from './person.jpg';
import './style.css'


class Profile extends React.Component {
    render(){
        return(
            <div className="ui two column stackable grid container" style={{paddingTop:"8%"}}>
               
                <div className="container">
                <div className="cover-photo">
                    <img src="profile.jpg" className="profile" alt="profilepic"/>    
                </div>
                <div className="profile-name">Maria Paul</div>
                <p className="about">Project Manager (Google)<br/>Five Year Experience</p>  
                <button className="msg-btn">Message</button>
                <button className="follow-btn">Following</button>

                <div>
                    <i className="fab fa-facebook"></i>
                    <i className="fab fa-youtube"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-twitter"></i>  
                </div>
                </div>
            </div>
        )
    };
};

export default Profile;
