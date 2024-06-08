import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./custom-slick.css";

import SliderCard from "./SliderCard";

const AutoSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024, // screen width up to 1024px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // screen width up to 600px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div style={{ width: '80%', margin: '7rem auto' }}>
      
      <Slider {...settings}>
        
        <div className="w-75">
        <SliderCard title={"Top 3 des travaux àréaliser chez soi avantl'hiver"} paragraph={"L'arrivée de l'hiver se fait sentir, prenez des mesures clé pour préparer..."}  date={"October 23, 2023"}/>
          
        </div>
        <div className="w-75">
        <SliderCard title={"Top 3 des travaux àréaliser chez soi avantl'hiver"} paragraph={"L'arrivée de l'hiver se fait sentir, prenez des mesures clé pour préparer..."}  date={"October 23, 2023"}/>
          
        </div>
        <div className="w-75">
        <SliderCard title={"Top 3 des travaux àréaliser chez soi avantl'hiver"} paragraph={"L'arrivée de l'hiver se fait sentir, prenez des mesures clé pour préparer..."}  date={"October 23, 2023"}/>
          
        </div>
        <div className="w-75">
        <SliderCard title={"Top 3 des travaux àréaliser chez soi avantl'hiver"} paragraph={"L'arrivée de l'hiver se fait sentir, prenez des mesures clé pour préparer..."}  date={"October 23, 2023"}/>
          
        </div>
        <div className="w-75">
        <SliderCard title={"Top 3 des travaux àréaliser chez soi avantl'hiver"} paragraph={"L'arrivée de l'hiver se fait sentir, prenez des mesures clé pour préparer..."}  date={"October 23, 2023"}/>
          
        </div>
        
      </Slider>
    </div>
  );
};

export default AutoSlider;