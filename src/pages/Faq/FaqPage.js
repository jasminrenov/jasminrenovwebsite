import React from 'react'
import './FaqPage.css'
import video from '../../Assets/video2.mp4'
import Faq from '../../component/FaqComponent/Faq'
import Renovation from '../../component/Renovation/Renovation'
import Faq1 from '../../Assets/FAQ1.jfif'
import Faq2 from '../../Assets/FAQ2.jfif'
import Faq3 from '../../Assets/FAQ3.jfif'


const FaqPage = () => {
  return (
    <div>
      <div className='hero-portion'>
        <video autoPlay muted loop id="myVideo">
          <source src={video} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
        <div className='hero-content-portion'>
          <h1><strong>FAQ</strong></h1>
          <p>Découvrez les réponses aux questions fréquemment posées sur nos services de rénovation d'intérieur en Ile-de-France et en Alsace.</p>
        </div>
      </div>
      <div className='faq-parent container'>
        <div className='faq-group'>
          <div className='faq-img'>
            <img src={Faq1} alt="FAQ Image" />
          </div>
          <h2>Expertise & Services</h2>
        </div>
        <div className='faq-group'>
          <div className='faq-img'>
            <img src={Faq2} alt="FAQ Image" />
          </div>
          <h2>Clients</h2>
        </div>
        <div className='faq-group'>
          <div className='faq-img'>
            <img src={Faq3} alt="FAQ Image" />
          </div>
          <h2>Project & Gestion</h2>
        </div>
      </div>
      <div className="Faq container">
        <h1 className='Faq-head'>Expertise & Services</h1>
        <div className="faq-list">
          <Faq question="Quels services votre entreprise de rénovation d'intérieur propose-t-elle ?" answer="Notre entreprise propose une large gamme de services de rénovation d’intérieur, notamment la rénovation partielle (rénovation de cuisines, salles de bains, chambres, salons, bureaux…) et la rénovation complète de maisons, appartements, studios, immeubles et bureaux à Paris, en Ile-de-France et en Alsace. Nous réalisons des prestations suivantes : la peinture, la pose de revêtements de sol, la pose de revêtements de murs, l’électricité, les cloisons et doublages, la plomberie, la menuiserie, la plâtrerie et l’isolation, et bien plus encore." />
          <Faq question="Est-ce que votre entreprise fournit des services de démolition avant la rénovation d'intérieur?" answer="JasminRenov, nous proposons des services complets de rénovation, y compris la démolition, pour préparer l'espace à la rénovation intérieure. Notre équipe qualifiée est expérimentée dans la démolition sûre et efficace des structures existantes, la suppression des installations indésirables et le dégagement de l'espace pour faire place aux travaux de rénovation." />
          <Faq question="Offrez-vous un service de nettoyage après les travaux de rénovation d'intérieur ?" answer="JasminRenov propose un nettoyage après rénovation pour garantir que votre espace reste intact et prêt à être utilisé. Notre équipe de nettoyage professionnelle est expérimentée dans la gestion des besoins de nettoyage uniques qui surviennent après des projets de rénovation intérieure, notamment l'élimination de la poussière, des débris et des résidus de construction." />
          <Faq question="Est-ce que votre entreprise dispose d'une assurance responsabilité civile pour couvrir les éventuels dommages pendant les travaux ?" answer="JasminRenov souscrit une assurance responsabilité civile pour protéger notre entreprise et nos clients en cas d'accidents ou de dommages imprévus pouvant survenir au cours de nos travaux. Cette assurance couvre tous les dommages ou responsabilités potentiels qui pourraient survenir, offrant ainsi à nos clients une tranquillité d'esprit sachant qu'ils sont entièrement protégés tout au long du processus de rénovation." />
          <Faq question="votre entreprise propose des services de rénovation d'intérieur adaptés aux personnes à mobilité réduite (PMR) ?" answer="JasminRenov s'engage à fournir des services de rénovation intérieure inclusifs qui répondent aux besoins de toutes les personnes, y compris les personnes à mobilité réduite (PMR). Nous comprenons l’importance de créer des espaces accessibles et fonctionnels pour tous, quelles que soient leurs capacités physiques." />
        </div>
      </div>
      <div className="Faq container">
        <h1 className='Faq-head'>Clients</h1>
        <div className="faq-list">
          <Faq question="Quelles zones géographiques couvrez-vous?" answer="Notre entreprise propose une large gamme de services de rénovation d’intérieur, notamment la rénovation partielle (rénovation de cuisines, salles de bains, chambres, salons, bureaux…) et la rénovation complète de maisons, appartements, studios, immeubles et bureaux à Paris, en Ile-de-France et en Alsace. Nous réalisons des prestations suivantes : la peinture, la pose de revêtements de sol, la pose de revêtements de murs, l’électricité, les cloisons et doublages, la plomberie, la menuiserie, la plâtrerie et l’isolation, et bien plus encore." />
          <Faq question="Pouvez-vous intervenir dans d'autres régions en dehors de l'Ile-de-France et l'Alsace ?" answer="En tant que JasminRenov, notre objectif principal est de servir les clients des régions d'Île-de-France et d'Alsace. Cependant, en fonction des spécificités du projet et de notre charge de travail actuelle, nous pourrions également envisager d'opérer dans d'autres régions." />
          <Faq question="Quels types de clients travaillez-vous habituellement avec votre entreprise de rénovation d'intérieur ?" answer="nous collaborons avec un large éventail de clients, notamment des propriétaires, des gestionnaires immobiliers, des investisseurs immobiliers, des propriétaires d'entreprises, des architectes, des designers, des agences gouvernementales et des organisations à but non lucratif, pour fournir des solutions de rénovation domiciliaire de haute qualité adaptées pour répondre à leurs besoins spécifiques et dépasser leurs attentes. ." />
          <Faq question="Est-ce que votre entreprise dispose de références ou de témoignages de clients précédents?" answer="nous sommes fiers de notre engagement envers la satisfaction de nos clients et la qualité de notre travail. Nous disposons d'un portfolio présentant nos projets réalisés et sommes heureux de fournir des références ou des témoignages de clients précédents sur demande. N'hésitez pas à nous contacter et nous serons ravis de partager les commentaires de nos clients satisfaits pour vous donner confiance dans le choix de JasminRenov pour vos besoins de rénovation domiciliaire." />
          <Faq question="Etes-vous ouverts à des collaborations en tant que sous-traitant?" answer="nous sommes toujours ouverts à l'exploration de collaborations avec des sous-traitants qui correspondent à nos valeurs et à nos normes. Si vous souhaitez potentiellement travailler ensemble, n'hésitez pas à nous contacter pour plus de détails sur vos services et votre expertise. Nous sommes ravis de discuter des opportunités potentielles de collaboration !" />
        </div>
      </div>
      <div className="Faq container mb-5">
        <h1 className='Faq-head'>Project & Gestion</h1>
        <div className="faq-list">
          <Faq question="Comment puis-je demander un devis gratuit pour un projet de rénovation d'intérieur ?" answer="Notre entreprise propose une large gamme de services de rénovation d’intérieur, notamment la rénovation partielle (rénovation de cuisines, salles de bains, chambres, salons, bureaux…) et la rénovation complète de maisons, appartements, studios, immeubles et bureaux à Paris, en Ile-de-France et en Alsace. Nous réalisons des prestations suivantes : la peinture, la pose de revêtements de sol, la pose de revêtements de murs, l’électricité, les cloisons et doublages, la plomberie, la menuiserie, la plâtrerie et l’isolation, et bien plus encore." />
          <Faq question="Combien de temps faut-il généralement pour terminer un projet de rénovation d'intérieur?" answer="nous accordons la priorité à une communication claire et à une gestion de projet efficace pour garantir que votre projet de rénovation intérieure soit terminé dans les délais tout en maintenant les plus hauts standards de qualité et de savoir-faire." />
          <Faq question="Puis-je acheter mes propres matériaux et les faire installer par votre entreprise?" answer="JasminRenov, nous sommes flexibles et ouverts à répondre aux préférences de nos clients. Si vous préférez acheter vos propres matériaux pour votre projet de rénovation intérieure, vous pouvez le faire. Une fois les matériaux prêts, notre équipe peut procéder à l’installation selon vos spécifications et exigences." />
          <Faq question="Quels sont les avantages de faire appel à une entreprise de rénovation d'intérieur professionnelle plutôt que de faire les travaux soi-même ?" answer="confier votre rénovation intérieure à notre équipe de professionnels garantit un travail de premier ordre, un accès à notre expertise et à nos ressources, vous fait gagner du temps et atténue le stress associé à la gestion du projet vous-même." />
          <Faq question="Quel est le prix au m2 d'une rénovation?" answer="nous fournissons des devis personnalisés adaptés à chaque projet individuel après une évaluation approfondie des besoins de rénovation. Cela garantit la transparence et l’exactitude des prix, ainsi que la fourniture de résultats de haute qualité à un prix juste et compétitif. N'hésitez pas à nous contacter pour une consultation et un devis personnalisé pour votre projet de rénovation." />
          <Faq question="Comment choisissez-vous les matériaux pour les projets de rénovation d'intérieur?" answer="nous sélectionnons soigneusement les matériaux pour les projets de rénovation intérieure en fonction des préférences du client, de la fonctionnalité, de la cohésion esthétique, de la durabilité, de la longévité et des considérations budgétaires." />
          <Faq question="Quelles sont les modalités de paiement acceptées par votre entreprise de rénovation d'intérieur?" answer="nous offrons des conditions de paiement flexibles pour répondre aux besoins de nos clients. En règle générale, notre structure de paiement implique une combinaison de dépôts initiaux, de paiements d'étape tout au long du projet et d'un paiement final à la fin et à la satisfaction du client." />
        </div>
      </div>
      <Renovation title="Votre rénovation d'intérieur sur mesure commence ici." paragraph="Demandez un devis gratuit dès maintenant et parlons de votre projet." />
    </div>
  )
}

export default  FaqPage