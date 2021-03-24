import * as React from 'react';
import JQuery from 'jquery';
import FeedbackForm from './FeedbackForm.js';


const SendData = ( { name,email,subj,text } ) => {
    const payload = {
        name,
        email,
        subject: subj,
        subjectText :text,
    }

    const apiUrl = 'http://kopchenkiotalenki.ru/mail%20.php';

    JQuery.ajax({
        type: 'POST',
        url: apiUrl,
        data: payload,
        success: function(data) {
            return <FeedbackForm status={true}/>
        },
        error:  function(){
            alert('Ошибка!');
        }
    });


    // const options = {
    //     method: 'POST',
    //     headers: { 'content-type': 'application/x-www-form-urlencoded' },
    //     data: JSON.stringify(payload),
    //     apiUrl,
    //   };
    //   axios(options).then(resp => console.log(resp));
}


export default SendData;