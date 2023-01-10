import React from 'react';
import galleryImage1 from '../assets/images/gallery/mason/01.jpg'

const ListGallery = () => {
    return (
        <div>

    <div className="gallery-section padding-tb">
        <div className="container">
            <ul className="filter-button-group lab-ul d-flex justify-content-center mb-4">
                <li className="filter-btn is-checked" data-filter="*">All <span className="filter-item-num">01</span></li>
                {/* <li className="filter-btn" data-filter=".eid-ul-adha">eid-ul-adha <span className="filter-item-num">03</span>
                </li>
                <li className="filter-btn" data-filter=".eid-ul-fitr">eid-ul-fitr <span className="filter-item-num">05</span>
                </li>
                <li className="filter-btn" data-filter=".ramadan">ramadan <span className="filter-item-num">06</span></li>
                <li className="filter-btn" data-filter=".shab-e-barat">shab-e-barat <span className="filter-item-num">03</span>
                </li> */}
            </ul>
            <div className="grid pb-15">
                <div className="grid-item eid-ul-adha eid-ul-fitr">
                    <div className="grid-inner">
                        <div className="grid-thumb">
                            <img src={galleryImage1} alt="gallery-img" />
                        </div>
                        <div className="grid-content p-2">
                            <h5>The Image Title Goes Here</h5>
                            <p>Subtitle Here</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
    );
}

export default ListGallery;
