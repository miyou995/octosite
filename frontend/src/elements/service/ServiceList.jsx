import React, { Component } from "react";
import PageHelmet from "../../component/common/Helmet";
import PageBreadcrumb from "../../elements/common/PageBreadcrumb";
import * as Icons from "react-icons/fi";
import ScrollToTop from 'react-scroll-up';
import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";
import DemoBlock from "../../blocks/DemoBlock";
import { Link } from "react-router-dom"


const DynamicFiIcon = ({ name }) => {
    const IconComponent = Icons[name];
  
    if (!IconComponent) { // Return a default one
      return <Icons.FiGrid />;
    }
  
    return <IconComponent />;
};


class ServiceList extends Component{

    constructor(props) {
        super(props)
        this.state = {
            services: {},
            isLoading: false,
            slug: props.match.params.slug,
            found: false,
            service_name: props.location.state || 'Service'
        }
    }



    componentDidMount() {
        this.fetchServiceInfo()
    }

    fetchServiceInfo() {
        const url = `${window.location.protocol}//backend.octopus-consulting.com/api/services/${this.state.slug}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                //console.log(data)
                this.setState({services: data.results, isLoading: false, found: true})
            })
            .catch(err => {
                this.setState({services: {}, isLoading: false, found: false})
                console.log('Some error occured')
            })
    }

    render(){
        const { services, isLoading, found } = this.state
        
        return(
            <React.Fragment>
                <PageHelmet pageTitle='Service' />
                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

                {/* Start Breadcrump Area */}
                <PageBreadcrumb title={'Services'}  mini={`${this.state.service_name}`} />
                {/* End Breadcrump Area */}

                {/* Start Service Area */}
                <div className="service-area ptb--60 bg_color--5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center mb--30">
        
                                    {this.state.service_name === 'Web Development' && 
                                    <>
                                        <h2>Web Development</h2>
                                        <p>Nous proposons plusieurs services de développement web en utilisant les<br/> dernières technologies dans ce domaine.</p>
                                    </>}
                                    {this.state.service_name === 'Service' &&
                                    <>
                                        <h2>Nos services</h2>
                                        <p>Chez Octopus nous vous proposons trois variétés de services, <br/> notre agence met à votre disposition son expertise et vous guide dans <br />vos projets pour des outils performants sur mesure.</p>
                                    </>}
                                    {this.state.service_name === 'Web Design' &&
                                    <>
                                        <h2>Web Design</h2>
                                        <p>Tous nos designs sont basés sur l'expérience utilisateur (UX).<br/> Nous veuillons à refléter au mieux l’identité de votre entreprise et affirmer votre positionnement face à vos concurrents.</p>
                                    </> 
                                    }

                                    {this.state.service_name === 'Web Marketing' &&
                                    <>
                                        <h2>Web Marketing</h2>
                                    <p>Nous accompagnons les entreprises dans le choix de leurs stratégie marketing afin <br/> de créer une solide image de marque et d’assurer une bonne présence en ligne.</p>
                                    </> 
                                    }
                                </div>
                            </div>
                        </div>
                        {isLoading && <p className="text-center">Chargement...</p>}
                        {((!isLoading && !found) || services.length == 0) && <p className="text-center">Aucun service trouvé dans cette catégorie.</p>}
                        {(!isLoading && found) && 
                        <div className="row service-one-wrapper mt--30">
                        {Array.from(services).map( (val , i) => (
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                                {/* <a href="/service-details"> */}
                                <Link to={{pathname:`${this.state.slug}/${val.slug}`, state:val.title}}>
                                    <div className="service service__style--2">
                                        <div className="icon">
                                        <img src={val.icon} alt={val.title} className="icon-blue"/>
                                        <img src={val.icon_white} alt={val.title} className="icon-white"/>
                                        </div>
                                        <div className="content">
                                            <h3 className="title">{val.title}</h3>
                                            <p>{val.description}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                        </div>}
                        
                        
                    </div>
                </div>
                {/* End Service Area */}
                <div className="mb--120">
                <DemoBlock/>
                </div>
                

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <Icons.FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
                
                <Footer />


            </React.Fragment>
        )
    }
}
export default ServiceList;