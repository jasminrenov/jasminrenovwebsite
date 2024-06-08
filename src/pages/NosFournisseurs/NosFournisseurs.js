import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";

import './NosFournisseurs.css';
import { NextArrow, PrevArrow } from '../../component/CustomArrows/CustomArrows';


const NosFournisseurs = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='nos-bg pt-5 pb-5'>
      <div className="Nos-head container">
        <h1>Nos fournisseurs</h1>
        <div className="Nos-content">
          <p className='w-75 m-auto'>
            Nous travaillons avec de nombreux fournisseurs spécialisés pour vous
            offrir des services de qualité pour la rénovation de vos appartements,
            maisons et locaux professionnels dans la région Ile-de-France et Alsace.
            Voici une liste non exhaustive:
          </p>
        </div>
        <div className="brand-carousel container">
          <Slider {...settings}>
            <div className='h-250'>
              <img className='fit-contain' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiRLCfngWOILNMj7er4Vg0ig_Cse9yVQy4BgXPUn9uj2OBTsuYZrWARDogS4B2JicE3aw&usqp=CAU" alt="Velux" />
            </div>
            <div className='h-250'>
              <img className='fit-contain' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmf3DDHhos6ZwJoxItm8lUOccEwX4wjk1BHVZfQ9T_AOLOdXeoIOwhd00REk2C5tV2vFo&usqp=CAU" alt="Weber" />
            </div>
            <div className='h-250'>
              <img className='fit-contain' src="https://www.furnituremakers.org.uk/wp-content/uploads/2020/03/Howdens-Logotype_Horizontal_BlackRed-NEW-LOGO.jpg" alt="Isover" />
            </div>
            <div className='h-250'>
              <img className='fit-contain' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWCZRFRqSxRtaC7FSIQ6GOtr2NrTCewUvUWg&s" alt="Grohe" />
            </div>
            <div className='h-250'>
              <img className='fit-contain' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqVYi_54056ibLB_cw7d_zGaPpI4LlaJTUXwbsf5rY-P_tuF2vmtp_zEOGpvVrq01znrU&usqp=CAU" alt="Howdens" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default NosFournisseurs;