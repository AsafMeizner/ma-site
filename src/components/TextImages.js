import React from 'react';
import '../styles/TextImages.css'; // Import CSS file for styling

const TextImages = () => {
  return (
    <div className="text-images">
      <h2>Section Title</h2>
      <div className="row">
        <img src="/image1.png" alt="Image 1" className="image" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin efficitur eu eros et volutpat. Aliquam id condimentum ipsum, vitae sagittis ligula. Morbi sit amet dui vel mi placerat cursus. Quisque tempor mi ut tortor pulvinar vehicula. Quisque consectetur ex in tellus scelerisque consectetur. Phasellus placerat pharetra tortor, eu condimentum diam tincidunt non. In lobortis mollis risus quis lobortis. Mauris elementum neque sed purus cursus egestas. Nulla vitae molestie est. Sed pellentesque nunc sed dictum tristique. Pellentesque sed neque justo. In suscipit sem vel lacus placerat aliquet sed at lectus. Nulla a ornare metus, sit amet bibendum mi. Aenean vitae nunc nec justo scelerisque imperdiet et eu ligula. Praesent eu urna a diam eleifend molestie.</p>
      </div>
      <div className="row">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin efficitur eu eros et volutpat. Aliquam id condimentum ipsum, vitae sagittis ligula. Morbi sit amet dui vel mi placerat cursus. Quisque tempor mi ut tortor pulvinar vehicula. Quisque consectetur ex in tellus scelerisque consectetur. Phasellus placerat pharetra tortor, eu condimentum diam tincidunt non. In lobortis mollis risus quis lobortis. Mauris elementum neque sed purus cursus egestas. Nulla vitae molestie est. Sed pellentesque nunc sed dictum tristique. Pellentesque sed neque justo. In suscipit sem vel lacus placerat aliquet sed at lectus. Nulla a ornare metus, sit amet bibendum mi. Aenean vitae nunc nec justo scelerisque imperdiet et eu ligula. Praesent eu urna a diam eleifend molestie.</p>
        <img src="/image2.png" alt="Image 2" className="image" />
      </div>
      <div className="row">
        <img src="/image3.png" alt="Image 3" className="image" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin efficitur eu eros et volutpat. Aliquam id condimentum ipsum, vitae sagittis ligula. Morbi sit amet dui vel mi placerat cursus. Quisque tempor mi ut tortor pulvinar vehicula. Quisque consectetur ex in tellus scelerisque consectetur. Phasellus placerat pharetra tortor, eu condimentum diam tincidunt non. In lobortis mollis risus quis lobortis. Mauris elementum neque sed purus cursus egestas. Nulla vitae molestie est. Sed pellentesque nunc sed dictum tristique. Pellentesque sed neque justo. In suscipit sem vel lacus placerat aliquet sed at lectus. Nulla a ornare metus, sit amet bibendum mi. Aenean vitae nunc nec justo scelerisque imperdiet et eu ligula. Praesent eu urna a diam eleifend molestie.</p>
      </div>
      {/* Add more rows with image and paragraph pairs as needed */}
    </div>
  );
};

export default TextImages;
