import React, { Component } from 'react';
import Header from "../component/header/Header";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Footer from "../component/footer/FooterTwo";


 class Error404 extends Component {
    
    render() {
        return (
            <>
                <Header headerPosition="header--transparent" color="color-white" logo="logo-light" />
                {/* Start Page Error  */}
                <div className="error-page-inner bg_color--4">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner">
                                    <h2 className="title theme-gradient">OOPS...</h2>
                                    {/* <h3 className="sub-title">Page not found</h3> */}
                                    <span>Cette page est introuvable.</span>
                                    <div className="error-button">
                                        <a className="rn-button-style--2 btn-solid" href="/">Retournez à l'Accueil</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Page Error  */}

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
                
                <Footer /> 
            </>
        )
    }
}
export default Error404;
