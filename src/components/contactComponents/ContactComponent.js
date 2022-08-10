import React from 'react';
import './ContactComponent.css';

function ContactComponent() {
  return (
    <section id='contact-section'>
        <h1 className='section-title'>Contact Me</h1>
        <div className='contact-buttons'>
            <button><i class="fa-solid fa-envelope"></i> Email</button>
            <button><i class="fa-brands fa-github"></i> Github</button>
            <button><i class="fa-brands fa-linkedin"></i> LinkedIn</button>
        </div>
    </section>
  )
}

export default ContactComponent