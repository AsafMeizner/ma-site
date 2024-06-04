import React, { useRef, useState, useEffect } from 'react';
import '../styles/RobotModel.css'

const RobotModel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageRefs = useRef([]);

  const baseUrl = 'https://raw.githubusercontent.com/AsafMeizner/ma-site/master/public/robot/robot_';
  const imageCount = 200;

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const totalScrollHeight = document.body.scrollHeight - window.innerHeight;
      const scrollProgress = scrollPosition / totalScrollHeight;
      const startImageIndex = 2;
      const multiplier = 2; // Adjust this value to change scroll speed
      const newImageIndex = Math.floor(scrollProgress * imageCount * multiplier + startImageIndex);

      // Ensure index stays within imageUrls bounds (added safeguard)
      if (newImageIndex >= 0 && newImageIndex < imageCount) {
        setCurrentImageIndex(newImageIndex);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isPortrait = window.screen.width < window.screen.height;
  
  return (
    <div className="RobotModel" style={{ height: isPortrait ? '90vh' : '56.25vw' }}>
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: isPortrait ? 'center' : 'right',
        }}
      >
        {Array(imageCount) 
          .fill(null)
          .map((_, index) => (
            <img
              key={index}
              ref={(el) => (imageRefs.current[index] = el)}
              src={`${baseUrl}0${index.toString().padStart(3, '0')}.jpg`} 
              alt={`Robot Image ${index + 1}`}
              style={{
                position: 'absolute',
                top: '0%',
                width: isPortrait ? 'auto' : '130%',
                height: isPortrait ? '100%' : 'auto',
                opacity: index === currentImageIndex ? 1 : 0,
                transition: 'none',
                left: isPortrait ? '-120%' : '-45%',
                top: isPortrait ? '0%' : '-15%',
              }}
            />
          ))
        }
        <h1 class="text-on-image" style={{opacity: isPortrait? '100%' : '0%'}}>Our 2024 Robot</h1>
        <img src="maroon.png" alt="maroon" 
          style={{
            width: "auto", 
            height: "100%",
            opacity: isPortrait ? 0 : 100,
            zIndex: 100,

          }}/>
      </div>
    </div>
  );
};

export default RobotModel;
