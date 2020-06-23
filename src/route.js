import React, {Component} from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Dashboard from './components/DashScreen/dashboard';

class Routes extends Component {
    state = {  }
    render() { 
        return ( 
            <Router>
                <Switch>
                    <Route exact path="/" component={Dashboard}/>
                </Switch>
            </Router>
         );
    }
}
 
export default Routes;

