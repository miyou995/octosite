import React, { Component } from "react";

import '../../public/assets/css/table/demo.css'

class DemoBlock extends Component {

    render(){
        return(
             <div className="demo-overlay mb--30">
                 <div>
                    <div className="demo-content">
                        <div className="section-heading center-holder white-color">
                            <h4 className="ng-binding">
                            Nous concevons des sites E-commerce, complexes et sur-mesure.
                            </h4>
                            <h2><strong className="ng-binding">
                                Vous avez une idée, un projet ?
                                </strong></h2>
                            <h6 className="ng-binding">
                                Vous pouvez la réaliser en cliquant sur le bouton ci-dessous
                            </h6>
                            <i className="fa fa-angle-double-down"></i>
                            <br/>
                            <a className="rn-button-style--2 btn-solid white-bg" href="/services/web-development/e-commerce">
                                Prendre rendez-vous
                            </a>
                            </div>
                    </div>
                 </div>
            </div>
        )
    }
}

export default DemoBlock;