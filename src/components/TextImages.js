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
          <p>We are the Makers Assemble robotics group from Tichonet High School in Tel Aviv. Our group takes part in the various programs of the world FIRST organization. In our complex other groups operate in the other programs FRC, FTC, FLL and FLL Explore. In addition, our group works for the community, using the knowledge we acquired with the help of the program and with the aim of spreading our vision FIRST For Everyone.
</p>
<p> </p>
<p>
Our team has been operating since 2016 and consists of the students of the senior levels and is assisted by mentors. The team consists of six main teams. Five of them deal with the technical part (mechanics, drawing, software, electronics) and the last one is a community that deals with an equally important part of contributing to the community and marketing of the group in which the whole group takes part.</p>
        </div>
        <div className="row">
          <img src="/image2.png" alt="2023 robot - Magnoom" className="image" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin efficitur eu eros et volutpat. Aliquam id condimentum ipsum, vitae sagittis ligula. Morbi sit amet dui vel mi placerat cursus. Quisque tempor mi ut tortor pulvinar vehicula. Quisque consectetur ex in tellus scelerisque consectetur. Phasellus placerat pharetra tortor, eu condimentum diam tincidunt non. In lobortis mollis risus quis lobortis. Mauris elementum neque sed purus cursus egestas. Nulla vitae molestie est. Sed pellentesque nunc sed dictum tristique. Pellentesque sed neque justo. In suscipit sem vel lacus placerat aliquet sed at lectus. Nulla a ornare metus, sit amet bibendum mi. Aenean vitae nunc nec justo scelerisque imperdiet et eu ligula. Praesent eu urna a diam eleifend molestie.</p>
        </div>
        <div className="row">
          <img src="/image3.png" alt="FRC" className="image" />
          <p>FIRST Robotics is a non-profit organization founded by inventor Dean Kamen in 1989 to inspire young people's interest and participation in science and technology. FIRST stands for "For Inspiration and Recognition of Science and Technology". The organization hosts several robotics competitions each year for students from around the world to demonstrate their engineering and problem-solving skills.</p>
        </div>
      </div>
    </div>
  );
};

export default TextImages;
