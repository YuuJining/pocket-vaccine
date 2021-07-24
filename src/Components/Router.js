import React from "react";
import Header from "Components/Header";
import {HashRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import Community from "Routes/Community";
import My from "Routes/My";
import VaccineGraph from "Routes/VaccineGraph";
import VaccineStatus from "Routes/VaccineStatus";

export default () => (
    <Router>
        <>
        <Header />
        <Switch>
            <Route path="/" exact component={Community} />
            <Route path="/vaccinegraph" exact component={VaccineGraph} />
            <Route path="/vaccinestatus" exact component={VaccineStatus} />
            <Route path="/my" exact component={My} />
            <Redirect from="*" to="/" />
        </Switch>
        </>
    </Router>
);
