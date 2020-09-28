import React from 'react';
import Logo from './paylocitylogo.png';

export default class Loading extends React.Component{
    componentDidMount() {
        document.body.style.backgroundColor = "#ff914d"
    };

    render(){
        return(
            <div className="ui center aligned stackable grid" style={{paddingTop:"40%"}}>
                <img className="ui center aligned small image" src={Logo} alt="logo"/>
                <div className="column">
                    <div style={{paddingTop:"50%"}}>
                        <button className="ui inverted orange basic button">Continue</button>
                    </div>  
                    <div style={{paddingTop:"50%"}}>
                        <h3>Welcome</h3>
                        <p >"TOGETHER DREAM BIG, START"</p>   
                    </div>
                </div>
            </div>
        )
    };
};
