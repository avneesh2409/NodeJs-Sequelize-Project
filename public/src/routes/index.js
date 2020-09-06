import React from 'react'
import { Route, Switch } from 'react-router'
import Contact from '../components/contact';
import Event from '../components/event';
import Layout from '../components/child/layout';
import Home from '../components/home';
// import Navbar from '../components/child/navbar';
import {CONTACT, EVENT, VEDIOCHAT} from '../store/constants';
import Myvedioroute from '../components/chatComponents/myvedioroute';


const Router = () => {
    return (
        <>
            <Layout>
                {/* <Navbar /> */}
                <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route exact path={`/${CONTACT.toLowerCase()}`} render={() => <Contact />} />
                    <Route exact path={`/${EVENT.toLowerCase()}`} render={() => <Event />} />
                    <Route exact path={`/${VEDIOCHAT.toLowerCase()}/:name/:room`} component={Myvedioroute} />
                    <Route render={() => (<div>Page Not Found</div>)} />
                </Switch>
            </Layout>
        </>
    )
}

export default Router;
