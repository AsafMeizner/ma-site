import React, { useEffect, useState } from 'react';
import '../styles/TextImages.css';

const TextImages = () => {
  const [stacked, setStacked] = useState(false);

  useEffect(() => {
    const textElement = document.querySelector('.text-images .row p');
    if (textElement) {
      const textHeight = textElement.clientHeight;
      const imageHeight = 250; 
      if (textHeight > imageHeight / 1.5) {
        setStacked(true);
      } else {
        setStacked(false);
      }
    }
  }, []);

  return (
    <div className={`text-images ${stacked ? 'stacked' : ''}`}>
      <div style={{padding: '20px'}}>
        <h2 style={{marginTop: '0px'}}>Section Title</h2>
        <div className="row">
          <img src="/image1.png" alt="Makers Assemble Logo" className="image" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin efficitur eu eros et volutpat. Aliquam id condimentum ipsum, vitae sagittis ligula. Morbi sit amet dui vel mi placerat cursus. Quisque tempor mi ut tortor pulvinar vehicula. Quisque consectetur ex in tellus scelerisque consectetur. Phasellus placerat pharetra tortor, eu condimentum diam tincidunt non. In lobortis mollis risus quis lobortis. Mauris elementum neque sed purus cursus egestas. Nulla vitae molestie est. Sed pellentesque nunc sed dictum tristique. Pellentesque sed neque justo. In suscipit sem vel lacus placerat aliquet sed at lectus. Nulla a ornare metus, sit amet bibendum mi. Aenean vitae nunc nec justo scelerisque imperdiet et eu ligula. Praesent eu urna a diam eleifend molestie.</p>
        </div>
        <div className="row">
          <img src="/image2.png" alt="2023 robot - Magnoom" className="image" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin efficitur eu eros et volutpat. Aliquam id condimentum ipsum, vitae sagittis ligula. Morbi sit amet dui vel mi placerat cursus. Quisque tempor mi ut tortor pulvinar vehicula. Quisque consectetur ex in tellus scelerisque consectetur. Phasellus placerat pharetra tortor, eu condimentum diam tincidunt non. In lobortis mollis risus quis lobortis. Mauris elementum neque sed purus cursus egestas. Nulla vitae molestie est. Sed pellentesque nunc sed dictum tristique. Pellentesque sed neque justo. In suscipit sem vel lacus placerat aliquet sed at lectus. Nulla a ornare metus, sit amet bibendum mi. Aenean vitae nunc nec justo scelerisque imperdiet et eu ligula. Praesent eu urna a diam eleifend molestie.</p>
        </div>
        <div className="row">
          <img src="/image3.png" alt="FRC" className="image" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin efficitur eu eros et volutpat. Aliquam id condimentum ipsum, vitae sagittis ligula. Morbi sit amet dui vel mi placerat cursus. Quisque tempor mi ut tortor pulvinar vehicula. Quisque consectetur ex in tellus scelerisque consectetur. Phasellus placerat pharetra tortor, eu condimentum diam tincidunt non. In lobortis mollis risus quis lobortis. Mauris elementum neque sed purus cursus egestas. Nulla vitae molestie est. Sed pellentesque nunc sed dictum tristique. Pellentesque sed neque justo. In suscipit sem vel lacus placerat aliquet sed at lectus. Nulla a ornare metus, sit amet bibendum mi. Aenean vitae nunc nec justo scelerisque imperdiet et eu ligula. Praesent eu urna a diam eleifend molestie.</p>
        </div>
      </div>
    </div>
  );
};

export default TextImages;
