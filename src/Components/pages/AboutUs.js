import React from 'react';
import About from '../About';
import Faith from '../Faith';
import Header from '../Header';
import SectionStart from '../SectionStart';
import Footer from '../Footer';

const AboutUs = () => {
    return (
        <div>
            <Header/>
            <SectionStart title = "About Us" address="About" />
            <About/>
            <div className="qoute-section padding-tb">
                <div className="qoute-section-wrapper">
                    <div className="qoute-overlay"></div>
                    <div className="container">
                        <div className="qoute-container">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="lab-item qoute-item">
                                        <div className="lab-inner d-flex align-items-center">
                                            <div className="lab-thumb">
                                                <span>Quote From
                                                    Prophat</span>
                                                <i className="icofont-quote-left"></i>
                                            </div>
                                            <div className="lab-content">
                                                <blockquote className="blockquote">
                                                    <p>Hazrat Mohammod (s) Said <span>"It is Better For Any Of You
                                                            To Carry A Load Of Firewood On His Own Back Than To
                                                            Beg From Someone Else"</span> </p>
                                                    <footer className="blockquote-footer bg-transparent">Riyadh-Us-Saleheen, Chapter
                                                        59, hadith 540
                                                    </footer>
                                                </blockquote>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Faith/>
            <Footer/>
        </div>
    );
}

export default AboutUs;
