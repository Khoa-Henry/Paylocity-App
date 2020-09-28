import React from 'react';
import profilepic from './person.jpg';
import Profile from './Profile';

class DashBoard extends React.Component {
    state={
        page: 'Dashboard'
    }

    componentDidMount() {
        document.body.style.backgroundColor = "#ff914d"
    };

    render() {
        return (
            <div> 
                <div className="ui items">
                    <div className="item">
                        <div className="ui tiny image">
                            <img src={profilepic} alt="profile pic"/>
                        </div>
                        <div className="content">
                            <h1 className="header">Henry Nguyen</h1>
                            <div className="meta">
                                <h1 className="header">React Developer</h1>
                            </div>
                        </div>
                    </div>      
                </div>
                <Profile/>
            </div>
            
        );
    }
};



export default DashBoard;