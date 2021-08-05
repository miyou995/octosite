import React from 'react'

import { FiCheck } from "react-icons/fi";

import { Link } from 'react-router-dom'
const ComTable = () => {
    return (
        <>
            <div className="rn-team-area bg_color--5 ptb--60">
                <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title service-style--3 text-center mb--25">
                                    <h2 className="title">Offres E-commerce</h2>
                                    <p>Offrez-vous votre propre boutique en ligne qui gère le côté business pour vous.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row" id="offers">
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="rn-pricing">
                                    <div className="pricing-table-inner">
                                        <div className="pricing-header">
                                            <h4 className="title">Basic</h4>
                                            <div className="pricing">
                                                <span className="price">2000</span>
                                                <span className="subtitle">Da Par Mois</span>
                                            </div>
                                        </div>
                                        <div className="pricing-body">
                                            <ul className="list-style--1">
                                                <li><FiCheck /> E-Boutique </li>
                                                <li><FiCheck /> Panier</li>
                                                <li><FiCheck /> Acheter directement</li>
                                                <li><FiCheck /> Un Admin </li>
                                                <li><FiCheck /> 2000 commandes par mois</li>
                                                <li><FiCheck /> Traitement des commandes automatique</li>
                                                <li><FiCheck /> Facebook pixel </li>

                                            </ul>
                                        </div>
                                        <div className="pricing-footer">
                                        <a className="rn-btn" href='subscription/basic'>Commander</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End PRicing Table Area  */}

                            {/* Start PRicing Table Area  */}
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="rn-pricing">
                                    <div className="pricing-table-inner">
                                        <div className="pricing-header">
                                            <h4 className="title">Medium</h4>
                                            <div className="pricing">
                                                <span className="price">4000</span>
                                                <span className="subtitle">Da Par Mois</span>

                                            </div>
                                        </div>
                                        <div className="pricing-body">
                                            <ul className="list-style--1">
                                                <li><FiCheck /> E-Boutique</li>
                                                <li><FiCheck /> Panier</li>
                                                <li><FiCheck /> Acheter directement</li>
                                                <li><FiCheck /> Cinq Admin</li>
                                                <li><FiCheck /> 4000 commandes par mois</li>
                                                <li><FiCheck /> Traitement des commandes automatique</li>
                                                <li><FiCheck /> Generateur de factures</li>
                                                {/* <li><FiCheck /> Gestion des promotions</li> */}
                                                {/* <li><FiCheck /> Coupons</li> */}
                                                <li><FiCheck /> Facebook pixel </li>
                                            </ul>
                                        </div>
                                        <div className="pricing-footer">
                                            <a className="rn-btn" href='subscription/medium'>Commander</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="rn-pricing">
                                    <div className="pricing-table-inner">
                                        <div className="pricing-header">
                                            <h4 className="title">Business</h4>
                                            <div className="pricing">
                                                <span className="price">7000</span>
                                                <span className="subtitle">Da Par Mois</span>

                                            </div>
                                        </div>
                                        <div className="pricing-body">
                                            <ul className="list-style--1">
                                                <li><FiCheck /> E-Boutique</li>
                                                <li><FiCheck /> Panier</li>
                                                <li><FiCheck /> Acheter directement</li>
                                                
                                                <li><FiCheck /> Vingt Admin</li>
                                                <li><FiCheck /> Commandes par mois <strong>Illimité</strong></li>
                                                <li><FiCheck /> Traitement des commandes automatique</li>
                                                <li><FiCheck /> Generateur de factures</li>
                                                <li><FiCheck /> Gestion des promotions</li>
                                                <li><FiCheck /> Gestion avancée des produits</li>
                                                <li><FiCheck /> Gestion de stock</li>
                                                <li><FiCheck /> Compte client</li>
                                                <li><FiCheck /> Chat instantané</li>
                                                <li><FiCheck /> Offre Flash</li>
                                                <li><FiCheck /> Coupons</li>
                                                <li><FiCheck /> Facebook pixel </li>

                                            </ul>
                                        </div>
                                        <div className="pricing-footer">
                                        <a className="rn-btn" href='subscription/business'>Commander</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End PRicing Table Area  */}

                            {/* Start PRicing Table Area  */}
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="rn-pricing">
                                    <div className="pricing-table-inner">
                                        <div className="pricing-header">
                                            <h4 className="title">Advanced</h4>
                                            <div className="pricing">
                                                <span className="price">19 000</span>
                                                <span className="subtitle">Da Par Mois</span>
                                                

                                            </div>
                                        </div>
                                        <div className="pricing-body">
                                            <ul className="list-style--1">
                                            <li><FiCheck /> E-Boutique</li>
                                                <li><FiCheck /> Panier</li>
                                                <li><FiCheck /> Acheter directement</li>
                                                
                                                <li><FiCheck /> Admin <strong>Illimité</strong> </li>
                                                <li><FiCheck /> commandes par mois <strong>Illimité</strong></li>
                                                <li><FiCheck /> Traitement des commandes automatique</li>
                                                <li><FiCheck /> Generateur de factures</li>
                                                <li><FiCheck /> Gestion des promotions</li>
                                                <li><FiCheck /> Gestion avancée des produits</li>
                                                <li><FiCheck /> Gestion de stock</li>
                                                <li><FiCheck /> Compte client</li>
                                                <li><FiCheck /> Carte cadeau</li>
                                                <li><FiCheck /> Offre Flash</li>
                                                <li><FiCheck /> Chat instantané</li>
                                                <li><FiCheck /> Newsletter</li>
                                                <li><FiCheck /> Coupons</li>
                                                <li><FiCheck /> Facebook pixel </li>
                                            </ul>
                                        </div>
                                        <div className="pricing-footer">
                                        <a className="rn-btn" href='subscription/advanced'>Commander</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End PRicing Table Area  */}
                            
                        </div>
                        {/* <div className="row">
                                <div className="col-lg-12">
                                    <div className="view-more-btn mt--60 mt_sm--30 text-center">
                                        <Link to="/demo" className="rn-button-style--2 btn-solid"><span>Version d'essai</span></Link>
                                    </div>
                                </div>
                        </div> */}
                    </div>
                </div>
                {/* End Pricing Tbale Area  */}

        </>
        
    )
}
export default ComTable;