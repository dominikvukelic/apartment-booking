import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import './ImageDisplay.css';

const ImageDisplay = () => {
  const images = [
    'apartment-1.jpg',
    'apartment-2.jpg',
    'apartment-3.jpg',
    'apartment-4.jpg',
    // Dodajte ovdje ostale slike
  ];

  return (
    <div className="carousel-container">
      <div className="image-carousel">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={`${process.env.PUBLIC_URL}/images/${image}`}
                alt={`Slika ${index + 1}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ImageDisplay;
