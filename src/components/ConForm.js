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
    }, []);

    return (
        <fieldset>
            <form onSubmit={event => handleSubmit(event)}>
                <input className="ls-result email" type='text' placeholder="Email" name="email" onChange={event => handleEmailChange(event)} />
                <input className="ls-result  message" type="textarea" placeholder="Message" name="message" onChange={event => handleMessageChange(event)} />
                <input className="ls-result sButton" type="submit" />
            </form>
            {!localStorage.getItem('theInfo') && !localStorage.getItem('message') ?
                <div>Submit An Email & Message. See It On The Screen to see what was saved...</div>
                :
                <>
                    <div className="ls-result">email: {localStorage.getItem('theInfo')}</div>
                    <div className="ls-result">message: {localStorage.getItem('message')}</div>
                </>
            }
        </fieldset>

    )
}