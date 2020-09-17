import React from 'react';
import centering from './centering.css';
import DashBoard from './DashBoard';


class App extends React.Component {
    state={
        page: 'login',
        username: '',
        password: '',
        CorrectUsername: 'henry',
        CorrectPassword: '123'
    }


    login = ()=>{
        if (this.state.username === this.state.CorrectUsername && this.state.password === this.state.CorrectPassword){
            this.setState({page: 'Dashboard'})
        }
    }

    render() {
        return (
           <div>
                {this.state.page === 'login' && (     
                        <div className="ui input centering">
                            <div className="ui placeholder segment">
                                <div className="ui two column very relaxed stackable grid">
                                    <div className="column">
                                        <div className="ui form">
                                            <div className="field">
                                                <label>Username</label>
                                                    <div className="ui left icon input">
                                                        <input onChange={event=>this.setState({username: event.target.value})} type="text" ></input>
                                                        <i className="user icon"></i>
                                                    </div>
                                                </div>
                                                <div className="field">
                                                    <label>Password</label>
                                                        <div className="ui left icon input">
                                                            <input  onChange={event=>this.setState({password: event.target.value})} type="password"></input>
                                                            <i className="lock icon"></i>
                                                        </div>
                                                </div>
                                                <div>
                                                    <button onClick={()=>this.login()}>Login</button>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                )}
                {this.state.page === 'Dashboard' && <DashBoard />}
            </div>
        );
    }
}

export default App;