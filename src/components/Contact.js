import React, { useState, useEffect } from 'react';
import useForm from 'react-hook-form';
import ConForm from './ConForm.js';

export default function Contact() {

    // const [info, setInfo] = useState('');
    // const [mess, setMess] = useState('');
    // const handleEmailChange = event => {
    //     setInfo(event.target.value)
    //     console.log(info);
    // }
    // const handleMessageChange = event => {
    //     setMess(event.target.value)
    //     console.log(mess);
    // }

    // const handleSubmit = event => {
    //     // event.preventDefault();
    //     localStorage.setItem('theInfo', info);
    //     localStorage.setItem('message', mess);
    //     console.log('info', info);
    //     console.log('mess:', mess);
    // };

    // useEffect(() => {
    //     const theMail = localStorage.getItem('theInfo');
    //     const theMess = localStorage.getItem('message');
    //     return (res) => {
    //         return res
    //     };
    // }, []);

    return (
        <div className="contact-container">
            this is the contact page you dill-weed


            <div>
                <h1>If you have questions or Requests I have a variety of ways to get into contact with me:</h1>

                <div className="contact-info">phone number: 417-860-5629</div>
                <div className="contact-info">linkedIn: not sure yet add this link later</div>
                <ConForm />
                {/* <fieldset>
                    <form onSubmit={event => handleSubmit(event)}>
                        <input type='text' placeholder="Email" name="email" onChange={event => handleEmailChange(event)} />
                        <input type="textarea" placeholder="message" name="message" onChange={event => handleMessageChange(event)} />
                        <input type="submit" />
                    </form>
                    <div>email: {localStorage.getItem('theInfo')}</div>
                    <div>message: {localStorage.getItem('message')}</div>
                </fieldset> */}
            </div>


        </div>
    );
}