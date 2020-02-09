import React, { useState, useEffect } from 'react';
import useForm from 'react-hook-form';
import ConForm from './ConForm.js';

export default function Contact() {


    return (
        <div className="contact-container">
            this is the contact page you dill-weed


            <div>
                <h1>If you have questions or Requests I have a variety of ways to get into contact with me:</h1>

                <div className="contact-info">phone number: 417-860-5629</div>
                <div className="contact-info">linkedIn: not sure yet add this link later</div>
                <ConForm />
            </div>


        </div>
    );
}