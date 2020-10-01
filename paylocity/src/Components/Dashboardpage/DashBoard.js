import React from 'react';
import Profile from './Profile';
import AppComponent from './AppComponent';

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
                <Profile/>
                <div className="ui divider" ></div>
                <AppComponent/>
            </div>
        );
    }
};



export default DashBoard;