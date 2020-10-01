import React from 'react';
import profilepic from './person.jpg';


class Profile extends React.Component {
    render(){
        return(
            <div className="ui two column stackable grid container" style={{paddingTop:"8%"}}>
                <div className="column">
                <h2 className="ui header" style={{paddingLeft:"5%"}}>
                    <img className="ui avatar image" src={profilepic} alt="profile pic"/>
                    <div className="content" style={{paddingLeft:"10%"}}>
                        Henry Nguyen
                        <div className="ui sub header">React Developer</div>
                    </div>
                </h2>
                </div>
            </div>
        )
    };
};

export default Profile;
