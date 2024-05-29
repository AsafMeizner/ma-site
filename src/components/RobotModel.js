import React, { useRef, useState, useEffect } from 'react';
import '../styles/RobotModel.css'

const RobotModel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageRefs = useRef([]);

  const baseUrl = 'https://raw.githubusercontent.com/AsafMeizner/ma-site/master/public/robot/robot-';
  const imageCount = 199;

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

  return (
    <div className="RobotModel">
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
  
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
                height: '100%',
                opacity: index === currentImageIndex ? 1 : 0,
                transition: 'none',
              }}
            />
          ))
        }
        <h1 class="text-on-image">Our 2024 Robot</h1>
      </div>
    </div>
  );
};

export default RobotModel;
