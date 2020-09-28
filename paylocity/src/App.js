import React from 'react';
// import Clocking from '../src/Components/Clocking';
import DashBoard from './Components/Dashboardpage/DashBoard';
import Logo from './paylocitylogo.png';

class App extends React.Component {
    state={
        page: 'login',
        username: '',
        password: '',
        CorrectUsername: 'henry',
        CorrectPassword: '123'
    }

    componentDidMount() {
        document.body.style.backgroundColor = "#ff914d"
    };

    login = ()=>{
        if (this.state.username === this.state.CorrectUsername && this.state.password === this.state.CorrectPassword){
            this.setState({page: 'Dashboard'})
        }
    }

    render() {
        return (
           <div >
                {this.state.page === 'login' && (     
                        <div className="ui middle aligned center aligned grid" style={{paddingTop: "50%"}}>
                            <img className="ui center aligned small image" src={Logo} alt="logo"/>
                            <form className="ui large form">
                                <div className="column">
                                    <div className="ui form">
                                        <div className="ui stacked segment">
                                            <div className="field">
                                                <label>Username</label>
                                                    <div className="ui left icon input">
                                                        <input onChange={event=>this.setState({username: event.target.value})} type="text" placeholder="UserName" ></input>
                                                        <i className="user icon"></i>
                                                    </div>
                                            </div>
                                            <div className="field">
                                                <label>Password</label>
                                                    <div className="ui left icon input">
                                                        <input  onChange={event=>this.setState({password: event.target.value})} type="password" placeholder="Password"></input>
                                                        <i className="lock icon"></i>
                                                    </div>
                                            </div>
                                            <div>
                                                    <button class="ui fluid large orange submit button" onClick={()=>this.login()}>Login</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                )}
                {this.state.page === 'Dashboard' && <DashBoard />}
            </div>

        );
    }
}

export default App;