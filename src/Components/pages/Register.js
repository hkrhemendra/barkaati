import React from 'react';
import Header from '../Header';
import SectionStart from '../SectionStart';
import Footer from '../Footer';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <Header/>
            <SectionStart title="Barkaati Register" address="Register"/>

            <div className="login-section padding-tb">
                <div className="container">
                    <div className="account-wrapper">
                        <h3 className="title">Register Now</h3>
                        <form className="account-form">
                            <div className="form-group">
                                <input type="text" placeholder="User Name" name="username"/>
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Email" name="email"/>
                            </div>
                            <div className="form-group">
                                <input type="password" placeholder="Password" name="password"/>
                            </div>
                            <div className="form-group">
                                <input type="password" placeholder="Confirm Password" name="password"/>
                            </div>
                            <div className="form-group">
                                <button className="d-block lab-btn"><span>Get Started Now</span></button>
                            </div>
                        </form>
                        <div className="account-bottom">
                            <span className="d-block cate pt-10">Are you a member? <Link to="/login">Login</Link></span>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    );
}

export default Register;
