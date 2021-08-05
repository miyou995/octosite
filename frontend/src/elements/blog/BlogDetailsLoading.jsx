import React, { Component } from "react"
import PageHelmet from "../../component/common/Helmet"
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import { FiClock } from "react-icons/fi";
import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";
import Skeleton from "@material-ui/lab/Skeleton";


class BlogDetailsLoading extends Component{
    
    render() {
        return (
            <React.Fragment>
                <PageHelmet pageTitle='Blog Details' />
                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
                
                {/* Start Breadcrump Area */}
                <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--1" data-black-overlay="7">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="blog-single-page-title text-center pt--100">
                                    <h2 className="title theme-gradient">Chargement...</h2>
                                    <ul className="blog-meta d-flex justify-content-center align-items-center">
                                        <li><FiClock /> Crée: JJ-MM-YYYY</li>
                                        <li><FiClock /> Mis à jour: JJ-MM-YYYY</li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Breadcrump Area */}

                {/* Start Blog Details */}
                <div className="rn-blog-details pt--110 pb--70 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner-wrapper">
                                    <div className="inner">
                                    <p>En cours de chargement</p>
                                    <div>
                                    <Skeleton />
                                    <Skeleton animation={false} />
                                    <Skeleton animation="wave" />
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Blog Details */}

              

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
                
                <Footer /> 

            </React.Fragment>
        )
    }
}
export default BlogDetailsLoading;