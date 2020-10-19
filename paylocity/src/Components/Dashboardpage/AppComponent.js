import React from 'react';
import PunchIcon from './punch.png';
import CommunityIcon from './community.jpg';
import CalendarIcon from './calendar.png';
import {Link} from 'react-router-dom';
import TodoIcon from './todo.png'
import Benfits from './benfits.png';
import Learning from './learning.png';
import Setting from './setting.png'

class AppComponent extends React.Component{
    render(){
        return(
            <div style={{paddingTop:"5%",paddingLeft:"3%", paddingRight:"3%"}}>
                <div className="ui three column center aligned grid">
                        <div className="column">
                            <Link to='/punchtime'>
                                <a>
                                <img style={{height:'90px', width:'120px', overflow:'hidden'}} className="ui image" src={PunchIcon} alt="Punch"/>
                                Punch time
                                </a>
                            </Link>
                        </div>
                        <div className="column">
                            <Link to='/community'><a>
                                <img style={{height:'90px', width:'120px', overflow:'hidden'}} className="ui image" src={CommunityIcon} alt="Community"/>
                                Community
                            </a></Link>
                        </div>
                        <div className="column">
                            <Link to='/paylocityboard'><a>
                                <img style={{height:'90px', width:'120px', overflow:'hidden'}} className="ui image" src={TodoIcon} alt="PaylocityBoard"/>
                                Paylocity Board
                            </a></Link>
                        </div>
                        <div className="column">
                            <a>
                                <img style={{height:'90px', width:'120px', overflow:'hidden'}} className="ui image" src={CalendarIcon} alt="Calender"/>
                                Calendar
                            </a>
                        </div>
                        <div className="column">
                            <a>
                                <img style={{height:'90px', width:'120px', overflow:'hidden'}} className="ui image" src={Benfits} alt="Benfits"/>
                                Benfits
                            </a>
                        </div>
                        <div className="column">
                            <a>
                                <img style={{height:'90px', width:'120px', overflow:'hidden'}} className="ui image" src={Learning} alt="Learning"/>
                                Learning
                            </a>
                        </div>
                        <div className="column">
                            <a>
                                <img style={{height:'90px', width:'120px', overflow:'hidden'}} className="ui image" src={Setting} alt="Setting"/>
                                Setting
                            </a>
                        </div>
                </div>
            </div>
        )
    }
};

export default AppComponent;