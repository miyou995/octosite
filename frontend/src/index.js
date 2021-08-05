// React Required
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// Create Import File
import './index.scss'

// Dark Home Layout 
import Index from './page/Index'

// Element Layout

import About from './elements/About'
import Contact from './elements/Contact'

import ContactForSubscription from '../src/elements/contact/ContactForSubscription'
import PersonalPortfolio from './elements/portfolio/PersonalPortfolio'
import Error404 from './elements/Error404'

import Service from './elements/Service'
import ServiceList from  './elements/service/ServiceList'
import ServiceDetails from  './elements/service/ServiceDetails'

// Blocks Layout



import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Blog from './elements/blog/Blog';
import BlogDetails from './elements/blog/BlogDetails';
import ScrollToTop from './component/common/ScrollToTop';

class Root extends Component{
    render(){
        return(
           

            <BrowserRouter basename={'/'}>
              <ScrollToTop>
                <Switch>
                    <Route exact path={`${process.env.PUBLIC_URL}/`} component={Index}/>
                    {/* <Route exact path={`${process.env.PUBLIC_URL}/blog`} component={Blog}/> */}
                    {/* <Route path={`${process.env.PUBLIC_URL}/blog/details/:blogSlug`} component={BlogDetails}/> */}
                    
                    <Route exact path={`${process.env.PUBLIC_URL}/contact`} component={Contact}/>
                    <Route path={`${process.env.PUBLIC_URL}/subscription/:type`} component={ContactForSubscription}/>
                    
                    <Route exact path={`${process.env.PUBLIC_URL}/about`} component={About}/>

                    <Route exact path={`${process.env.PUBLIC_URL}/services`} component={Service}/>

                    <Route exact path={`${process.env.PUBLIC_URL}/services/:slug`} component={ServiceList}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/services/web-development/e-commerce`} component={PersonalPortfolio}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/services/:category/:slug`} component={ServiceDetails}/>
                   
                    
                    
                    <Route path={`${process.env.PUBLIC_URL}/404`} component={Error404}/>
                    <Route component={Error404}/>
                </Switch>
            </ScrollToTop>
            </BrowserRouter>

        )
    }
}

ReactDOM.render(<Root/>, document.getElementById('root'));
serviceWorker.register();