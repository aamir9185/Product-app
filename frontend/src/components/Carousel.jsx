import { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { imageAtom } from '../atoms/atoms'; // Ensure you import the Recoil atom from your correct file path

function Carousel() {
  const images = useRecoilValue(imageAtom); // Get images from Recoil state
  const [activeIndex, setActiveIndex] = useState(0);

  // Automatically switch images every 1.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length); // Cycle through images
    }, 1500);

    return () => clearInterval(interval); // Clean up interval
  }, [images.length]);

  return (
    <div className="absolute inset-0 w-full h-full opacity-50 z-0 overflow-hidden bg-slate-600">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === activeIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}

export default Carousel;
