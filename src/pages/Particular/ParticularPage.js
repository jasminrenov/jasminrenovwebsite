import React from 'react'
import "../Professionnels/Professionnels.css"
import video from '../../Assets/hero.mp4'
import HeroComponent from '../../component/HeroComponent/HeroComponent'
import ServiceCard from '../../component/ServiceCard/ServiceCard'
import Button from '../../component/button/Button'
import Information from '../../component/Information/Information'
import Header from '../../component/Header/Hearder'
import ProfessionelCard from '../../component/card/ProfessionelCard'
import Renovation from '../../component/Renovation/Renovation'
import particularImage1 from "../../Assets/Grid18 (1).jpeg"
import particularImage2 from "../../Assets/Grid18 (6).jpg"
import particularImage3 from "../../Assets/Grid19.jpg"
import particularImage4 from "../../Assets/Grid20.jpg"
import particularImage5 from "../../Assets/Grid21.jpg"
import particularImage6 from "../../Assets/Grid22.jpg"
import particularImage7 from "../../Assets/Grid23.jpg"
import particularImage8 from "../../Assets/Grid4.jfif"


function ParticularPage() {
  return (
    <div>
      {/* 1st Portion */}
      <HeroComponent videoSrc={video} title="Rénovation de maisons, appartements, studios" describe="Vous envisagez de faire une rénovation complète ou partielle de votre maison, appartement, immeuble ou studio à Paris, en Ile-de-France ou en Alsace ? Notre équipe vous aide à créer des espaces modernes et fonctionnels." btnLink="#" btnName="Devis gratuit" />
      {/* 2nd Portion */}
      <div className='service-portion2 container'>
        <ServiceCard imgUrl={particularImage1} title="Rénovation de salle de bains - WC" />
        <ServiceCard imgUrl={particularImage2} title="Rénovation et installation de cuisine" />
        <ServiceCard imgUrl={particularImage3} title="Rénovation de salon" />
        <ServiceCard imgUrl={particularImage4} title="Aménagement de combles" />
        <ServiceCard imgUrl={particularImage5} title="Rénovation de chambre" />
        <ServiceCard imgUrl={particularImage6} title="Rénovation entrée - couloir - dégagement" />
        <ServiceCard imgUrl={particularImage7} title="Rénovation de bureaux" />
        <ServiceCard imgUrl={particularImage8} title="Rénovation de buanderie" />
      </div>
      {/* 3rd Portion */}
      <div className='local-professionnel container mb-40'>
        <h2>Pourquoi rénover son <span className='color-red'>logement?</span></h2>
        <ul>
          <li>Vous voulez moderniser votre espace de vie?</li>
          <li>Vous envisagez de rénover pour répondre aux <span className='weight-600'>normes de sécurité et d'accessibilité PMR</span>?</li>
          <li>Vous souhaitez <span className='weight-600'>augmenter la valeur de votre bien immobilier</span> ?</li>
          <li>Vous avez besoin de plus d'espace ou de <span className='weight-600'>reconfigurer la disposition</span> de votre logement?</li>
          <li>Vous êtes à la recherche d'une solution pour résoudre des <span className='weight-600'>problèmes structurels ou de dégradation</span>?</li>
          <li>Vous êtes à la recherche d'une meilleure <span className='weight-600'>isolation thermique et phonique pour améliorer votre confort</span>?</li>
        </ul>
        <p>Si vous répondez oui à l'une de ces questions, il est peut-être temps d'envisager une rénovation de votre logement. Que vous ayez besoin de <span className='weight-600'>petits travaux de rénovation</span> ou d'une <span className='weight-600'>rénovation complète</span>, nous sommes là pour vous accompagner dans votre projet de rénovation de A à Z.</p>
        <Button hyperlink="#" name="Devis gratuit" />
      </div>
      {/* 4th Portion */}
      <div className='information-portion container m-auto'>
        <div className='information-grid m-auto '>
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
      <div className='container local-professionnel text-start mt-5 mb-5'>
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
        <div className='d-flex justify-content-center flex-wrap gap-5 mt-5 mb-5'>
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

export default ParticularPage