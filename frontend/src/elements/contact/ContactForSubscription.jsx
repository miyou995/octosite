import React, { Component } from 'react'
import { ask_subscription } from '../../../public/assets/js/contact'
import Notification from '../common/Notification'

import PageHelmet from "../../component/common/Helmet";

import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";

class ContactForSubscription extends Component{
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    }

    constructor(props){
        super(props);
        this.state = {
            type: this.props.match.params.type,
            fields: {},
            errors: {},
            res: {},
            show:  false,
            sent: 0
        }

    }
     
         handleValidation(){
             let fields = this.state.fields;
             let errors = {};
             let formIsValid = true;
 
             //Name
             if(!fields["name"]){
                formIsValid = false;
                errors["name"] = "Cannot be empty";
             }
       
             if(typeof fields["name"] !== "undefined"){
                if(!fields["name"].match(/^[a-zA-Z\s*]+$/)){
                   formIsValid = false;
                   errors["name"] = "Only letters";
                }        
             }
        
             //Email
             if(!fields["email"]){
                formIsValid = false;
                errors["email"] = "Cannot be empty";
             }
       
             if(typeof fields["email"] !== "undefined"){
                let lastAtPos = fields["email"].lastIndexOf('@');
                let lastDotPos = fields["email"].lastIndexOf('.');
 
                if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
                   formIsValid = false;
                   errors["email"] = "Email is not valid";
                 }
            }
            
            // Phone

            if (!fields["phone"]) {
                formIsValid = false;
                errors["phone"] = "Please enter your phone number.";
              }
          
              if (typeof fields["phone"] !== "undefined") {
                  
                let pattern = new RegExp(/^[0-9\b\s*]+$/);
                if (!pattern.test(fields["phone"])) {
                  formIsValid = false;
                  errors["phone"] = "Please enter only number.";
                }
                else if(fields["phone"].length < 10){
                  formIsValid = false;
                  errors["phone"] = "Please enter valid phone number.";
                }
              }

            this.setState({errors: errors});
            return formIsValid;
        }
         
        contactSubmit(e){
             e.preventDefault();
 
             this.setState({show: false})

             if(this.handleValidation()){
                 const data = this.state.fields
                 data.category = this.state.type
                 ask_subscription(this.state.fields)
                 .then(res => {
                  this.setState({res: res})
                  this.setState({sent: this.state.sent + 1})
                 })
                 .catch(err => console.log('une erreur est survenue'))
               //console.log(this.state.type)
             }
             else {
                alert("Vérifiez que vos données saisies sont correctes")
             }
       
         }
     
         handleChange(field, e){         
             let fields = this.state.fields;
             fields[field] = e.target.value;        
             this.setState({fields});
             //console.log('state', this.state)
         }


         componentDidUpdate(prevProps, prevState) {
            if(prevState.sent !== this.state.sent) {
               this.setState({show: true})
            }
       
        }

    render(){
        return(
            <React.Fragment>
            <PageHelmet pageTitle='Abonnement' />
            <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
          

             {/* Start Breadcrump Area */}
             <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image_contact"  data-black-overlay="6">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="rn-page-title text-center pt--100">
                                <h2 className="title theme-gradient">Confirmez votre demande d'abonnement</h2>
                                 <p>Obtenez votre espace de vente sans plus tarder!</p> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Breadcrump Area */}


            {/* Start Contact Page Area  */}
            <div className="rn-contact-page ptb--120 bg_color--1">
            <div className="contact-form--1">
                <div className="container">
                    <div className="row row--35 align-items-start">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="section-title text-left mb--50">
                               {this.state.show &&
                               <Notification msg={this.state.res.message} success={this.state.res.success} sent={this.state.sent} />
                               }
                                <h2 className="title">Abonnement</h2>
                                <p className="description">Vous pouvez finaliser votre demande en remplissant le formulaire ci dessous.</p>
                            </div>
                            <div className="form-wrapper">
                                <form>
                                    
                                    <label htmlFor="item01">
                                        <input
                                            type="text"
                                            name="fullName"
                                            id="item01"
                                            value={this.state.name}
                                            onChange={this.handleChange.bind(this, "name")}
                                            placeholder="Votre Nom *"
                                        />
                                    </label>

                                    <label htmlFor="item02">
                                        <input
                                            type="email"
                                            name="email"
                                            id="item02"
                                            value={this.state.email}
                                            onChange={this.handleChange.bind(this, "email")}
                                            placeholder="Votre Email *"
                                            required
                                        />
                                    </label>                                 
                                    
                                   <label htmlFor="item03">
                                        <input
                                            type="tel"
                                            name="phone"
                                            id="item03"
                                            value={this.state.phone}
                                            onChange={this.handleChange.bind(this, "phone")}
                                            placeholder="Votre Téléphone *"
                                            required
                                        />
                                    </label>

                                    <label htmlFor="item04">
                                        <textarea
                                            type="text"
                                            id="item05"
                                            name="message"
                                            value={this.state.message}
                                            onChange={this.handleChange.bind(this, "message")}
                                            placeholder="Votre Message *"
                                            required
                                        />
                                    </label>
                                    <button className="rn-button-style--2 btn-solid" type="submit" value="submit" name="submit" id="mc-embedded-subscribe" onClick={this.contactSubmit.bind(this)}>Envoyer</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2">
                            <div className="thumbnail mb_md--30 mb_sm--30">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3207.9574958638145!2d2.807798374930609!3d36.482742665883066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128f0dde61df1af3%3A0xb7fbfe86f236ee81!2sOctopus%20Consulting%20web%20%26%20design!5e0!3m2!1sen!2sdz!4v1613812465195!5m2!1sen!2sdz" width="600" height="550" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
                {/* End Contact Page Area  */}


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
export default ContactForSubscription