import React, { Component } from "react";
import PageHelmet from "../../component/common/Helmet";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";
import Breadcrumb from "../common/Breadcrumb";






class Ecommerce extends Component{
    constructor () {
        super()
        this.state = {
          isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }
    openModal () {
        this.setState({isOpen: true})
    }
    render(){
        return(
            <React.Fragment>
                 <PageHelmet pageTitle='Octopus Consulting' />
                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
                {/* Start Breadcrump Area */}
                <Breadcrumb title={'Octopus Consulting'} mini={'Web Development'} />
                {/* End Breadcrump Area */}

                {/* Start Portfolio Details */}
                <div className="rn-portfolio-details ptb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="portfolio-details">
                                    <div className="inner">
                                        <h2>E-commerce</h2>
                                       
                                        <p className="mt--30">Un site e-commerce est magasin en ligne ( souvent nommé e-boutique):</p>
                                        <p>Il permet aux clients de voir les articles que propose l’entreprise et d’y passer leurs commandes sans passer par ses pages facebook ou instagram, d’un autre coté, il permet à l’entreprise de recevoir les commandes déjà prêtes , avec un stock à jour grâce à l’option gestion de stock, et de proposer des réductions et des cartes cadeaux si elle le souhaite, il est également possible de récolter les données clients ( essentielles pour établir des stratégie marketing efficaces), grâce aux formulaires remplis, aux news lettre et au trafic sur le e-commerce.</p>
                                        <p>Pour chaque entreprise nous créons un site e-commerce sur-mesure avec les outils de gestion adaptés afin d’augmenter les ventes en ligne, le chiffre d’affaires et de fidéliser les clients.</p>
                                        <div className="service-btn">
                                            <a className="btn-transparent rn-btn-dark" href="../../contact"><span className="text">Un projet ? Contactez-Nous!</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>


              
                        </div>
                        
                    </div>
                </div>
                {/* End Portfolio Details */}

          

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
export default Ecommerce;
