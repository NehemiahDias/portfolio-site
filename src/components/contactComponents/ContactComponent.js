import React, { useContext } from 'react';
import { ThemeContext } from '../MainComponent';
import './ContactComponent.css';

function ContactComponent() {
  const {theme} = useContext(ThemeContext);
  const contactStyle = {
    common: {
      transition: 'all 1s ease'
    }
  }

  const themeStyle = {
    ...contactStyle.common,
  }

  return (
    <section id='contact-section' style={themeStyle} className={theme === 'dark' ? 'dark' : 'light'}>
        <h1 className='section-title'>Contact Me</h1>
        <div className='contact-buttons'>
            <a href='mailto:nehemiahdias@gmail.com' rel='noreferrer' target='_blank'><button><i class="fa-solid fa-envelope"></i> Email</button></a>
            <a href='https://github.com/SWELLZ' rel='noreferrer' target='_blank'><button><i class="fa-brands fa-github"></i> Github</button></a>
            <a href='https://www.linkedin.com/in/nehemiah-dias-2504a61a1/' rel='noreferrer' target='_blank'><button><i class="fa-brands fa-linkedin"></i> LinkedIn</button></a>
        </div>
        <form name='contact-form' method='POST' data-netlify='true' onSubmit='submit' netlify>
          <input type='hidden' name='form-name' value='contact-form' />
          <div className='input-field'>
            <p>Name</p>
            <input type='text' name='name' required/>
          </div>
          <div className='input-field'>
            <p>Email</p>
            <input type='email' name='email' required/>
          </div>
          <div className='input-field'>
            <p>Any Comments?</p>
            <textarea name='comments' required></textarea>
          </div>

          <button type='submit'>Submit</button>
        </form>
    </section>
  )
}

export default ContactComponent