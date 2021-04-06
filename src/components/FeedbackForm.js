import * as React from 'react';
import {useState,useEffect} from 'react';
import '../scss/styles.scss';
import '../scss/contacts.scss';
import SendData  from './SendData';

const FeedbackForm = () => {

  let [name , setName] = useState('');
  let [email , setEmail] = useState('');
  let [subj , setSubj] = useState('');
  let [text , setText] = useState('');
  let [btnText , setBtnText] = useState(false);

  useEffect(() => {
    setTimeout( () => {
      setBtnText(btnText = false);
    },3000)
  }, [btnText])

  return (
    <form 
    className="page-d__feedback-body feedback-form"
    action="mail.php"
    method="post"
    id="form"
    autoComplete="off"
    onSubmit={(event) => {
      event.preventDefault();
      event.target.reset();
      SendData( { name,email,subj,text })
      setBtnText(btnText = true);
      }}
    >
      <h3 className="feedback-form__head headers">Связаться с нами</h3>
      <div className="feedback-form__contacts">
        <input 
        className="feedback-form__contacts-name" 
        type="text"
        placeholder="Как к вам обращаться:"
        name="name"
        minLength="3"
        maxLength="30"
        pattern="^[^\s][a-zA-ZА-Яа-я\s]+$"
        title="Допускаются только буквы"
        required
        onChange={event => setName(name = event.target.value)}
        />
        <input 
        className="feedback-form__contacts-email" 
        type="email"
        placeholder="Ваша почта:"
        name="email"
        title="Буквы английского алфавита: example@.com"
        required
        onChange={event => setEmail(email = event.target.value)}
        />
      </div>
      <div className="feedback-form__subject">
        <input 
        className="feedback-form__subject-input" 
        type="text"
        placeholder="Тема:"
        name="subject"
        minLength="3"
        maxLength="50"
        title="Введите тему"
        required
        pattern="^[^\s][a-zA-ZА-Яа-я\s]+$"
        onChange={event => setSubj(subj = event.target.value)}
        />
        <textarea 
        className="feedback-form__subject-textarea" 
        type="text"
        placeholder="Текст:"
        name="subject-body"
        required
        title="Введите текст"
        minLength="5"
        maxLength="150"
        onChange={event => setText(text = event.target.value)}
        ></textarea>
      </div>
      <div className="feedback-form__submit">
        <input className={!btnText ? "feedback-form__submit-btn" : "feedback-form__submit-btn send"} 
        value={!btnText ? 'Отправить' : 'Отправлено'} 
        type="submit"/>
      </div>
    </form>
  )
}

export default FeedbackForm;