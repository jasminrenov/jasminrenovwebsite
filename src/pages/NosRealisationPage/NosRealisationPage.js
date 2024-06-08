import React from 'react';
import './NosRealisationPage.css';
import video from "../../Assets/video2.mp4";
import HeroComponent from '../../component/HeroComponent/HeroComponent';
import Renovation from '../../component/Renovation/Renovation';
import gridpic1 from "../../Assets/Grid1.jfif"
import gridpic2 from "../../Assets/Grid2.jfif"
import gridpic3 from "../../Assets/Grid3.jfif"
import gridpic4 from "../../Assets/Grid4.jfif"
import gridpic5 from "../../Assets/Grid5.jfif"
import gridpic6 from "../../Assets/Grid6.jfif"
import gridpic7 from "../../Assets/Grid7.jfif"
import gridpic8 from "../../Assets/Grid8.jfif"
import gridpic9 from "../../Assets/Grid9.jfif"
import gridpic10 from "../../Assets/Grid10.jfif"
import gridpic11 from "../../Assets/Grid11.jfif"
import gridpic12 from "../../Assets/Grid12.jfif"
import gridpic13 from "../../Assets/Grid13.jfif"
import gridpic14 from "../../Assets/Grid14.jfif"
import gridpic15 from "../../Assets/Grid15.jfif"
import gridpic16 from "../../Assets/Grid16.jfif"
import gridpic17 from "../../Assets/Grid17.jfif"



const NosRealisationPage = () => {
  return (
    <div>
    <HeroComponent videoSrc={video} title="Nos réalisations" describe="Chaque projet témoigne de notre engagement envers l’excellence, notre souci du détail et notre passion pour la création d’espaces inspirants. Explorez ci-dessous quelques-unes de nos réalisations." btnLink="#" btnName="Devis gratuit" />
      <div className="image-grid container">
        <div className="image-contain">
        <img src={gridpic1} alt="Realisation 1" />
        </div>
        <div className="image-contain">
        <img src={gridpic2} alt="Realisation 1" />
        </div>
        <div className="image-contain">
        <img src={gridpic3} alt="Realisation 1" />
        </div>
        <div className="image-contain">
        <img src={gridpic4} alt="Realisation 1" />
        </div>
        <div className="image-contain">
        <img src={gridpic5} alt="Realisation 1" />
        </div>
        <div className="image-contain">
        <img src={gridpic6} alt="Realisation 1" />
        </div>
        <div className="image-contain">
        <img src={gridpic7} alt="Realisation 1" />
        </div>
        <div className="image-contain">
        <img src={gridpic8} alt="Realisation 1" />
        </div>
        <div className="image-contain">
        <img src={gridpic9} alt="Realisation 1" />
        </div>
        <div className="image-contain">
        <img src={gridpic10} alt="Realisation 1" />
        </div>
        <div className="image-contain">
        <img src={gridpic11} alt="Realisation 1" />
        </div>
        <div className="image-contain">
        <img src={gridpic12} alt="Realisation 1" />
        </div>
        <div className="image-contain">
        <img src={gridpic13} alt="Realisation 1" />
        </div>
        <div className="image-contain">
        <img src={gridpic14} alt="Realisation 1" />
        </div>
        <div className="image-contain">
        <img src={gridpic15} alt="Realisation 1" />
        </div>
      </div>
      <div className='image-grid2 container'>
      <div className="image-container2">
        <img src={gridpic16} alt="Realisation 1" />
        </div>
        <div className="image-container2">
        <img src={gridpic17} alt="Realisation 1" />
        </div>
      </div>
      <Renovation title="Votre rénovation d'intérieur sur mesure commence ici." paragraph="Demandez un devis gratuit dès maintenant et parlons de votre projet." />
    </div>
  );
};

export default NosRealisationPage;