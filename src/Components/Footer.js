import React from 'react';
import footerImage1 from '../assets/images/footer/footer-top/01.png'
import footerImage2 from '../assets/images/footer/footer-top/02.png'
import footerImage3 from '../assets/images/footer/footer-top/03.png'
import middleImage1 from '../assets/images/footer/footer-middle/01.jpg'
import middleImage2 from '../assets/images/footer/footer-middle/02.jpg'
import middleImage3 from '../assets/images/footer/footer-middle/03.jpg'
import footerBackground from '../assets/images/bg-images/footer-bg.png'
const Footer = () => {
    var sectionStyle = {
        backgroundImage: `url(${footerBackground})`
    }
    return (
        <div>
        <footer className="footer-section" style={sectionStyle}>
            <div className="footer-top">
                <div className="container">
                    <div className="row g-3 justify-content-center g-lg-0">
                        <div className="col-lg-4 col-sm-6 col-12">
                            <div className="footer-top-item lab-item">
                                <div className="lab-inner">
                                    <div className="lab-thumb">
                                        <img src={footerImage1} alt="Phone-icon"/>
                                    </div>
                                    <div className="lab-content">
                                        <span>Phone Number : +88019 339 702 520</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-12">
                            <div className="footer-top-item lab-item">
                                <div className="lab-inner">
                                    <div className="lab-thumb">
                                        <img src={footerImage2} alt="email-icon"/>
                                    </div>
                                    <div className="lab-content">
                                        <span>Email : admin@Barkaati.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-12">
                            <div className="footer-top-item lab-item">
                                <div className="lab-inner">
                                    <div className="lab-thumb">
                                        <img src={footerImage3} alt="location-icon"/>
                                    </div>
                                    <div className="lab-content">
                                        <span>Address : 30 North West New York 240</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-middle padding-tb tri-shape-3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="footer-middle-item-wrapper">
                                <div className="footer-middle-item mb-5 mb-lg-0">
                                    <div className="fm-item-title">
                                        <h5>About Barkaati</h5>
                                    </div>
                                    <div className="fm-item-content">
                                        <p className="mb-4">Energistically coordinate highly efficient procesr
                                            partnerships befor revolutionar growth strategie
                                            improvement</p>
                                        <img src={middleImage1} alt="about-image"
                                            className="footer-abt-img"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="footer-middle-item-wrapper">
                                <div className="footer-middle-item mb-5 mb-lg-0">
                                    <div className="fm-item-title">
                                        <h5>our Recent news</h5>
                                    </div>
                                    <div className="fm-item-content">
                                        <div className="fm-item-widget lab-item">
                                            <div className="lab-inner">
                                                <div className="lab-thumb">
                                                    <a href="#"> <img src={middleImage2}
                                                            alt="footer-widget-img"/></a>
                                                </div>
                                                <div className="lab-content">
                                                    <h6><a href="#">Enable Seamin Matera Forin And Our
                                                            Orthonal Create Vortals.</a></h6>
                                                    <p>July 23, 2021</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="fm-item-widget lab-item">
                                            <div className="lab-inner">
                                                <div className="lab-thumb">
                                                    <a href="#"><img src={middleImage3}
                                                            alt="footer-widget-img"/></a>
                                                </div>
                                                <div className="lab-content">
                                                    <h6><a href="#">Dynamca Network Otuitive Catays For
                                                            Plagiarize Mindshare After</a></h6>
                                                    <p>July 23, 2021</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="footer-middle-item-wrapper">
                                <div className="footer-middle-item-3 mb-5 mb-lg-0">
                                    <div className="fm-item-title">
                                        <h5>OUR NEWSLETTER</h5>
                                    </div>
                                    <div className="fm-item-content">
                                        <p>Barkaati is a nonproﬁt organization supported
                                            by community leaders</p>
                                        <form>
                                            <div className="form-group">
                                                <input type="email" className="form-control" placeholder="Enter email"/>
                                            </div>
                                            <button type="submit" className="lab-btn">Send Massage <i
                                                    className="icofont-paper-plane"></i></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="footer-bottom-content text-center">
                                <p>&copy;2022 <a href="index.html">Barkaati</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </div>
    );
}

export default Footer;
