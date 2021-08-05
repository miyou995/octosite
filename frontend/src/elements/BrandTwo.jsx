import React, { Component } from "react";

class BrandTwo extends Component{
    render(){
        return(
            <React.Fragment>
                <ul className="brand-style-2" data-slick='{"slidesToShow": 4, "slidesToScroll": 4}'>
                    <li>
                        <img src="/assets/images/brand/neosun-black.png" alt="Logo Images"/>
                    </li>
                    <li>
                        <img src="/assets/images/brand/guardia-black.png" alt="Logo Images"/>
                    </li>
                    <li>
                        <img src="/assets/images/brand/lamarchesa.png" alt="Logo Images"/>
                    </li>
                    <li>
                        <img src="/assets/images/brand/grey-noel.png" alt="Logo Images"/>
                    </li>
                    <li>
                        <img src="/assets/images/brand/timi-black.png" alt="Logo Images"/>
                    </li>
        
                </ul>
            </React.Fragment>
        )
    }
}
export default BrandTwo;