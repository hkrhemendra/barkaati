import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import SectionStart from '../SectionStart';
import ListGallery from '../ListGallery';

const Gallery = () => {
    return (
        <div>
            <Header/>
            <SectionStart title="Gallery" address="Gallery"/>
            <ListGallery/>
            <Footer/>
        </div>
    );
}

export default Gallery;

