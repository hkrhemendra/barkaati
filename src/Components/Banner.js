import React from 'react'
import bannerImage from '../assets/images/banner/01.png'

export default function Banner() {
  return (
    <div>
       {/* Banner Section start here  */}
    <section className="banner-section">
        <div className="container">
            <div className="row align-items-center flex-column-reverse flex-md-row">
                <div className="col-md-6">
                    <div className="banner-item">
                        <div className="banner-inner">
                            <div className="banner-thumb">
                                <img src={bannerImage} alt="Banner-image" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="banner-item">
                        <div className="banner-inner">
                            <div className="banner-content align-middle">
                                <h1><span className="">And Allah Invites To <br className="d-none d-lg-block" />
                                        The </span>Home Of Peace</h1>
                                <p>The most beloved actions to Allah are those performed consistently, even if they are
                                    few</p>
                                <a href="#" className="lab-btn mt-3">Donate Now <i className="icofont-heart-alt"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
     {/* Banner Section end here */}

    </div>
  )
}
