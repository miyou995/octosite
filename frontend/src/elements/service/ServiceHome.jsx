import React, { Component } from "react";
import { FiCast , FiLayers , FiUsers , FiMonitor } from "react-icons/fi";
import { Link } from "react-router-dom";

// Returns services in home that are a bit detailed


const ServiceList = [
    {
        icon: <FiCast />,
        title: 'Design D’interfaces',
        description: 'Pour que le visiteur de votre site reste le plus longtemps possible, l\'interface du site doit attirer son attention par son design, son contenu et son ergonomie.',
        link: 'web-design/design-dinterfaces'
        
    },
    {
        icon: <FiLayers />,
        title: 'E-commerce',
        description: 'Octopus Consulting fusionne pour vous le marketing et la technologie en créant des sites e-commerce sur-mesure et différents outils de gestion afin d’augmenter vos ventes en ligne et votre chiffre d’affaires.',
        link: 'web-development/e-commerce'
    },
    {
        icon: <FiUsers />,
        title: 'Campagnes Publicitaires',
        description: 'Les campagnes publicitaires en ligne permettant de toucher une grande audience et de générer des leads vers votre site et vos services, l’utilisation des réseaux sociaux permet de rester à l’affut des besoins de vos clients et de rester proche de votre communauté.',
        link: 'web-marketing/compagnes-publicitaires'
    },
    {
        icon: <FiMonitor />,
        title: 'Applications Web',
        description: 'Effectivement ! Une application web n’a pas besoin d’être téléchargée ou installée. Il suffit de se connecter à l’application qui est accessible en ligne pour une performance maximale et une visibilité en temps réel sur votre entreprise.',
        link: 'web-development/applications-web'
    }
]

class ServiceHome extends Component{

    constructor(props) {
        super(props)
        this.state = {
            services: {},
            isLoading: false,
            found: false,
        }
    }

    componentDidMount() {
        this.fetchServiceInfo()
    }

    fetchServiceInfo() {
        // const url = `${window.location.protocol}/backend.octopus-consulting.com/api/services/home`
        let url = `${process.env.REACT_APP_API_URL}/api/services/home`

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
        let title = 'Services',
        description = 'Dans tous nos projets nous combinons les 3 facteurs clés de succès d\'Octopus Consulting :';
        const { services, isLoading, found } = this.state
        if (isLoading) {
            return(
                <React.Fragment>
                    <div className="row active-dark">
                        <div className="col-lg-4 col-12">
                            <div className="section-title mt--30 mt_md--5 mt_mobile--5 mb_mobile--10">
                                <h2 className="title">{title}</h2>
                                <p>{description}</p>
                                <ul className="square">
                                    <li className="ml-5"><p><a href="services/web-development">Le Web</a></p></li>
                                    <li className="ml-5"><p><a href="services/web-design">Le Design</a></p></li>
                                    <li className="ml-5"><p><a href="services/web-marketing">Le Marketing</a></p></li>
                                </ul>
                                <div className="service-btn">
                                    <a className="btn-transparent rn-btn-dark" href="/contact"><span className="text">Demandez un service personnalisé</span></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-12 mt_md--50">
                            <div className="row service-one-wrapper">
                                {ServiceList.map( (val , i) => (
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12" key={i}>
                                              <div className="service service__style--2">
                                              <Link to={{pathname:`services/${val.link}`, state:val.title}}>
                                                <div className="icon">
                                                    {val.icon}
                                                </div>
                                                <div className="content">
                                                    <h3 className="title">{val.title}</h3>
                                                    <p>{val.description}</p>
                                                </div>
                                                </Link>
                                            </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            )
        }

        else

        {
            return(
            
                <React.Fragment>
                    <div className="row">
                        <div className="col-lg-4 col-12">
                            <div className="section-title mt--30 mt_md--5 mt_mobile--5 mb_mobile--10">
                                <h2 className="title">{title}</h2>
                                <p>{description}</p>
                                <ul className="square">
                                    <li className="ml-5"><p><a href="services/web-development">Le Web</a></p></li>
                                    <li className="ml-5"><p><a href="services/web-design">Le Design</a></p></li>
                                    <li className="ml-5"><p><a href="services/web-marketing">Le Marketing</a></p></li>
                                </ul>
                           
                                <div className="service-btn">
                                    <a className="btn-transparent rn-btn-dark" href="/contact"><span className="text">Demandez un service personnalisé</span></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-12 mt_md--50">
                            <div className="row service-one-wrapper">
                                {Array.from(services).map( (val , i) => (
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12" key={i}>
                                        <Link to={{pathname:`services/${val.category.slug}/${val.slug}`, state:val.title}}>
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
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            )
        }

    }
}
export default ServiceHome;
