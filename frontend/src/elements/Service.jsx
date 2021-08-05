import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import { FiCast , FiLayers , FiUsers , FiMonitor ,FiChevronUp } from "react-icons/fi";
import ScrollToTop from 'react-scroll-up';
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import DemoBlock from "../blocks/DemoBlock";
import Pagination from "../elements/common/Pagination";
import BlogListLoading from "./blog/Media"
import { Link } from "react-router-dom"


class Service extends Component{
    
    constructor(props) {
        super(props);
        
        this.state = {
          services: [],
          isLoading: false,
          pagination: {}
        };
    }

    getServices() {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        let page_num  = urlParams.get('page')
        if(!page_num) {
            page_num = 1
        }
        this.page = page_num
        const url = `${window.location.protocol}//backend.octopus-consulting.com/api/services/`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                this.setState({ services: data.results, isLoading: false, page:page_num, pagination: {count: data.count, next:data.next, previous: data.previous}});
                console.log(this.state.services)
            })
            .catch(err => console.log ('Some error occured'))
    }
    

    componentDidMount() {
        this.setState({ isLoading: true, services:[], pagination: {} })
        this.getServices()
    }

    componentDidUpdate(prevProps) {
        if(prevProps !== this.props) {
            this.getServices()
        }
   
    }

    changeState() {
        this.setState({pagination: this.state.pagination, page: this.state.page})
        console.log(this.state)
    }
    
    render(){

        const { services, isLoading, pagination, page } = this.state
        
        return(
            <React.Fragment>
                <PageHelmet pageTitle='Service' />
                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

                {/* Start Breadcrump Area */}
                <Breadcrumb title={'Services'}  mini={'Services'} />
                {/* End Breadcrump Area */}

                {/* Start Service Area */}
                <div className="service-area ptb--60 bg_color--5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center mb--30 mt--30">
                                    <h2>Nos services</h2>
                                    <p>Chez Octopus nous vous proposons trois variétés de services, <br/> notre agence met à votre disposition son expertise et vous guide dans <br />vos projets pour des outils performants sur mesure.</p>
                                </div>
                            </div>
                        </div>

                        {isLoading &&
                            <BlogListLoading/>
                        }
                        {!isLoading && 
                            <div className="row service-one-wrapper mt--30">
                            {services.map( (val , i) => (
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                                    {/* <a href="/service-details"> */}
                                    <Link to={{pathname:`services/${val.slug}`, state:`${val.name}`}}>
                                        <div className="service service__style--3">
                                        <div className="icon">
                                            <img src={val.icon} alt={val.name}/>
                                        </div>
                                            <div className="content">
                                                <h3 className="title">{val.name}</h3>
                                                <p>{val.description}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
    
                        }
                           
                    </div>
                </div>

                
                
                {/* End Service Area */}
                <div className="mb--120">
                <DemoBlock/>
                </div>
                

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
export default Service;