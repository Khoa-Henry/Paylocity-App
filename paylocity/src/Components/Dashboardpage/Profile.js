import React from 'react';
import profilepic from './person.jpg';
import './style.css'


class Profile extends React.Component {
    render(){
        return(
            <div className="ui two column stackable grid container" style={{paddingTop:"8%"}}>
               
                <div class="container">
                <div class="cover-photo">
                    <img src="profile.jpg" class="profile"/>    
                </div>
                <div class="profile-name">Maria Paul</div>
                <p class="about">Project Manager (Google)<br/>Five Year Experience</p>  
                <button class="msg-btn">Message</button>
                <button class="follow-btn">Following</button>

                <div>
                    <i class="fab fa-facebook"></i>
                    <i class="fab fa-youtube"></i>
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-twitter"></i>  
                </div>
                </div>
            </div>
        )
    };
};

export default Profile;
