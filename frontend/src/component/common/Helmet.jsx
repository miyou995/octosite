import React, { Component } from "react";
import {Helmet} from 'react-helmet'

class PageHelmet extends Component{
    render(){
        return(
            <React.Fragment>
                <Helmet>
                    <title>{this.props.pageTitle} || Agence de croissance digital </title>
                    <meta name="description" content="Octopus Consulting– Accompagne les entreprises à développer une stratégie digital adéquate à leur activité" />
                </Helmet>
            </React.Fragment>
        )
    }
}


export default PageHelmet;
