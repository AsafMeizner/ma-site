import React from 'react';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import '../styles/GalleryOne.css';

const images = [
  {
    original: "../gallery/image1.JPG",
    thumbnail: "../gallery/image1.JPG",
  },
  {
    original: "../gallery/image2.JPG",
    thumbnail: "../gallery/image2.JPG",
  },
  {
    original: "../gallery/image3.JPG",
    thumbnail: "../gallery/image3.JPG",
  },
  {
    original: "../gallery/image4.JPG",
    thumbnail: "../gallery/image4.JPG",
  },
  {
    original: "../gallery/image5.JPG",
    thumbnail: "../gallery/image5.JPG",
  },
  {
    original: "../gallery/image6.JPG",
    thumbnail: "../gallery/image6.JPG",
  },
  {
    original: "../gallery/image7.JPG",
    thumbnail: "../gallery/image7.JPG",
  },
  {
    original: "../gallery/image8.JPG",
    thumbnail: "../gallery/image8.JPG",
  },
  {
    original: "../gallery/image9.JPG",
    thumbnail: "../gallery/image9.JPG",
  },
  {
    original: "../gallery/image10.JPG",
    thumbnail: "../gallery/image10.JPG",
  },
  {
    original: "../gallery/image11.JPG",
    thumbnail: "../gallery/image11.JPG",
  },
  {
    original: "../gallery/image12.JPG",
    thumbnail: "../gallery/image12.JPG",
  },
  {
    original: "../gallery/image13.JPG",
    thumbnail: "../gallery/image13.JPG",
  },
  {
    original: "../gallery/image14.JPG",
    thumbnail: "../gallery/image14.JPG",
  },
  {
    original: "../gallery/image15.JPG",
    thumbnail: "../gallery/image15.JPG",
  },
  {
    original: "../gallery/image16.JPG",
    thumbnail: "../gallery/image16.JPG",
  },
  {
    original: "../gallery/image17.JPG",
    thumbnail: "../gallery/image17.JPG",
  },
  {
    original: "../gallery/image18.JPG",
    thumbnail: "../gallery/image18.JPG",
  },
  {
    original: "../gallery/image19.JPG",
    thumbnail: "../gallery/image19.JPG",
  },
  {
    original: "../gallery/image20.JPG",
    thumbnail: "../gallery/image20.JPG",
  }
];

class Gallery extends React.Component {
  render() {
    return (
        <div className="gallery-one">
            <div style={{backgroundColor: 'rgb(130, 21, 34)', height: '10px', width: '100%', marginBottom: '2%'}}></div>
            <h1>Gallery</h1>
            <div style={{marginLeft: '20%', marginRight: '20%', marginTop: '2%'}}>
                <ImageGallery items={images} autoPlay={true} slideInterval={3000} slideDuration={700}/>
            </div>
            <div align="center">
              <div style={{backgroundColor: 'white', height: '5px', width: '90%', marginTop: '2%'}}></div>
            </div>
        </div>
    );
  }
}

export default Gallery;