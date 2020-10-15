import React from 'react';
import Dashboard from './Components/Dashboardpage/DashBoard';
import Signup from './Signup';
import App from './App';
import ToDo from './Components/Todopage/Todo';
import Clocking from './Components/PunchTime/Clocking';
import Community from './Components/Communitypage/Community';
import Loading from './Loading';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

export default function Nav(){
    const [userInput,setUserInput] = React.useState('');
    const [items, setItems] = React.useState([]);
    const [showList, setShowList] = React.useState('all');

    return(
        <Router>
            <Switch>
                    <Route exact path='/'><Loading/></Route>
                    <Route path='/dashboard'><Dashboard/></Route>
                    <Route path='/signup'><Signup/></Route>
                    <Route path='/login'><App/></Route>
                    <Route path='/paylocityboard'>
                        <ToDo
                            userInput={userInput}
                            items={items}
                            showList={showList}
                            setUserInput={setUserInput}
                            setItems={setItems}
                            setShowList={setShowList}
                        />
                    </Route>
                    <Route path='/punchtime'><Clocking/></Route>
                    <Route path='/community'><Community/></Route>
            </Switch>
        </Router>
    )
}