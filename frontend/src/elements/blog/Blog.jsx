import React, { Component } from "react";
// Elements
import PageHelmet from "../../component/common/Helmet";
import Breadcrumb from "../common/Breadcrumb";
import BlogList from "./BlogList"
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";


import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";
import { useParams } from "react-router-dom";


// List of posts


class Blog extends Component{

    render(){
        return(
            <React.Fragment>
                <PageHelmet pageTitle='Blog' />

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
                {/* Start Breadcrump Area */}
                <Breadcrumb title={'Octopus'}  mini = {'Blog'}/>
                {/* End Breadcrump Area */}


                {/* Start Blog Area */}
                <div className="rn-blog-area ptb--120 bg_color--1">
                    <div className="container">
                        <BlogList props ={this.props}/> 
                        
                    </div>
                </div>
                {/* End Blog Area */}
                
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
export default Blog;
