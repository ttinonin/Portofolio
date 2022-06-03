import React from "react";
import { Link, BrowserRouter, Route, Switch } from 'react-router-dom';
import Certificates from '../components/Certificates'
import Index from "../components/Index";
import Header from "../components/Header";
import NotFound from "../components/NotFound";
import About from "../components/About";
import Contact from "../components/Contact";

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
            <Route path="/" component={Index} exact={true} />
            <Route path="/certificates" component={Certificates} />
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter