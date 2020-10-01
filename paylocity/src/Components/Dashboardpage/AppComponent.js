import React from 'react';
import PunchIcon from './punch.png';
import CommunityIcon from './community.jpg';
import CalendarIcon from './calendar.png';

class AppComponent extends React.Component{
    render(){
        return(
            <div style={{paddingTop:"5%",paddingLeft:"3%", paddingRight:"3%"}}>
                <div className="ui three column center aligned grid">
                        <div className="column">
                            <a href="#">
                                <img className="ui small image" src={PunchIcon} alt="Punch"/>
                                Punch time
                            </a>
                        </div>
                        <div className="column">
                            <a href="#">
                                <img className="ui tiny image" src={CommunityIcon} alt="Community"/>
                                Community
                            </a>
                        </div>
                        <div className="column">
                            <a href="#">
                                <img className="ui small image" src={CalendarIcon} alt="Calender"/>
                                Calendar
                            </a>
                        </div>
                </div>
            </div>
        )
    }
};

export default AppComponent;