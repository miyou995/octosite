import React, { Component } from "react";

class About extends Component{
    render(){
        let title = 'Qui Sommes Nous ?',
        description = 'Octopus Consulting est une agence de croissance digitale qui accompagne les entreprises à développer une stratégie digitale adaptée à leur activité.';
        return(
            <React.Fragment>
                <div className="about-wrapper">
                    <div className="container">
                        <div className="row row--35 align-items-center">

                            <div className="col-lg-5 col-md-12">
                                <div className="thumbnail">
                                    <img className="w-100" src="/assets/images/about/about-22.png" alt="About Image"/>
                                </div>
                            </div>

                            <div className="col-lg-7 col-md-12">
                                <div className="about-inner inner">
                                    <div className="section-title">
                                        <h3 className="title mt--30">{title}</h3>
                                        <p className="description">{description}</p>
                                    </div>
                                    <div className="row mt--30 mt_sm--10">
                                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                            <div className="about-us-list">
                                                <h3 className="title">Pourquoi ?</h3>
                                                <p>Plus vous digitalisez & automatisez votre Business.</p>
                                                <p>Plus vous effectuerez votre travail de façon rapide et simplifié tout en réduisant vos charges de gestion et de publicité.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                            <div className="about-us-list">
                                                <h3 className="title">Comment ?</h3>
                                                <p>En créant des outils faciles à utiliser qui permettent d'automatiser le travail de saisie manuel long et répétitif.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default About;