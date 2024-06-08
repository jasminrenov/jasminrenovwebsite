import React from 'react'
import './Professionnels.css'
import video from '../../Assets/video2.mp4'
import ServiceCard from '../../component/ServiceCard/ServiceCard'
import Button from '../../component/button/Button'
import Information from '../../component/Information/Information'
import Header from '../../component/Header/Hearder'
import Renovation from '../../component/Renovation/Renovation'
import HeroComponent from '../../component/HeroComponent/HeroComponent'
import ProfessionelCard from '../../component/card/ProfessionelCard'
import particularImage1 from "../../Assets/Grid18 (1).jpeg"
import particularImage2 from "../../Assets/Grid18 (6).jpg"
import particularImage3 from "../../Assets/Grid19.jpg"
import particularImage4 from "../../Assets/Grid20.jpg"
import particularImage5 from "../../Assets/Grid21.jpg"
import particularImage6 from "../../Assets/Grid22.jpg"
import particularImage7 from "../../Assets/Grid23.jpg"
import particularImage8 from "../../Assets/Grid4.jfif"





function Professionelspage() {
  return (
    <div>
      {/* 1st Portion */}
      <HeroComponent videoSrc={video} title="Rénovation de commerce, bureau, local
professionnel" describe="Vous envisagez de faire une rénovation complète ou partielle de votre magasin, hôtel, boulangerie, restaurant ou tout autre commercial à Paris, en Ile-de-France ou en
Alsace ? Notre équipe vous aide à créer des espaces modernes et professionnels qui reflètent votre image." btnLink="#" btnName="Devis gratuit" />
      {/* 2nd Portion */}
      <div className='service-portion2 container'>
        <ServiceCard imgUrl={particularImage1} title="Rénovation de bureaux" />
        <ServiceCard imgUrl={particularImage2} title="Rénovation de magasins et boutiques" />
        <ServiceCard imgUrl={particularImage3} title="Rénovation de restaurants et cafés" />
        <ServiceCard imgUrl={particularImage4} title="Rénovation des hôtels et hébergements" />
        <ServiceCard imgUrl={particularImage5} title="Rénovation de centres médicaux et de soin" />
        <ServiceCard imgUrl={particularImage6} title="Rénovation d'établissements scolaires" />
        <ServiceCard imgUrl={particularImage7} title="Rénovation des espaces de coworking" />
        <ServiceCard imgUrl={particularImage8} title="Rénovation de tout type de locaux professionnels" />
      </div>
      {/* 3rd Portion */}
      <div className='local-professionnel container mb-40'>
        <h2>Quand rénover son commerce ou <span className='color-red'>local professionnel?</span></h2>
        <ul>
          <li>Vous avez un restaurant, un hôtel, une boutique ou des bureaux à rénover?</li>
          <li>Vous souhaitez mettre vos locaux aux normes ERP pour garantir la sécurité et le confort de vos clients?</li>
          <li>Vous voulez créer une atmosphère accueillante? Optimiser l'espace ou la fonctionnalité de votre local commercial? Ou réparer les dommages ou l'usure?</li>
        </ul>
        <p>Nous sommes experts en rénovation de locaux professionnels depuis de nombreuses années. Notre équipe se chargera de tous vos besoins en rénovation intérieure pour créer un espace reflétant l'identité de votre entreprise au meilleur rapport qualité-prix.</p>
        <Button hyperlink="#" name="Devis gratuit" className="mb-40" />
      </div>
      {/* 4th Portion */}
      <div className='information-portion container  m-auto'>
        <div className='information-grid '>
        <Information logo="https://pngfre.com/wp-content/uploads/House-3.png" title="Rénovation de salles de bains, WC" paragraph="Pose de carrelage, peinture, installation des équipements sanitaires (baignoire, douche, douche à l'italienne, meuble vasque, lavabo, sèche serviettes, lave-mains...), pose de WC (WC posé au sol, WC suspendu, WC lavant,...)" />
        <Information logo="https://pngfre.com/wp-content/uploads/House-3.png" title="Peinture murs & plafonds" paragraph="Pièces d'eau, salon - séjour, chambre - bureau, entrée - couloir, etc." />
        <Information logo="https://pngfre.com/wp-content/uploads/House-3.png" title="Rénovation et installation de cuisines" paragraph="Installation de meubles - équipements, pose de carrelage, électroménager, livraison cuisine, peinture, plomberie, rénovation et installation électrique, etc." />
        <Information logo="https://pngfre.com/wp-content/uploads/House-3.png" title="Plâtrerie, placo, cloisons" paragraph="Réalisation d'enduits, de cloisons, de faux plafonds et de travaux de finition..." />
        <Information logo="https://pngfre.com/wp-content/uploads/House-3.png" title="Plomberie" paragraph="Modification ou création (modification alimentation en eau, pose robinet / vanne d'arrêt, modification évacuation, création de siphon, création de point d'eau, etc.)" />
        <Information logo="https://pngfre.com/wp-content/uploads/House-3.png" title="Aménagement de combles" paragraph="Pose de revêtements de sol (parquet flottant, massif, sol stratifié, sol PVC), isolation thermique - combles aménagés, création de cloison / démolition de mur, menuiseries (fenêtre de toit, porte, escalier), etc." />
        <Information logo="https://pngfre.com/wp-content/uploads/House-3.png" title="Revêtements de murs & plafonds" paragraph="Fourniture et/ou pose de peinture, papier peint, panneaux décoratifs, pose de plafonds suspendus, pose de faux plafonds, pose de dalles acoustiques, etc." />
        <Information logo="https://pngfre.com/wp-content/uploads/House-3.png" title="Accessibilité PMR" paragraph="Aménagement des parties sanitaires, installations des volets motorisés, chambre accessible au RDC, etc. Création de salles de bains pour PMR (sanitaires adaptés, portes larges, barres d'appui, WC surélevé, lavabo accessible, revêtements antidérapants, rampes d'accès, etc.) Adaptation des locaux aux normes de sécurité et d'accessibilité en vigueur (normes ERP)" />
        <Information logo="https://pngfre.com/wp-content/uploads/House-3.png" title="Electricité générale" paragraph="Installation ou mise en conformité électricité, installation et déplacement de prises électriques, câblage, tableaux électriques, interrupteurs, éclairage, luminaires, etc." />
        <Information logo="https://pngfre.com/wp-content/uploads/House-3.png" title="Revêtements de sols" paragraph="Fourniture et/ou pose de carrelage, parquet, vinyle, moquette, sol PVC,..." />
        <Information logo="https://pngfre.com/wp-content/uploads/House-3.png" title="Aménagement intérieur" paragraph="Création de cloisons, création de verrières, modification de l'agencement des espaces, transformation de garage en habitation, etc." />
        <Information logo="https://pngfre.com/wp-content/uploads/House-3.png" title="Menuiseries intérieures" paragraph="Installation de porte, fenêtre, porte-fenêtre, placards, étagères, volets battants ou roulants,..." />
        <Information logo="https://pngfre.com/wp-content/uploads/House-3.png" title="Isolation phonique et acoustique" paragraph="Isolation des murs, isolation des sols, isolation des combles, etc." />
        <Information logo="https://pngfre.com/wp-content/uploads/House-3.png" title="Chauffage & climatisation" paragraph="Installation ou mise à niveau des systèmes de climatisation, de chauffage (radiateur électrique, chauffe-eau) et de ventilation (VMC, extracteur d'air)..." />
      </div>
      <Button hyperlink="#" name="Voir plus" />
      </div>
      {/* 5th Portion */}
      <div className='container text-start mt-5 mb-5'>
        <h2>Quel est le déroulement d'un <span className='color-red'>chantier</span> ?</h2>
        <ul>
          <li>Visite sur place pour affiner les travaux à faire</li>
          <li>Réalisation de devis et envoi en moins d'une semaine</li>
          <li>Validation et mise en place d'un planning d'exécution</li>
          <li>Préparation du site</li>
          <li>Gestion des commandes et livraisons</li>
          <li>Contrôle réguliers et ajustements</li>
          <li>Travaux de finitions</li>
          <li>Nettoyage de fin de chantier et remise du chantier</li>
        </ul>
      </div>
      {/* 6th Portion */}
      <div>
        <Header heading="Nos engagements" />
        <p className='color-red font-20 text-center'>Jasmin Rénov</p>
        <div className='d-flex justify-content-center gap-5 mt-5 mb-5 three_card_professional'>
          <ProfessionelCard icon="https://pngfre.com/wp-content/uploads/House-3.png" title="Artisans tous corps de métiers" paragraph="Forts de 20 ans d'expérience, nos artisans qualifiés réalisent tous types de projets de rénovation." />
          <ProfessionelCard icon="https://pngfre.com/wp-content/uploads/House-3.png" title="Budget et délais maîtrisés" paragraph="Nous respectons les délais et le budget convenus, assurant une gestion efficace de votre projet." />
          <ProfessionelCard icon="https://pngfre.com/wp-content/uploads/House-3.png" title="Qualité et garantie décennale" paragraph="Matériaux de haute qualité et travail soigné pour un résultat final exceptionnel." />
        </div>
      </div>
      {/* 7th Portion */}
      <Renovation title="Votre rénovation d'intérieur sur mesure commence ici." paragraph="Demandez un devis gratuit dès maintenant et parlons de votre projet." />
    </div>
  )
}

export default Professionelspage