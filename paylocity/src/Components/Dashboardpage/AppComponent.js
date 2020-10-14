import React from 'react';
import PunchIcon from './punch.png';
import CommunityIcon from './community.jpg';
import CalendarIcon from './calendar.png';
import {Link} from 'react-router-dom';

class AppComponent extends React.Component{
    render(){
        return(
            <div style={{paddingTop:"5%",paddingLeft:"3%", paddingRight:"3%"}}>
                <div className="ui three column center aligned grid">
                        <div className="column">
                            <Link to='punchtime'><a>
                                <img className="ui small image" src={PunchIcon} alt="Punch"/>
                                Punch time
                            </a></Link>
                        </div>
                        <div className="column">
                            <Link to='/community'><a>
                                <img className="ui tiny image" src={CommunityIcon} alt="Community"/>
                                Community
                            </a></Link>
                        </div>
                        <div className="column">
                            <Link to='/paylocityboard'><a>
                                <img className="ui small image" src={CalendarIcon} alt="Calender"/>
                                Paylocity Board
                            </a></Link>
                        </div>
                </div>
            </div>
        )
    }
};

export default AppComponent;