import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import User from './Set';
import UserInfo from './UserInfo';

const App = () => {
    return (
        <Fragment>
            <Router>
                <Link to='/'><button>Home</button></Link>
                <Switch>
                    <Route exact path='/'>
                        <User/>
                    </Route>
                    <Route exact path='/:id/details'>
                        <UserInfo/>
                    </Route>
                </Switch>
            </Router>
        </Fragment>

    )


}

export default App;
