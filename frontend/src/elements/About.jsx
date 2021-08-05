import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import Testimonial from "../elements/Testimonial";
import ComTable from "../blocks/ecomTable";
import BrandTwo from "../elements/BrandTwo";
import ScrollToTop from 'react-scroll-up';
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import {FiChevronUp} from "react-icons/fi";
import { Link } from "react-router-dom"



class About extends Component{
    render(){
        let title = 'Octopus Consulting',
            description = 'Octopus est une agence de croissance digitale spécialisée dans le développement web, le web design, et le web marketing.';
        return(
            <React.Fragment>
                <PageHelmet pageTitle='Octopus Consulting' />
                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
                {/* Start Breadcrump Area */}
                <Breadcrumb title={'Octopus Consulting'} mini={'octopus'} />
                {/* End Breadcrump Area */}

                {/* Start About Area  */}
                <div className=" rn-about-area ptb--120 bg_color--1">
                    <div className="rn-about-wrapper">
                        <div className="container">
                            <div className="row row--35 align-items-center">
                                <div className="col-lg-5">
                                    <div className="thumbnail">
                                        <img className="w-100" src="/assets/images/about/team.jpg" alt="About Images"/>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="about-inner inner">
                                        <div className="section-title">
                                            <h2 className="title">Qui est Octopus ?</h2>
                                            <p className="description">{description}</p>
                                            <p className="description">Dans un monde en pleine digitalisation nous travaillons avec les dernières techniques sur le marché pour assurer à nos partenaires leur développement digital et leur présence en ligne.</p>
                                             <p className="description">Une équipe compétente et à l’écoute vous concevra les solutions les plus adaptées à vos activités et vous accompagnera sur votre marketing. </p>
                                        </div>
                                        {/* <div className="row mt--30">
                                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                                <div className="about-us-list">
                                                    <h3 className="title">Who we are</h3>
                                                    <p>There are many vtions of passages of Lorem Ipsum available, but the majority have suffered.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                                <div className="about-us-list">
                                                    <h3 className="title">Who we are</h3>
                                                    <p>There are many vtions of passages of Lorem Ipsum available, but the majority have suffered.</p>
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End About Area  */}

                 {/* Start CounterUp Area */}
                 {/* <div className="rn-counterup-area pb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center">
                                    <h3 className="fontWeight500">Our Fun Facts</h3>
                                </div>
                            </div>
                        </div>
                        <CounterOne />
                    </div>
                </div> */}
                {/* End CounterUp Area */}

                {/* Start Finding Us Area  */}
                <div className="rn-finding-us-area rn-finding-us bg_color--1">
                    <div className="inner">
                        <div className="content-wrapper">
                            <div className="content">
                                <h4 className="theme-gradient">Occupez-vous de l’essentiel… et nous du reste</h4>
                                <p>Gagnez en temps et économisez des frais de gestion en automatisant le travail de saisie avec des solutions informatiques crées sur mesure pour vos activités.</p>
                                <a href="/#offers" className="rn-btn btn-white">Commencer</a>
                            </div>
                        </div>
                        <div className="thumbnail">
                            <div className="image">
                                <img src="/assets/images/about/slider.jpg" alt="Finding Images"/>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Finding Us Area  */}

                {/* Start Team Area  */}
                {/* Start Team Area  */}
                {/* <div className="rn-team-area bg_color--1 ptb--120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title service-style--3 text-center mb--25">
                                    <h2 className="title">Skilled Team</h2>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="team">
                                    <div className="thumbnail">
                                        <img className="w-100" src="/assets/images/team/team-01.jpg" alt="Blog Images"/>
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Jone Due</h4>
                                        <p className="designation">Sr. Web Developer</p>
                                    </div>
                                    <ul className="social-icon" >
                                        <li><a href="https://www.facebook.com/"><FaFacebookF /></a></li>
                                        <li><a href="http://linkedin.com/"><FaLinkedinIn /></a></li>
                                        <li><a href="https://twitter.com/"><FaTwitter /></a></li>
                                    </ul>
                                </div>
                            </div>

                           

                        </div>
                    </div>
                </div> */}
                {/* End Team Area  */}
                {/* <div className="rn-team-area bg_color--1 ptb--120"> */}

                      
                {/* End Team Area  */}

                {/* Start Testimonial Area */}
                <div className="rn-testimonial-area bg_color--5 ptb--120">
                    <div className="container">
                        <Testimonial />
                    </div>
                </div>
                {/* End Testimonial Area */}

                {/* Start Brand Area */}
                <div className="rn-brand-area brand-separation bg_color--5 ptb--120">
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

            </React.Fragment>
        )
    }
}
export default About