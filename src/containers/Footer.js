import React from 'react';
import '../scss/footer.scss';
import '../scss/styles.scss';


const Footer = () => {
  return (
    <section className="page-e">
      <div className="page-e__wrapper wrapper">
        <div className="page-e__footer">
            <div className="page-e__right">
              <span className="page-e__right-icon">
              © Права защищены ,2021
              </span>
            </div>
            <div className="page-e__made made">
              <a className="made__link" href="http://fourtyfour.ru" target="_blank" rel="noreferrer">
              <span className="made__author">Made by fourtyfour</span>
              </a>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Footer;