import React from 'react';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Home';
import Contact from './Contact'

export default function App() {
    return (
        <div>
            <Router>
                <Nav />
                <Switch>
                    <Route path={'/'} exact component={Home} />
                    <Route path={'/about'} component={About} />
                    <Route path={'/shop'} component={Shop} />
                    <Route path={'/contact'} component={Contact} />
                </Switch>
            </Router>
        </div>
    )
}
