import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import About from '../../components/about/about';

let Main = (props) => {
    let {path} = useRouteMatch();
    return (
        <div>
            <Header {...props} />
            <main className="Main">
            <Switch>
                <Route path={`${path}/about`}>
                    <About {...props} />
                </Route>
                <Route exact path={path}>
                    <h1 className="Title">You are in the Homepage Login is success!</h1>
                    <p className="Content">click Logout button to exit</p>
                </Route>
            </Switch>
            </main>
            <Footer />
        </div>
    )
}

export default Main;