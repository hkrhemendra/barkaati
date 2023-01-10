import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import SectionStart from '../SectionStart';
import contactImage1 from '../../assets/images/contact/01.png'
import contactImage2 from '../../assets/images/contact/02.png'
import contactImage3 from '../../assets/images/contact/03.png'
import contactImage4 from '../../assets/images/contact/04.png'

const Contact = () => {
    return (
        <div>
            <Header/>
            <SectionStart title="Contact us via email" address="Contact"/>

                <div className="contact-section">
                    <div className="contact-top padding-tb aside-bg padding-b">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8">
                                    <article className="contact-form-wrapper">
                                        <div className="contact-form">
                                            <h4>Don't Be A Stranger Just Say Hello.</h4>
                                            <p className="mb-5">We do fast phone repair. In most to repair your device in just minutes,
                                                li we’ll
                                                normally get con nection inutes, we’ll normally ge.</p>
                                            <form id="commentform" className="comment-form">
                                                <input type="text" name="name" className="" placeholder="Name*" />
                                                <input type="email" name="email" className="" placeholder="Email*" />
                                                <input type="text" name="name" className="" placeholder="Name*" />
                                                <input type="email" name="email" className="" placeholder="Email*"/>
                                                <textarea name="text" id="role" cols="30" rows="9"
                                                    placeholder="Message*"></textarea>
                                                <button type="submit" className="lab-btn">
                                                    <span>Send Our Message</span>
                                                </button>
                                            </form>
                                        </div>
                                    </article>
                                </div>
                                <div className="col-lg-4">
                                    <div className="contact-info-wrapper">
                                        <div className="contact-info-title">
                                            <h5>Get Information</h5>
                                            <p>Our Contact information Details and
                                                Follow us on social media</p>
                                        </div>
                                        <div className="contact-info-content">
                                            <div className="contact-info-item">
                                                <div className="contact-info-inner">
                                                    <div className="contact-info-thumb">
                                                        <img src={contactImage1} alt="address"/>
                                                    </div>
                                                    <div className="contact-info-details">
                                                        <span className="fw-bold">Office Address</span>
                                                        <p>1201 park street, Fifth Avenue</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="contact-info-item">
                                                <div className="contact-info-inner">
                                                    <div className="contact-info-thumb">
                                                        <img src={contactImage2} alt="address"/>
                                                    </div>
                                                    <div className="contact-info-details">
                                                        <span className="fw-bold">Phone Number</span>
                                                        <p>+22698 745 632,02 982 745</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="contact-info-item">
                                                <div className="contact-info-inner">
                                                    <div className="contact-info-thumb">
                                                        <img src={contactImage3} alt="address"/>
                                                    </div>
                                                    <div className="contact-info-details">
                                                        <span className="fw-bold">Send Mail</span>
                                                        <p>adminHafsa@gmil.com</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="contact-info-item">
                                                <div className="contact-info-inner">
                                                    <div className="contact-info-thumb">
                                                        <img src={contactImage4} alt="address"/>
                                                    </div>
                                                    <div className="contact-info-details">
                                                        <span className="fw-bold">Our Website</span>
                                                        <p>www.Hafsa-charity.com</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact-bottom">
                        <div className="contac-bottom">
                            <div className="row justify-content-center g-0">
                                <div className="col-12">
                                    <div className="location-map">
                                        <div id="map">
                                            <iframe
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.227736753981!2d90.38698831452395!3d23.739256984594892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b85c740f17d1%3A0xdd3daab8c90eb11f!2sCodexCoder!5e0!3m2!1sbn!2sbd!4v1610134370994!5m2!1sbn!2sbd"
                                                allowfullscreen=""></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer/>
        </div>
    );
}

export default Contact;
