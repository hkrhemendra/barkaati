import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';
import SectionStart from '../SectionStart';

const Login = () => {
    return (
        <div>
            <Header/>
            <SectionStart title="Barkaati Login" address="Login"/>

            <div className="login-section padding-tb">
                <div className=" container">
                    <div className="account-wrapper">
                        <h3 className="title">Login</h3>
                        <form className="account-form">
                            <div className="form-group">
                                <input type="text" placeholder="User Name" name="username"/>
                            </div>
                            <div className="form-group">
                                <input type="password" placeholder="Password" name="password"/>
                            </div>
                            <div className="form-group">
                                <div className="d-flex justify-content-between flex-wrap pt-sm-2">
                                    <div className="checkgroup">
                                        <input type="checkbox" name="remember" id="remember"/>
                                        <label for="remember">Remember Me</label>
                                    </div>
                                    <a href="#">Forget Password?</a>
                                </div>
                            </div>
                            <div className="form-group">
                                <button className="d-block lab-btn"><span>Submit Now</span></button>
                            </div>
                        </form>
                        <div className="account-bottom">
                            <span className="d-block cate pt-10">Don’t Have any Account? <Link to="/register"> Sign
                                    Up</Link></span>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    );
}

export default Login;
