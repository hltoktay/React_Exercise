import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import Aboutus from './aboutus';
import Contact from './contact';
import Project from './project';

const Main = () => (
    <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route  path='/aboutus' component={Aboutus} />
        <Route  path='/contact' component={Contact} />
        <Route  path='/project' component={Project} />
    </Switch>
)

export default Main;