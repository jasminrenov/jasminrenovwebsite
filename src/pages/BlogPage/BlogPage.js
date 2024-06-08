import React from 'react'
import './Blog.css'
import BlogImgCard from '../../component/BlogComp/BlogImage'
import BlogCard from '../../component/BlogComp/BlogCard'
import blogimg1 from "../../Assets/Blog1.jfif"
import blogimg2 from "../../Assets/Blog2.jfif"
import blogimg3 from "../../Assets/Blog3.jfif"
import blogimg4 from "../../Assets/Blog4.jfif"
import blogimg5 from "../../Assets/blog5.jpg"


function BlogPage() {
  return (
    <div className='blog-portion container'>
      <BlogCard  title="Boosting Your Insurance Operations with an Insurance Chatbot" paragraph="How Al Chatbots Can Impact The Insurance Industry Watsonx Assistant's advanced Al chatbots use natural language processing (NLP) to streamline fast, accurate answers that optimize customer experiences, brought to you by the global leader in conversational Al. Insurance chatbots are virtual assistants that help support new and existing customers on their favorite digital channels. Embracing the ..." blogLink="#" />
      <hr className='horizontal-line' />
      <BlogImgCard imgUrl={blogimg1} title="Top 3 des travaux à réaliser chez soi avant l'hiver" paragraph="L'arrivée de l'hiver se fait sentir, prenez des mesures clé pour préparer votre logement à la saison froide. Découvrez les 3 travaux essentiels à réaliser avant l'arrivée de l'hiver." />
      <hr className='horizontal-line' />
      <BlogImgCard imgUrl={blogimg2} title="5 conseils après un dégât des eaux" paragraph="Le dégât des eaux est un sinistre courant causant d'importants dommages à votre habitation, touchant les plafonds, les murs, les sols, l'électricité et la plomberie. Heureusement, la plupart des assurances couvrent ce type de sinistre. Mais quels travaux entreprendre après un dégât des eaux ?" />
      <hr className='horizontal-line' />
      <BlogImgCard imgUrl={blogimg3} title="Aménagement de combles : par quoi commencer?" paragraph="Vous avez des combles dans votre maison ? Posez-vous les 8 questions clés qui vous guideront vers un aménagement optimal de vos combles." />
      <hr className='horizontal-line' />
      <BlogImgCard imgUrl={blogimg4} title="4 astuces pour rénover une vieille salle de bain" paragraph="Vous souhaitez donner un coup de frais à votre salle de bain cet été ? C'est le moment idéal pour entreprendre sa rénovation et créer un espace de détente et de bien-être chez vous." />
      <hr className='horizontal-line' />
      <BlogImgCard imgUrl={blogimg5} title="Quelles aides financières pour vos travaux de rénovation en 2023?" paragraph="Vous envisagez des travaux de rénovation intérieure pour votre logement en 2023? Découvrez les différentes aides financières auxquelles vous pouvez prétendre." />
      <hr className='horizontal-line' />
      <BlogCard title="1xbet Зеркало рабочее Ha Сегодня 1x6eт Официальный Сайт Б" paragraph='1xbet Зеркало рабочее Ha Сегодня 1x6eт Официальный Сайт Бк “1xbet Официальный Сайт Официальное Зеркало 1xbet Content Bet Альтернативное Зеркало и Сегодня Бонусы 1xbet Нужно Ли раз Раз Регистрироваться также Входе Через Зеркало? Использование Электронного Адреса E-mail дли Регистрации в 1xbet Bet И 1xstavka - Это Одинаковые Бк? Виды Бонусов Мобильные Приложения\" Актуальное Зеркало 1xbet Рабочее ...' blogLink="#" />
      <hr className='horizontal-line' />
      <BlogCard title="Casinos Online 2024: Casinos Online México Justos Y Seguro" paragraph='Casinos Online 2024: Casinos Online México Justos Y Seguros Casinos Online México Top 10 Casinos Por Peculio Real 2024 Nuestro equipo sony ericsson ha tomado el tiempo necesario para estimar puntualmente cientos sobre sitios distintos antes de recomendar mis mejor valorados a new jugadores mexicanos. Antes de apostar efectivo real en el casino puedes testear...' blogLink="#" />
      <hr className='horizontal-line' />
    </div>
  )
}

export default BlogPage