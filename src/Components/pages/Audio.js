import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import SectionStart from '../SectionStart';
import ReactAudioPlayer from 'react-audio-player';

import audioImage from '../../assets/images/team/01.jpg'

const Audio = () => {
    return (
        <div>
            <Header/>
            <SectionStart title="Audio" address="Audio"/>
            <div className='container'>
                

            <div className="team-section padding-tb">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="row justify-content-center">
                                    <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                                        <div className="card mb-4 text-center border-none team-item-1 pattern-2">
                                            <div className="lab-inner">
                                                <div className="lab-thumb">
                                                    <img src={audioImage} className="card-img-top" alt="product" />
                                                </div>
                                                <div className="lab-content">
                                                    <a href="#">
                                                        <h6 className="card-title mb-0">Hamad Bin Jasim</h6>
                                                    </a>
                                                    <ReactAudioPlayer
                                                        src='https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
                                                        controls
                                                    />
                                                </div>
                                            </div>
                                        </div>
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

export default Audio;
