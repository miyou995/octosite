import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
class Testimonial extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="row">
                    <div className="col-lg-12">
                        <Tabs>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>Celui qui n'a pas d'objectifs, ne risque pas de les atteindre.</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>SUNTSU </span> - Un général - stratège militaire, Chinois </h6>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>Face au monde qui change. Il vaut mieux penser le changement que changer le pansement</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>FRANCIS BLANCHE </span> - Acteur et Humoriste, Français</h6>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>Il suffit d'un seul choix pour façonner un destin.</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>WISTON CHURCHILL</span> Ancien premier ministre - Royaume-Uni.</h6>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>La laideur se vend mal.</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>RAYMOND LOEWY</span> - Connue comme le fondateur du design industriel, Français</h6>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>Nos clients les plus mécontents sont notre plus grande source de progrés.</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>BILL GATES </span> - Magnat des affaires Américain.</h6>
                                    </div>
                                </div>
                            </TabPanel>

                          
                            <TabList className="testimonial-thumb-wrapper">
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/suntsu.jpg" alt="Testimonial Images"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/francis.jpg" alt="Testimonial Images"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/churchill.jpg" alt="Testimonial Images"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/raymond.jpg" alt="Testimonial Images"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/bill.jpg" alt="Testimonial Images"/>
                                        </div>
                                    </div>
                                </Tab>
                            </TabList>
                        </Tabs>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Testimonial;