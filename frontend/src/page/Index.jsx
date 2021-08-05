import React, { Component } from "react";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";

import SliderOne from "../component/slider/SliderOne";
import ServiceHome from "../elements/service/ServiceHome";
import Testimonial from "../elements/Testimonial";
import About from "../component/HomeLayout/homeOne/About";
import BrandTwo from "../elements/BrandTwo";
import Helmet from "../component/common/Helmet";

import Pricing from "../component/tables/Pricing"
import DemoBlock from "../blocks/DemoBlock"

class Index extends Component{
    render(){
        return(
            <div className="ctive-dark"> 
                <Helmet pageTitle="Octopus Consulting" />
                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
                {/* Start Slider Area   */}
                <div className="slider-wrapper">
                    <SliderOne />
                </div>
                {/* End Slider Area   */}

                {/* Start About Area */}
                <div className="about-area about-position-top pb--60 bg_color--1">
                    <About />
                </div>
                {/* End About Area */}

                {/* Start Service Area  */}
                <div className="service-area pb--60  bg_image bg_image--3">
                   <div className="container">
                        <ServiceHome />
                   </div>
                </div>
                {/* End Service Area  */}


                {/* Start Testimonial Area */}
                <div className="rn-testimonial-area bg_color--5 pt--30 pb-60">
                    <div className="container">
                        <Pricing />
                    </div>
                </div>

                <DemoBlock/>

                {/* End Testimonial Area */}

                {/* Start E-commerce offer */}

                <div className="rn-testimonial-area bg_color--5 ptb--60">
                    <div className="container">
                        <Testimonial />
                    </div>
                </div>

                {/* End E-commerce offer */}




                {/* Start Brand Area */}
                <div className="rn-brand-area brand-separation pb--120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <BrandTwo />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Brand Area */}
                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
                
                <Footer />
                
            </div>
        )
    }
}
export default Index;