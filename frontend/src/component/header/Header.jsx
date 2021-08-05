import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { FiX , FiMenu } from "react-icons/fi";


class Header extends Component{
    constructor(props) {
        super(props);
        this.menuTrigger = this.menuTrigger.bind(this);
        this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
        this.stickyHeader = this.stickyHeader.bind(this);
        window.addEventListener('load', function() {
            //console.log('All assets are loaded')
        })
    }

    menuTrigger() {
        document.querySelector('.header-wrapper').classList.toggle('menu-open')
    }

    CLoseMenuTrigger() {
        document.querySelector('.header-wrapper').classList.remove('menu-open');
    }
    stickyHeader () {}

    render(){
        window.addEventListener('scroll', function() {
            var value = window.scrollY;
            if (value > 50) {
                document.querySelector('.header--fixed').classList.add('sticky')
            }else{
                document.querySelector('.header--fixed').classList.remove('sticky')
            }
        });
        var elements = document.querySelectorAll('.has-droupdown > a');
        for(var i in elements) {
            if(elements.hasOwnProperty(i)) {
                elements[i].onclick = function() {
                    this.parentElement.querySelector('.submenu').classList.toggle("active");
                    this.classList.toggle("open");
                }
            }
        }
        const { logo, color='default-color' } = this.props;
        let logoUrl;
        if(logo === 'light'){
            logoUrl = <img src="/assets/images/logo/logo-light.png" alt="Octopus Consulting" />;
        }else if(logo === 'dark'){
            logoUrl = <img src="/assets/images/logo/logo-dark.png" alt="Octopus Consulting" />;
        }else if(logo === 'symbol-dark'){
            logoUrl = <img src="/assets/images/logo/logo-symbol-dark.png" alt="Octopus Consulting" />;
        }else if(logo === 'symbol-light'){
            logoUrl = <img src="/assets/images/logo/logo-symbol-light.png" alt="Octopus Consulting" />;
        }else{
            logoUrl = <img src="/assets/images/logo/logo.png" alt="Octopus Consulting" />;
        }
        return(
            <header className={`header-area formobile-menu header--fixed header--transparent ${color}`}>
                <div className="header-wrapper" id="header-wrapper">
                    <div className="header-left">
                        <div className="logo">
                            <a href="/">
                                <img className="logo-1" src="/assets/images/logo/logo.png" alt="Octopus Consulting Logo"/>
                                <img className="logo-2" src="/assets/images/logo/logo-dark.png" alt="Octopus Consulting Logo"/>
                            </a>
                        </div>
                    </div>
                    <div className="header-right">
                        <nav className="mainmenunav d-lg-block">
                            <ul className="mainmenu">
                                <li><Link to="/">Accueil</Link></li>
                                <li><Link to="/about" >Octopus</Link></li>
                                <li><Link to="/services">Services</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                                {/* <li className="has-droupdown"><Link to="/contact" >Contact</Link>
                                    <ul className="submenu">
                                        <li><Link to="/contact/demo">Version Démo</Link></li>
                                    </ul> 
                                </li>  */}
                                {/* <li><Link to="/blog">Blog</Link></li> */}
                              
                             
                            </ul>
                        </nav>
                        <div className="header-btn">
                            <a className="rn-btn" href="mailto:hello@octopus-consulting.com">
                            <span>Devis Gratuit</span>
                            </a>
                        </div>
                        {/* Start Humberger Menu  */}
                        <div className="humberger-menu d-block d-lg-none pl--20">
                            <span onClick={this.menuTrigger} className="menutrigger text-white"><FiMenu /></span>
                        </div>
                        {/* End Humberger Menu  */}
                        <div className="close-menu d-block d-lg-none">
                            <span onClick={this.CLoseMenuTrigger} className="closeTrigger"><FiX /></span>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
export default Header;