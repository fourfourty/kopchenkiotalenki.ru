import React from 'react';
import '../scss/about.scss';
import '../scss/styles.scss';
import FlagImg from '../img/abk.jpg';

const About = () => {
  return (
    <section className="page-c">
      <a name="about">{null}</a>
      <div className="page-c__wrapper wrapper">
        <div className="page-c__about">
          <div className="page-c__discript">
          <img className="page-c__logo-circle" src={FlagImg} alt="img"></img>
            <p className="page-c__paragraph">
              Мы&nbsp;проживаем в&nbsp;Республике Абхазия в&nbsp;городе Сухум. Производим нашу продукцию из&nbsp;экологически
              чистого мяса выращенного собственными руками, а&nbsp;так&nbsp;же купленного у&nbsp;наших партнёрских ферм.
              Имеем опыт работы и&nbsp;знания в&nbsp;области технологии производства и&nbsp;изготовления продуктов из&nbsp;мяса и&nbsp;птицы.
              С&nbsp;качеством наших продуктов знакома уже вся Абхазия и&nbsp;районы Краснодарского края.
              При изготовлении мы&nbsp;используем только свежее мясо, приправы и&nbsp;конечно&nbsp;же чистую, 
              горную воду, которую заботливо дарит нам наша солнечная республика. 
              Никаких консервантов, гмо, усилителей вкуса. Только чистое МЯСО!
              Спешите попробовать сами. 
              Так-же у&nbsp;нас есть собственная небольшая ферма, на&nbsp;которой мы&nbsp;выращиваем наше мясо и&nbsp;поросят,
              для того, чтобы максимально контролировать процесс производства и&nbsp;качества.
            </p>
        </div>
        </div>
      </div>
    </section>
  )
}

export default About;