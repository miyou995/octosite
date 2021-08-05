import React, { Component } from 'react'
import { ask_demo } from '../../../public/assets/js/contact'
import Notification from '../common/Notification'

class ContactDemo extends Component{
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
            type: 'basic',
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
                 ask_demo(this.state.fields)
                 .then(res => {
                  this.setState({res: res})
                  this.setState({sent: this.state.sent + 1})
                  //console.log(this.state)
                 })
                 .catch(err => console.log('une erreur est survenue'))

             }
             else {
                alert("Vérifiez que vos données saisies sont correctes")
             }
       
         }
     
         handleChange(field, e){         
             let fields = this.state.fields;
             fields[field] = e.target.value;        
             this.setState({fields});
         }


         componentDidUpdate(prevProps, prevState) {
            if(prevState.sent !== this.state.sent) {
               this.setState({show: true})
            }
       
        }

    render(){
        return(
            <React.Fragment>
            {/* Start Contact Page Area  */}
            <div className="rn-contact-page ptb--60 bg_color--1">
            <div className="contact-form--1">
                <div className="container">
                    <div className="row row--35 align-items-start">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="section-title text-left mb--50">
                               {this.state.show &&
                               <Notification msg={this.state.res.message} success={this.state.res.success} sent={this.state.sent} />
                               }
                                <h2 className="title">Version d'Essai</h2>
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
                       
                    </div>
                </div>
            </div>
            </div>
                {/* End Contact Page Area  */}



                
            </React.Fragment>
        )
    }
}
export default ContactDemo