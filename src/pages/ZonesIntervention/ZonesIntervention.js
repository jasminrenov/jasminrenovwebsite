import React from 'react'
import './ZonesIntervention.css'
import video from "../../Assets/video2.mp4"
import HeroComponent from '../../component/HeroComponent/HeroComponent'
import Renovation from '../../component/Renovation/Renovation'

function ZonesIntervention() {
  return (
    <>
    <HeroComponent videoSrc={video} title="Rénovation de maisons, appartements, studios" describe="Vous envisagez de faire une rénovation complète ou partielle de votre maison, appartement, immeuble ou studio à Paris, en Ile-de-France ou en Alsace ? Notre équipe vous aide à créer des espaces modernes et fonctionnels." btnLink="#" btnName="Devis gratuit" />
    <div className="containers">
      <h1>Vous avez un projet de rénovation ?</h1>
      <p className='zone-para'>
        Nous nous déplaçons gratuitement chez vous pour mieux évaluer vos attentes et vous proposer une rénovation intérieure sur mesure, en accord avec votre budget. Nous desservons actuellement toute l’Ile-de-France et l’Alsace.
      </p>
      <div className="buttons">
        <button className="button idf">Ile-de-France</button>
        <button className="button alsace">Alsace</button>
      </div>
    </div><div className="grid-container ">
        <div className="grid-item">
          <h2>Travaux de rénovation Paris (75)</h2>
          <p className='zone-para'>
            Vous avez des projets de rénovation d'appartements, lofts, studios, maisons, immeubles, hôtels ou locaux professionnels à Paris 75 ? Contactez Jasmin Rénov dès maintenant, votre expert en rénovation sur mesure à Paris.
          </p>
        </div>
        <div className="grid-item">
          <h2>Travaux de rénovation Seine-et-Marne (77)</h2>
          <p className='zone-para'>
            Confiez tous vos travaux de rénovation d'intérieur à Jasmin Rénov, spécialisé en rénovation d'intérieur à Melun et dans les environs (Cesson, Moissy-Cramayel, Lieusaint, Chelles, Meaux, Savigny-le-Temple, Combs-la-Ville, et bien d'autres).
          </p>
        </div>
        <div className="grid-item">
          <h2>Travaux de rénovation Yvelines (78)</h2>
          <p className='zone-para'>
            Basés à Sartrouville 78, notre entreprise générale de rénovation réalise tous vos travaux de rénovation à Sartrouville et alentours (Versailles, Maisons-Laffitte, Mantes-la-Jolie, Poissy, Houilles, Chatou etc.)
          </p>
        </div>
        <div className="grid-item">
          <h2>Travaux de rénovation Essonne (91)</h2>
          <p className='zone-para'>
            L'équipe Jasmin Rénov vous accompagne dans tous vos travaux de rénovation maison, appartement, commerce à Corbeil-Essonnes, Evry-Courcouronnes, Massy, Savigny-sur-Orge, Yerres, et d'autres villes de la région.
          </p>
        </div>
        <div className="grid-item">
          <h2>Travaux de rénovation Hauts-de-Seine (92)</h2>
          <p className='zone-para'>
            À la recherche d'une entreprise de rénovation à Boulogne-Billancourt, Nanterre, Courbevoie, Colombes, Asnières-sur-Seine, Puteaux, Montrouge et dans les environs ? Faites confiance à Jasmin Rénov pour vous accompagner dans tous vos projets de rénovation d'intérieur.
          </p>
        </div>
        <div className="grid-item">
          <h2>Travaux de rénovation Seine-Saint-Denis (93)</h2>
          <p className='zone-para'>
            Pour vos rénovations intérieures à Saint-Denis, Bobigny, Montreuil, Aubervilliers, Drancy, Noisy-le-Grand, Pantin et les environs, contactez Jasmin Rénov. Devis gratuit sans engagement. Expert en rénovation intérieure.
          </p>
        </div>
        <div className="grid-item">
          <h2>Travaux de rénovation Val-de-Marne (94)</h2>
          <p className='zone-para'>
            Besoin de travaux de rénovation à Maisons-Alfort, Vincennes, Alfortville, Créteil, Vitry-sur-Seine, Fontenay-sous-Bois, Champigny-sur-Marne et les environs ? Contactez-nous dès maintenant pour vos projets de rénovation dans le département 94.
          </p>
        </div>
        <div className="grid-item">
          <h2>Travaux de rénovation Val-d'Oise (95)</h2>
          <p className='zone-para'>
            À la recherche d'une entreprise de rénovation tous corps d'état à Argenteuil, Cergy, Sarcelles, Pontoise, Goussainville, Villiers-le-Bel, Franconville et autres villes voisines ? Contactez-nous dès maintenant pour un devis de rénovation gratuit.
          </p>
        </div>
        <div className="grid-item">
          <h2>Travaux de rénovation Bas-Rhin (67)</h2>
          <p className='zone-para'>
            Nous intervenons dans tout le Bas-Rhin, notamment à Strasbourg, Haguenau, Sélestat, Schiltigheim, Illkirch-Graffenstaden, Bischwiller, Lingolsheim, et les environs, pour rénover vos espaces intérieurs au meilleur rapport qualité prix.
          </p>
        </div>
        <div className="grid-item">
          <h2>Travaux de rénovation Haut-Rhin (68)</h2>
          <p className='zone-para'>
            Besoin de travaux de rénovation à Mulhouse, Colmar, Saint-Louis, Thann, Cernay, Altkirch, Ribeauvillé, Kaysersberg, Guebwiller, et les environs ? Contactez-nous dès maintenant pour vos projets de rénovation dans le département 68.
          </p>
        </div>
      </div>
      <Renovation title="Votre rénovation d'intérieur sur mesure commence ici." paragraph="Demandez un devis gratuit dès maintenant et parlons de votre projet." />
      </>
  )
}

export default ZonesIntervention