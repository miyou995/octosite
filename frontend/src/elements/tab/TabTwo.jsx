import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class TabsTwo extends Component{
    render(){
        let 
        tab1 = "Avantages",
        tab2 = "Thème",
        tab3 = "Durée de développement",
        tab4 = "Installation";
        const { tabStyle } = this.props
        return(
            <div>
                {/* Start Tabs Area */}
                <div className="tabs-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <Tabs>
                                    <TabList  className={`${tabStyle}`}>
                                        <Tab>{tab1}</Tab>
                                        <Tab>{tab2}</Tab>
                                        <Tab>{tab3}</Tab>
                                        <Tab>{tab4}</Tab>
                                    </TabList>

                                    <TabPanel>
                                        <div className="single-tab-content">
                                            <p>un site e-commerce sur mesures, avec les outils de gestion adaptés pour chaque business, de multiples choix sont possibles, et un design entièrement personnalisable. Vous ainsi il vous est possible de : </p>
                                            <ul>
                                                <li>
                                                    <a className="underline">Automatiser votre boutique</a>
                                                    Traitement des commandes automatique, panier, coupons, tableau de bord...
                                                </li>
                                                <li>
                                                    <a className="underline">Améliorer votre processus de vente</a>
                                                    Et par conséquent votre chiffre d'affaire
                                                </li>
                                                <li>
                                                    <a className="underline">Eviter que vos clients soient dépendants du lieu</a>
                                                    Des distances surmontées
                                                </li>
                                                <li>
                                                    <a className="underline">Vous dinstinguer de vos concurrents</a>
                                                    Avec nos outils vous êtes sûrs de surpasser vos concurrents et avec le meilleur prix!
                                                </li>
                                            </ul>
                                        </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                       <p>Le design de votre site est entièrement customizable, la version d'essai vous permet de visualiser les fonctionnalités uniquement, de ce fait quelque soit votre type de E-boutique nous vous garantissons qu'il sera adapté au marché.</p>
                                           <ul>
                                               <li>Exemples :</li>
                                               <li>
                                                   <a href="https://lamarchesademo.pythonanywhere.com/" target="_blank"  rel="noopener noreferrer">LaMarchesa <span> - E-boutique pour vêtements</span></a> 
                                               </li>
                                               <li>
                                                   <a href="http://octodemonstration.pythonanywhere.com/" target="_blank"  rel="noopener noreferrer">Basique <span> - Pour essayer les fonctionnalités</span></a> 
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>



                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <p>Vous pouvez obtenir la version d'essai quelque minutes après avoir envoyé votre demande.</p>
                                       </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   Remplissez le formulaire si-dessous avec votre nom complet, votre email, téléphone, et un message si vous avez quelque chose à rajouter.
                                               </li>
                                               <li>
                                                   <a>Envoyez<span> votre demande</span></a>
                                               </li>
                                               <li>
                                                   Nous vous contacterons dès que possible avec le lien et les coordonnées de votre tableau de bord. 
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>
                                    
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Tabs Area */}
            </div>
        )
    }
}



export default TabsTwo;