import React, { Component } from "react"
import PageHelmet from "../../component/common/Helmet"
import ScrollToTop from 'react-scroll-up'
import { FiChevronUp } from "react-icons/fi"
import Header from "../../component/header/Header"
import Footer from "../../component/footer/Footer"
import PageBreadcrumb from "../common/PageBreadcrumb"
import renderHTML from "react-render-html"
import Error404 from "../Error404"
import {Link} from "react-router-dom"
class ServiceDetails extends Component{
    constructor (props) {
        super(props)
        this.state = {
            isOpen: false,
            isLoading: true,
            slug: props.match.params.slug,
            found: false,
            content: {},
            service_name: props.location.state || 'Service'
        }
        this.openModal = this.openModal.bind(this)
    }


    openModal () {
        this.setState({isOpen: true})
    }

    componentDidMount() {
        this.fetchServiceContent()
    }

    fetchServiceContent() {
        const url = `${window.location.protocol}//backend.octopus-consulting.com/api/services/content/${this.state.slug}`
        fetch(url)
            .then(res => res.json())
            .then(data => {

                let content = data.results
                content.sort((c1, c2) => {
                    return c1.order-c2.order;
                });

                //console.log(content)
                this.setState({content: content, isLoading: false, found: true})
            })
            .catch(err => {
                this.setState({conten: {}, isLoading: false, found: false})
                console.log('Some error occured')
            })
    }

  
    render(){

        const { content, isLoading, found, service_name } = this.state

            if(isLoading && !found) {
                return(<React.Fragment>
                    <PageHelmet pageTitle='Octopus Consulting' />
                   <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
                   {/* Start Breadcrump Area */}
                   <PageBreadcrumb title={'Octopus Consulting'} mini={service_name} />
                   {/* End Breadcrump Area */}
   
                   {/* Start Portfolio Details */}
                   <div className="rn-portfolio-details ptb--120 bg_color--1">
                       <div className="container">
                           <div className="row">
                               <div className="col-lg-12">
                                   <div className="portfolio-details">
                                       <div className="inner decorated">
                                           
                                           <h2>Chargement en cours ...</h2>
                                           <div className="service-btn mt--30">
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
            else {
                if(found) {
                    return (<React.Fragment>
                        <PageHelmet pageTitle='Octopus Consulting' />
                       <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
                       {/* Start Breadcrump Area */}
                       <PageBreadcrumb title={'Octopus Consulting'} mini={service_name} />
                       {/* End Breadcrump Area */}
       
                       {/* Start Portfolio Details */}
                       <div className="rn-portfolio-details ptb--120 bg_color--1">
                           <div className="container">
                               <div className="row">
                                   <div className="col-lg-12">
                                       <div className="portfolio-details">
                                           <div className="inner decorated">
                                               <h2>{service_name}</h2>
                                               {Array.from(content).map( (val , i) => (
                                                   <>
                                                   <h3>{val.header}</h3>
                                                   {renderHTML(val.text)}
                                                   </>
                                               ))}                                        
                                                                                
                                               <div className="service-btn mt--30">
                                                   <Link className="btn-transparent rn-btn-dark" to="../../contact"><span className="text">Un projet ? Contactez-Nous!</span></Link>
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

                else {
                    return (<Error404/>)
                }
            }
            
    }
}
export default ServiceDetails;
