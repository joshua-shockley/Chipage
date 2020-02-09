import React, { useState, useEffect } from 'react';


export default function ConForm() {
    const [info, setInfo] = useState('');
    const [mess, setMess] = useState('');
    const handleEmailChange = event => {
        setInfo(event.target.value)
        console.log(info);
    }
    const handleMessageChange = event => {
        setMess(event.target.value)
        console.log(mess);
    }

    const handleSubmit = event => {
        // event.preventDefault();
        localStorage.setItem('theInfo', info);
        localStorage.setItem('message', mess);
        console.log('info', info);
        console.log('mess:', mess);
    };

    useEffect(() => {
        const theMail = localStorage.getItem('theInfo');
        const theMess = localStorage.getItem('message');
        return (res) => {
            return res
        };
    }, []);
    return (
        <fieldset>
            <form onSubmit={event => handleSubmit(event)}>
                <input type='text' placeholder="Email" name="email" onChange={event => handleEmailChange(event)} />
                <input type="textarea" placeholder="message" name="message" onChange={event => handleMessageChange(event)} />
                <input type="submit" />
            </form>
            <div>email: {localStorage.getItem('theInfo')}</div>
            <div>message: {localStorage.getItem('message')}</div>
        </fieldset>

    )
}