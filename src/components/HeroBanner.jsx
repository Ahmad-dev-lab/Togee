import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const HeroBanner = () => {
  const slides = [
    "https://media.istockphoto.com/id/831656828/photo/luxury-clothing-store-for-men.jpg?s=1024x1024&w=is&k=20&c=Hdr7iTUj5cjwvhlNTg1FUZkSQwm1bpvMRiGByBBe_2w=",
    "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=1200&h=400&fit=crop",
    "https://images.unsplash.com/photo-1503342394128-c104d54dba01?w=1200&h=400&fit=crop",
    "https://media.istockphoto.com/id/2147511520/photo/korean-teenage-girl-holds-a-credit-card-in-her-hands-and-wants-to-pay-for-new-clothes-in-a.jpg?s=1024x1024&w=is&k=20&c=RNMTGsJgazyEIwYDKfuMXeaZ1cNyEO3pLaus8_NGJBs=",
  ];

  return (
    <div className="max-w-7xl mx-auto mt-6 px-4 relative group">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="rounded-lg overflow-hidden"
      >
        {slides.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-64 md:h-96">
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <h2 className="text-2xl md:text-4xl font-bold text-white drop-shadow-lg">
                  Big Sale – Shop Now!
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroBanner;
