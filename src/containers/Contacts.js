import React from 'react';
import '../scss/styles.scss';
import '../scss/contacts.scss';
import FeedbackForm from '../components/FeedbackForm.js'
import Icons from '../components/Icons.js';

const Contacts = () => {
  return (
    <section className="page-d">
      <a name="contacts">{null}</a>
      <div className="page-d__wrapper wrapper">
      <div className="page-d__contacts contacts">
        <h2 className="contacts__head headers">Контакты</h2>
        <div className="contacts__discript">
        Вы можете связаться с нами по вопросам:
          <ul className="contacts__discript-list discript-list">
            <li className="discript-list__item">Приобретения продукции</li>
            <li className="discript-list__item">Согласования заказа на праздники и торжества</li>
            <li className="discript-list__item">Отзывы о качестве продукции</li>
          </ul>
        </div>
        <div className="contacts__icons icons">
        <a href="tel:+7(940)710-06-26>" rel="noreferrer" className="icons__link" target="_blank">
          <Icons 
          name={'phone'}
          color={'#fff'}
          size={'20px'}
          className={'icons__icon'}
          />  
            <span className="icons__discript">+7(940)710-06-26</span>
          </a>
          <a href="mailto:alenadybina@yandex.ru" rel="noreferrer" className="icons__link" target="_blank">
          <Icons 
          name={'envelope'}
          color={'#fff'}
          size={'20px'}
          className={'icons__icon'}
          />  
            <span className="icons__discript">alenadybina@yandex.ru</span>
          </a>
        <a href="https://api.whatsapp.com/send?phone=<+79407100626>"  rel="noreferrer" className="icons__link" target="_blank">
          <Icons 
          name={'whatsapp'}
          color={'#fff'}
          size={'20px'}
          className={'icons__icon'}
          />  
            <span className="icons__discript">Написать</span>
          </a>
          <a href="https://www.instagram.com/kopchenki_u_alenki/" rel="noreferrer" className="icons__link" target="_blank">
          <Icons 
          name={'instagram'}
          color={'#fff'}
          size={'20px'}
          className={'icons__icon'}
          />  
            <span className="icons__discript">Написать</span>
          </a>
        </div>
      </div>
        <div className="page-d__form">
          <FeedbackForm />
        </div>
      </div>
    </section>
  )
}

export default Contacts;