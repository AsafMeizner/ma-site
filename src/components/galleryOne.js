import React from 'react';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: "../gallery/image1.jpg",
    thumbnail: "../gallery/image1.jpg",
  },
  {
    original: "../gallery/image2.jpg",
    thumbnail: "../gallery/image2.jpg",
  },
  {
    original: "../gallery/image3.jpg",
    thumbnail: "../gallery/image3.jpg",
  },
  {
    original: "../gallery/image4.jpg",
    thumbnail: "../gallery/image4.jpg",
  },
  {
    original: "../gallery/image5.jpg",
    thumbnail: "../gallery/image5.jpg",
  },
  {
    original: "../gallery/image6.jpg",
    thumbnail: "../gallery/image6.jpg",
  },
  {
    original: "../gallery/image7.jpg",
    thumbnail: "../gallery/image7.jpg",
  },
  {
    original: "../gallery/image8.jpg",
    thumbnail: "../gallery/image8.jpg",
  },
  {
    original: "../gallery/image9.jpg",
    thumbnail: "../gallery/image9.jpg",
  },
  {
    original: "../gallery/image10.jpg",
    thumbnail: "../gallery/image10.jpg",
  },
  {
    original: "../gallery/image11.jpg",
    thumbnail: "../gallery/image11.jpg",
  },
  {
    original: "../gallery/image12.jpg",
    thumbnail: "../gallery/image12.jpg",
  },
  {
    original: "../gallery/image13.jpg",
    thumbnail: "../gallery/image13.jpg",
  },
  {
    original: "../gallery/image14.jpg",
    thumbnail: "../gallery/image14.jpg",
  },
  {
    original: "../gallery/image15.jpg",
    thumbnail: "../gallery/image15.jpg",
  },
  {
    original: "../gallery/image16.jpg",
    thumbnail: "../gallery/image16.jpg",
  },
  {
    original: "../gallery/image17.jpg",
    thumbnail: "../gallery/image17.jpg",
  },
  {
    original: "../gallery/image18.jpg",
    thumbnail: "../gallery/image18.jpg",
  },
  {
    original: "../gallery/image19.jpg",
    thumbnail: "../gallery/image19.jpg",
  },
  {
    original: "../gallery/image20.jpg",
    thumbnail: "../gallery/image20.jpg",
  }
];

class GalleryOne extends React.Component {
  render() {
    return (
        <div style={{marginBottom: '20px'}}>
            <div style={{backgroundColor: 'rgb(130, 21, 34)', height: '50px', width: '100%', marginBottom: '20px'}}></div>
            {/* <div> */}
            <div style={{marginLeft: '10%', marginRight: '10%'}}>
                <ImageGallery items={images} autoPlay={true} slideInterval={1800} slideDuration={600}/>
            </div>
        </div>
    );
  }
}

export default GalleryOne;