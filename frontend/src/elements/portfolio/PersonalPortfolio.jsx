import React, { Component , Fragment } from "react";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../../component/header/Header";
import FooterTwo from "../../component/footer/FooterTwo"
import TabTwo from "../../elements/tab/TabTwo";
import ContactDemo from "../../elements/contact/ContactDemo";
import PageHelmet from "../../component/common/Helmet"

const SlideList = [
    {
        textPosition: 'text-left',
        category: 'Des solutions digitales faites pour vous',
        title: "E-Commerce",
        description: '',
        buttonText: '',
        buttonLink: ''
    }
]
class PersonalPortfolio extends Component{
    render(){
        let title = 'Ce que nous vous offrons',
        description = 'Obtenez un site e-commerce sur mesure : Choisissez les options que vous souhaitez et le design qui vous plaît.';
        return(
            <Fragment> 
                <PageHelmet pageTitle="Version d'essai" />
                
                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
                
                {/* Start Slider Area   */}
                <div className="slider-wrapper">
                    {/* Start Single Slide */}
                    {SlideList.map((value , index) => (
                        <div className="slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-items-center justify-content-center bg_image--templates " key={index} data-black-overlay="8">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className={`inner ${value.textPosition}`}>
                                            {value.category ? <span className="text-white">{value.category}</span> : ''}
                                            {value.title ? <h1 className="title text-white " dangerouslySetInnerHTML={{__html: value.title}}></h1> : ''}
                                            {value.description ? <p className="description text-white">{value.description}</p> : ''}
                                            {value.buttonText ? <div className="slide-btn"><a className="rn-button-style--2 btn-primary-color" href={`${value.buttonLink}`}>{value.buttonText}</a></div> : ''}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    
                    {/* End Single Slide */}
                </div>
                {/* End Slider Area   */}

                {/* Start About Area */}

            
                        
                <div className="portfolio-area  ptb--60 ">
                    <div className="portfolio-wrapper">
                        <div className="container">
                            <div className="row row--35 align-items-center">
                                <div className="col-lg-5">
                                    <div className="thumbnail">
                                        <img  className="w-100" src="/assets/images/portfolio/marchesa.png" alt="Octopus | version démonstration"/>
                                        
                                    </div>
                                    
                                </div>
                                <div className="col-lg-7">
                                    <div className="portfolio-inner inner pt--100">
                                        <div className="section-title">
                                            <h2 className="title">{title}</h2>
                                            <p className="description">{description}</p>
                                        </div>
                                        <div className="row mt--30">
                                            <TabTwo tabStyle="tab-style--1" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End About Area */}


                {/* Start Portfolio Area */}
                <div className="portfolio-area pb--60 bg_color--1">
                    <ContactDemo/>
                </div>
                {/* End Portfolio Area */}

                <FooterTwo />

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
            </Fragment>
        )
    }
}

export default PersonalPortfolio;