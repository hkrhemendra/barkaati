import React from 'react';

const SectionStart = (props) => {
    return (
        <div>
            <section className="page-header bg_img padding-tb">
                <div className="overlay"></div>
                <div className="container">
                    <div className="page-header-content-area">
                        <h4 className="ph-title">{props.title}</h4>
                        <ul className="lab-ul">
                            <li><a href="index.html">Home</a></li>
                            <li><a className="active">{props.address}</a></li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default SectionStart;
