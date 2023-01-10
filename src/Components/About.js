import React from 'react';
import aboutImage from '../assets/images/about/02.png'
import featureImage1 from '../assets/images/feature/01.png'
import featureImage2 from '../assets/images/feature/02.png'
import featureImage3 from '../assets/images/feature/03.png'
import featureImage4 from '../assets/images/feature/04.png'


const About = () => {
    return (
        <div>
            <section className="about-section padding-tb shape-1">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-12">
                            <div className="lab-item">
                                <div className="lab-inner">
                                    <div className="lab-content">
                                        <div className="header-title text-start m-0">
                                            <h5>About Our History</h5>
                                            <h2 className="mb-0">Islamic Center For Muslims To
                                                Achieve Spiritual Goals</h2>
                                        </div>
                                        <h5 className="my-4">Our Promise To Uphold The Trust Placed.</h5>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi molestias culpa
                                            reprehenderit delectus, ullam harum, voluptatum numquam ati nesciunt odit quis
                                            corrupti magni quam consequatur sint ipsum tecto exercitationem, illo quisquam.
                                            Reprehenderit ut placeat cum adantium nam magnam blanditiis sequi modi! Nesciunt,
                                            repudiandae eos eniam quod maxime corrupti eligendi ea in animi.</p>
                                        <a href="#" className="lab-btn mt-4">Ask About Islam <i className="icofont-heart-alt"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="lab-item">
                                <div className="lab-inner">
                                    <div className="lab-thumb">
                                        <div className="img-grp">
                                            <div className="about-circle-wrapper">
                                                <div className="about-circle-2"></div>
                                                <div className="about-circle"></div>
                                            </div>
                                            <div className="about-fg-img">
                                                <img src={aboutImage} alt="about-image"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="feature-section bg-ash padding-tb">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-3 col-sm-6 col-12">
                    <div className="lab-item feature-item text-xs-center">
                        <div className="lab-inner">
                            <div className="lab-thumb">
                                <img src={featureImage1} alt="feature-image" />
                            </div>
                            <div className="lab-content">
                                <h5>Quran Studies</h5>
                                <p>Lorem ipsum dolor sit, amet is consectetur adipisicing elit.Its expedita porro natus
                                </p>
                                <a href="#" className="text-btn">Sponsor Now!</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-12">
                    <div className="lab-item feature-item">
                        <div className="lab-inner">
                            <div className="lab-thumb">
                                <img src={featureImage2} alt="feature-image" />
                            </div>
                            <div className="lab-content">
                                <h5>Islamic Classes</h5>
                                <p>Lorem ipsum dolor sit, amet is consectetur adipisicing elit.Its expedita porro natus
                                </p>
                                <a href="#" className="text-btn">Donate Now!</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-12">
                    <div className="lab-item feature-item">
                        <div className="lab-inner">
                            <div className="lab-thumb">
                                <img src={featureImage3} alt="feature-image" />
                            </div>
                            <div className="lab-content">
                                <h5>Islamic Awareness</h5>
                                <p>Lorem ipsum dolor sit, amet is consectetur adipisicing elit.Its expedita porro natus
                                </p>
                                <a href="#" className="text-btn">Join Us!</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-12">
                    <div className="lab-item feature-item">
                        <div className="lab-inner">
                            <div className="lab-thumb">
                                <img src={featureImage4} alt="feature-image" />
                            </div>
                            <div className="lab-content">
                                <h5>Islamic Services</h5>
                                <p>Lorem ipsum dolor sit, amet is consectetur adipisicing elit.Its expedita porro natus
                                </p>
                                <a href="#" className="text-btn">Get Involved!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </div>
    );
}

export default About;
