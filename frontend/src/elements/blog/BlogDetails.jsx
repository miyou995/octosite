import React, { Component } from 'react'
import PageHelmet from '../../component/common/Helmet'
import Header from '../../component/header/Header'
import Footer from '../../component/footer/Footer'
import BlogDetailsLoading from './BlogDetailsLoading'
import { FiCalendar, FiClock } from 'react-icons/fi'
import ScrollToTop from 'react-scroll-up'
import { FiChevronUp } from 'react-icons/fi'
import renderHTML from 'react-render-html'
import Error404 from '../Error404'

class BlogDetails extends Component{
    constructor (props) {
        super(props)

        this.state = {
          isOpen: false,
          post: {},
          isLoading: false, 
          found: false
        }
        this.openModal = this.openModal.bind(this)
        this.options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    }
    openModal () {
        this.setState({isOpen: true, isLoading: false, post:{}, found:false})
    }

    
    componentDidMount() {
        this.setState({ isOpen: true, isLoading: true, post:{}, })
        this.fetchPost()

        
    }
    


    fetchPost() {
        const post_with_image_url = `${window.location.protocol}//backend.octopus-consulting.com/api/blog/details/${this.props.match.params.blogSlug}`
        //const post_with_image_url = `${process.env.PUBLIC_URL}/api/blog/details/${this.props.match.params.blogSlug}`
        fetch(post_with_image_url)
            .then(res => res.json())
            .then(data => {
                if (data.detail) {
                    console.log('come here!!!')
                    this.fetchPostInfo()
                }
                else {
                    this.setState({ isOpen: true, post: data.post, isLoading: false, found: true})
                }
            })
            .catch(err =>  this.setState({ isOpen: true, post: {}, isLoading: false, found: false}))
    }

    fetchPostInfo() {
        const post_info_url = `${window.location.protocol}//backend.octopus-consulting.com/api/blog/info/${this.props.match.params.blogSlug}`
        fetch(post_info_url)
            .then(res => res.json())
            .then(data => {
                if (data.detail) {
                    this.setState({ isOpen: true, post: {}, isLoading: false, found: false}) }
                else {
                    this.setState({ isOpen: true, post: data, isLoading: false, found:true})
                }

            })
            .catch(err => {
               //console.log('not found')
               this.setState({ isOpen: true, post: {}, isLoading: false, found: false})
            })
    }
    
    render(){
        const {post, isLoading, found} = this.state

        if (isLoading) {
            return(<BlogDetailsLoading />)
        }

        else {
            if (found) {
                const date = new Date(post.updated)
                return(
                    <React.Fragment>
                        <PageHelmet pageTitle='Blog Details' />
                        <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
                        
                        {/* Start Breadcrump Area */}
                        <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--1" data-black-overlay="7">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="blog-single-page-title text-center pt--100">
                                            <h2 className="title theme-gradient">{post.title}</h2>
                                            <ul className="blog-meta d-flex justify-content-center align-items-center">
                                                <li><FiCalendar />Mis à jour : {date.toLocaleDateString('fr', this.options)}</li>
                                                <li><FiClock />Heure : {date.getHours()}:{date.getMinutes()}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Breadcrump Area */}
        
                        {/* Start Blog Details */}
                        <div className="rn-blog-details pt--110 pb--70 bg_color--1">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="inner-wrapper">
                                            <div className="inner">
                                                {renderHTML(post.content)}
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Blog Details */}
        
        
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
export default BlogDetails