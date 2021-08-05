import React, { Component ,Fragment } from "react"
import {Link} from "react-router-dom"
import BlogListLoading from "./Media"

import Pagination from "../../elements/common/Pagination";

class BLogList extends Component{
    
    constructor(props) {
        super(props);
        
        this.state = {
          posts: [],
          isLoading: false,
          pagination: {}
        };
    }

    componentDidMount() {
        this.setState({ isLoading: true, posts:[], pagination: {} })
        this.fetchPosts()
    }
    
    componentDidUpdate(prevProps) {
        if(prevProps !== this.props) {
            this.fetchPosts()
        }
   
    }
    fetchPosts() {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        let page_num  = urlParams.get('page')
        if(!page_num) {
            page_num = 1
        }
        this.page = page_num
        const posts_url = `${window.location.protocol}//backend.octopus-consulting.com/api/blog/?page=${page_num}`
        fetch(posts_url)
            .then(res => res.json())
            .then(data => {
                this.setState({ posts: data.results, isLoading: false, page:page_num, pagination: {count: data.count, next:data.next, previous: data.previous}});
        
            })
            .catch(err => console.log ('Some error occured'))
    }

    changeState() {
        this.setState({pagination: this.state.pagination, page: this.state.page})
        //console.log(this.state)
    }
    render() {
       const {posts, isLoading, pagination, page} = this.state
       if (isLoading) {
        return(
            <BlogListLoading/>
        )
       }
       else {
        return (
            <Fragment>
                <div className="row">
                   {posts.map((value , i ) => (
                       <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={value.id}>
                           <div className="blog blog-style--1">
                               <div className="thumbnail">
                                   <a href="/blog-details">
                                       <img className="w-100" src={value.image_thumbnail} alt={value.title} />
                                   </a>
                               </div>
                               <div className="content">
                                   <p className="blogtype">{value.subCategory.name}</p>
                                   <h4 className="title"><Link to={`/blog/details/${value.slug}`}>{value.title}</Link></h4>
                                   <div className="blog-btn">
                                       <Link className="rn-btn text-white" to={`/blog/details/${value.slug}`}>Read More</Link>
                                   </div>
                               </div>
                           </div>
                       </div>
                    ))}
                </div>
                <div className="row mt--20">
                            <div className="col-lg-12">
                                {/* Start Pagination Area */}
                                <Pagination pagination={pagination} page= {page} Onclick={this.changeState}/>
                                {/* End Pagination Area */}
                            </div>
                </div>
            </Fragment>
       )
       }
        
    }
}
export default BLogList;