import React from 'react'
import './JasminClient.css'
import ReviewCard from '../../component/Rewardcard/RewardCard'
import Renovation from '../../component/Renovation/Renovation'
import Strip from '../../component/strip/Strip'
import client1 from "../../Assets/houzz.png"
import client2 from "../../Assets/PagesJaunes.png"
import client3 from "../../Assets/trustpilot.png"




function Client() {
  return (
    <div>
      {/* 1st Portion */}
      <div className='reviews-img'>
          <img src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?cs=srgb&dl=pexels-fotoaibe-1571460.jpg&fm=jpg" alt="background images" />
        <div className='review-content-portion'>
          <hr />
          <h1><strong>Avis clients</strong></h1>
          <p>Ne prenez pas seulement notre parole pour acquis, lisez ce que nos clients ont à dire.</p>
        </div>
      </div>
      {/* 2nd Portion */}
      <div className='jasmin-qoute container'>
        <div className='quote'>
          <p>Mes sauveurs ! Après un abandon de chantier avec beaucoup (trop) de choses à rattraper, j'ai fait appel à Jasmin Renov qui a réussi à combiner écoute/savoir faire/réactivité/rapidité/ rapport qualité prix imbattable. Ils viennent de me déposer les clés et mon appart est nickel ! Que ce soit pour de la pose de parquet, plomberie, pose de salle de bain, de cuisine, de fenêtre, électricité, etc. ils savent tout faire. Allez-y les yeux fermés!</p>
          <hr />
          <strong>Anthony G.</strong>
        </div>
        <div className='quote-logo'>
          <svg xmlns="http://www.w3.org/2000/svg" width="266" height="266" fill="#e81a4b" class="bi bi-quote" viewBox="0 0 16 16"><path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z" /></svg>
        </div>
      </div>
      {/* 3rd Portion */}
      <div className='container'>
        <h4 className='text-center'>Avis clients recueillis sur</h4>
        <div className='d-flex gap-5 justify-content-center mt-3 client_logo'>
          <img width="120px" src={client1} alt="reviews-logo" className='obj-fit-contain' />
          <img width="120px" src={client2} alt="reviews-logo" className='obj-fit-contain' />
          <img width="120px" src="https://logos-world.net/wp-content/uploads/2023/12/Google-Review-Emblem.png" alt="reviews-logo" />
          <img width="120px" src={client3} alt="reviews-logo" className='obj-fit-contain' />
        </div>
      </div>
      {/* 4th Portion */}
      <div className='review-container container'>
        <ReviewCard review="J'ai fais appel à Jasmin Rénov récemment pour la rénovation d'un studio. Le travail a très bien été réalisé, je suis ravie du résultat. Je vous recommande cette entreprise pour tout vos travaux de rénovations." author="Sonia M." />
        <ReviewCard review="C'est le meilleur artisan avec lequel j'ai travaillé. Les délais sont respectés, les coûts sont maitrisés il n'y a pas de mauvaise surprise. Le Nettoyage quotidien du chantier est un gros plus. Je recommande vivement." author="Kévin C." />
        <ReviewCard review="Grand soin apporté à l'analyse des besoins et à la finition des travaux. Les résultats sont à la hauteur de mes attentes pour la rénovation de ma salle de bains qui impliquait de refaire le plancher et d'isoler le plafond de mon garage. Les délais ont été rallongés de quelques jours, mais le professionnalisme des ouvriers et leur sérieux sur chaque tâche est à souligner. Je recommande vivement cette entreprise fiable." author="Danièle S." />
        <ReviewCard review="L'intervention de la société Jasmin EURL m'a apporté une totale satisfaction de service que je recommande vivement. Ponctualité, rigueur, souplesse et adaptation, culture du livrable et de la satisfaction client, bref, des vrais professionnels." author="Rafet K." />
        <ReviewCard review="Disponible, répond aux attentes, bon rapport qualité/tarif." author="Isabelle B." />
        <ReviewCard review="Entreprise sérieuse, de bons conseils. Ils ont respecté un cahier des charges précis, ont toujours été très ponctuels sur les délais annoncés et chose agréable, ont respecté le prix prévu au centime près, malgré les quelques petites modifications survenues en cours de chantier. À leur départ, tout était nettoyé et le chantier était impeccable. Je recommande vraiment." author="Marc T." />
        <ReviewCard review="La prestation a été excellente. Le projet a totalement été compris et réalisé, l'entreprise s'est rendue disponible très rapidement avec un travail rapide et soigné. Nous sommes totalement ravis du résultat et recommandons fortement ce professionnel." author="Benoit F." />
        <ReviewCard review="Entreprise sérieuse et professionnelle. Le résultat des travaux est très bon et les finitions sont soignées. Saim a été à l'écoute et accommodant. Je recommande donc cette entreprise et n'hésiterai pas à refaire appel à ses services." author="Florian D." />
        <ReviewCard review="Excellente résolution des problèmes imprévus." author="Laurent D." />
        <ReviewCard review="Rénovation salle de bain et WC: Projet bien compris et devis conforme à notre besoin. Démarrage et fin des travaux dans les délais prévus. JASMIN est une entreprise très sérieuse, à l'écoute de son client et en capacité de toujours trouver des solutions. Je recommande JASMIN EURL comme un très bon professionnel. La preuve, je le consulte à nouveau pour des travaux d'électricité !" author="Jean-Claude C." />
        <ReviewCard review="Très bien. Très bon contact. Respect des horaires de rendez-vous. Très bonnes explications de comment les travaux vont être réalisés. Informations très claires et motivées sur les matériaux choisis. Solutions trouvées sur un chantier difficile. Bonnes finitions." author="Bernier B." />
        <ReviewCard review="Beau travail réalisé dans les délais." author="Laurence D." />
        <ReviewCard review="Parfait Très qualitatif et très bon travail." author="Sophie P." />
        <ReviewCard review="Entreprise très sérieuse. A l'écoute des besoins du client (salle de bain et toilette PMR). Donne de très bons conseils. Ils ont réussi à aménager nos toilettes (très étroits) afin que je puisse y accéder en toute sécurité. Merci" author="Perez H." />
        <ReviewCard review="Entreprise réactive et arrangeante. Beau travail et bon tarif. Je recommande !" author="Aymeric L." />
        <ReviewCard review="Super travaux, conforme aux attentes." author="Vincent R." />
        <ReviewCard review="Mon projet de rénovation totale de salle de bain avec adaptation PMR fut un challenge à relever en tous points de vue: - élaboration d'un devis complexe en délai rush - date de réalisation à courte échéance (contrainte ANAH) - immeuble ancien - appartement habité durant les travaux (et très encombré de meubles et antiquités) - carrelages et peintures nécessitant un grand soin de pause - mon niveau d'exigence... Ce challenge fut relevé avec brio par le gérant et trois de ses collaborateurs. Je retiens de cette première réalisation: l'excellent relationnel, la disponibilité de Mr Yousaf et ses conseils visant à rationaliser les dépenses, ainsi que l'honnêteté, discrétion et convivialité dans le respect de trois jeunes ouvriers passionnés et ayant à cœur de répondre à mes attentes, leur motivation malgré la difficulté de réalisation liée à ma sélection de matériaux, leur désir de - je cite - << me laisser un bon souvenir >>. Savoir-faire et savoir-être furent au rendez-vous chaque jour. Parfois indécis sur des points majeurs d'esthétisme, j'ai laissé de libres initiatives de choix à ces jeunes ouvriers et ne le regrette pas. Le résultat obtenu va au-delà de ce que j'escomptais lors de la conception de mon projet C'est spontanément et avec plaisir que je recommande JASMIN RENOV. Je compte poursuivre avec cette entreprise et c'est dans l'optimisme et la confiance que je la consulte pour d'autres projets." author="Philippe S." />
        <ReviewCard review="Rénovation studio (SdB, Cuisine, Entrée - Séjour): Suite à de grosses dégradations par le précédent habitant, il y avait beaucoup à faire. L'entreprise a pris en main le projet avec sérieux, professionnalisme et qualité. Le devis a été parfaitement délivré en fonction de nos besoins. Début et fin des travaux dans les délais. Saim et son équipe ont été attentifs et flexibles, toujours prêts à trouver des solutions à nos problèmes. Je ferai surement de nouveau appel à Jasmin Renov et recommande l'entreprise." author="Jamila M." />
        <ReviewCard review="Artisan professionnel, à l'écoute et prend le temps de vérifier les détails." author="Alaa H." />
        <ReviewCard review="Nous avons fait à Jasmin Renov pour la rénovation de notre salle de bain, nous sommes ravis du résultat final ainsi que du déroulé des travaux. Respect des délais, toujours à l'écoute et très respectueux. Nous recommandons cette entreprise et nous ferons de nouveaux à eux pour d'autres projets." author="Vincent R." />
        <ReviewCard review="Travail sérieux propre et soigné ! Je suis très satisfait de la qualité de la prestation fournie et je garde très précieusement ce contact pour mes prochains travaux ou ceux de connaissances. Je le recommande très fortement !" author="Kévin C." />
        <ReviewCard review="Equipe de vrais professionnels, toujours à l'écoute du client, très attentifs à ses besoins et à chaque détail du chantier. Sont très réactifs, bien organisés. Qualité des travaux irréprochable. Devis gratuit : 06 05 62 50 19" author="Oleg V." />
      </div>
      {/* 5th Portion */}
      <Strip />
      {/* 6th Portion */}
      <Renovation title="Votre rénovation d'intérieur sur mesure commence ici." paragraph="Demandez un devis gratuit dès maintenant et parlons de votre projet." />
    </div>
  )
}

export default Client