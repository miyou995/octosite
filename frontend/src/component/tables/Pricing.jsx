import React, {useEffect, useState} from "react";
import $ from 'jquery'
import '../../../public/assets/css/table/table.css';
import '../../../public/assets/css/table/table-responsive.css';

const trialStyle = {'font-weight': 500, 'border': '1px solid rgb(0, 82, 204)', 'text-decoration': 'none', 'max-width': '145px', 'display': 'inline', 'width': 'fit-content', 'align-self': 'center'}




export default function Pricing() {
    const [billing, setBilling] = useState('monthly');
    const [prices, setPrices] = useState({
        // basic: 2000,
        medium: 4000,
        business: 7000,
        advanced: 19000,
        text: 'Mois'
    })

    const cost = {
        monthly: {
            // basic: 2000,
            medium: 4000,
            business: 7000,
            advanced: 19000,
            text: 'Mois',
        },
        annual: {
            // basic: 24000,
            medium: 48000,
            business: 84000,
            advanced: 228000,
            text: 'Année',
        },
    }
    const changeBilling = () => {
        if(billing=='monthly') {
            setPrices(cost.annual)
            setBilling('annual')
        }

        else {
            setPrices(cost.monthly)
            setBilling('monthly')
        }   

        console.log(cost)
    }

    useEffect(() => {

        $( ".reseller_hosting_plan_list" ).on( "click", "li", function() {
            var pos = $(this).index()+2;
            $("tr").find('td:not(:eq(0))').hide();
            $('td:nth-child('+pos+')').css('display','table-cell')
            $("tr").find('th:not(:eq(0))').hide();
            $('li').removeClass('active');
            $(this).addClass('active');
        });
    
        // Initialize the media query
        var mediaQuery = window.matchMedia('(max-width: 640px)');
        // Add a listen event
        mediaQuery.addListener(doSomething);
    
        // Function to do something with the media query
        function doSomething(mediaQuery) {
            if (mediaQuery.matches) {
                $('.sep').attr('colspan',5);
                $('.buy').attr('colspan',2);
      
            } else {
                $('.sep').attr('colspan',2);
                $('.buy').attr('colspan',1);
    
            }
        }
        // On load
        doSomething(mediaQuery);
    
      },[billing]);

    return (
        <>
                <div className="section-title service-style--3 text-center mb--25 pt--60 ">
                    <h2 className="title">Offres E-commerce</h2>
                    <p>Offrez-vous votre propre boutique en ligne qui gère le côté business pour vous.</p>
                    <ul className="tg-list">
                    <li className="tg-list-item mr-lg-3"><p>Mois</p></li>
                    <li className="tg-list-item">
                        <input className="tgl tgl-ios" id="cb2" type="checkbox" onClick={changeBilling}/>
                        <label className="tgl-btn" for="cb2"></label>
                    </li>
                    <li className="tg-list-item"><p>Année</p></li>
                    </ul>
                    </div>
                
            
            <div className="rn-pricing-table-area pt--60 bg_color--5">
            <div className="container">
            <div className="reseller_hosting_plan">
                <ul className="reseller_hosting_plan_list">

                    <li className="">
                        <button>Medium</button>
                    </li>
                    <li>
                        <button>Business</button>
                    </li>
                    <li className="">
                        <button>Advanced</button>
                    </li>
                </ul>

                <table className="reseller_hosting_plan_table">
                    <thead>
                        <tr>
                            <th className="hide"></th>
                            <th className="default">Basic</th>
                            <th className="">Medium</th>
                            <th>Business</th>
                            <th className="">Standard</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td className="chars" colspan="1">Fonctionnalitées</td>
                        </tr>
                        <tr>
                            <td className="bAcheter_none">Fonctionnalitées</td>
                            <td className="bg_3e7ccc center offers-header">
                                <div className="reseller_plan_price ">{prices.medium}</div>
                                <div className="small_content">Da Par {prices.text}</div>
                                <div className="small_content">Pour des entreprises de taille moyenne</div>
                                <button type="button" className="btn__trial" style={trialStyle}><span className="css-j8fq0c"><span className="css-t5emrf"><a href='/services/web-development/e-commerce'>En savoir plus</a></span></span></button>                
                            </td>
                            <td className=" bg_3e7ccc center offers-header">
                                <div className="reseller_plan_price">{prices.business}</div>
                                <div className="small_content">Da Par {prices.text}</div>
                                <div className="small_content">Pour une entreprise établie</div>
                                <button type="button" className="btn__trial" style={trialStyle}><span className="css-j8fq0c"><span className="css-t5emrf"><a  href='/services/web-development/e-commerce'>En savoir plus</a></span></span></button>                
                            </td>
                            <td className="bg_3e7ccc center offers-header">
                                <div className="reseller_plan_price">{prices.advanced}</div>
                                <div className="small_content">Da Par {prices.text}</div>
                                <div className="small_content">Pour une grande entreprise</div>
                                <button type="button" className="btn__trial" style={trialStyle}><span className="css-j8fq0c"><span className="css-t5emrf"><a  href='/services/web-development/e-commerce'>En savoir plus</a></span></span></button>
                            </td>
                        </tr>
                        <tr>
                            <td>E-Boutique</td>
                            <td className="default">✓</td>
                            <td>✓</td>
                            <td>✓</td>
                        </tr>
                        <tr>
                            <td>Panier</td>
                            <td className="default">✓</td>
                            <td>✓</td>
                            <td>✓</td>
                        </tr>
                        <tr>
                            <td>Achet direct ( sans panier )</td>
                            <td className="default">✓</td>
                            <td>✓</td>
                            <td>✓</td>
                        </tr>
                        <tr>
                            <td>Admin</td>
                            <td className="default">5</td>
                            <td>20</td>
                            <td>Illimité</td>
                        </tr>
                        <tr>
                            <td>Commandes</td>
                            <td>4000 / Mois</td>
                            <td className="default">Illimité</td>
                            <td>Illimité</td>
                        </tr>
                        <tr>
                            <td>Traitement automatique des commandes</td>
                            <td className="default">✓</td>
                            <td>✓</td>
                            <td>✓</td>
                        </tr>
                        <tr>
                            <td>Facebook pixel</td>
                            <td>✓</td>
                            <td>✓</td>
                            <td>✓</td>
                        </tr>
                        <tr>
                            <td>Generateur de factures</td>
                            <td>✓</td>
                            <td>✓</td>
                            <td>✓</td>
                        </tr>
                        <tr>
                            <td>Gestion des promotions</td>
                            <td>✗</td>
                            <td>✓</td>
                            <td>✓</td>
                        </tr>
                        <tr>
                            <td>Gestion avancée des produits</td>
                            <td>✗</td>
                            <td>✓</td>
                            <td>✓</td>
                        </tr>
                        <tr>
                            <td>Gestion de stock</td>
                            <td>✗</td>
                            <td>✓</td>
                            <td>✓</td>
                        </tr>
                        <tr>
                            <td>Gestion de Livraison</td>
                            <td>✗</td>
                            <td>✓</td>
                            <td>✓</td>
                        </tr>
                        <tr>
                            <td>Compte client</td>
                            <td>✗</td>
                            <td>✓</td>
                            <td>✓</td>
                        </tr>
                        <tr>
                            <td>Chat instantané</td>
                            <td>✗</td>
                            <td>✓</td>
                            <td>✓</td>
                        </tr>

                        <tr>
                            <td>Offre Flash</td>
                            <td>✗</td>
                            <td>✓</td>
                            <td>✓</td>
                        </tr>
                        <tr>
                            <td>Coupons</td>
                            <td>✗</td>
                            <td>✓</td>
                            <td>✓</td>
                        </tr>
                        <tr>
                            <td>Carte cadeau</td>
                            <td>✗</td>
                            <td>✗</td>
                            <td>✓</td>
                        </tr>
                        <tr>
                            <td>Newsletter</td>
                            <td>✗</td>
                            <td>✗</td>
                            <td>✓</td>
                        </tr>
                        <tr>
                            <td>Recommandation de produit automatique</td>
                            <td>✗</td>
                            <td>✗</td>
                            <td>✓</td>
                        </tr>
                        <tr>

                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
            </div>
        </>
    );
}