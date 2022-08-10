import React from 'react';
import './AboutComponent.css';

function AboutComponent() {
  return (
    <section id="about-me">
        <h1 className="section-title">About Me</h1>
        <p>Hi, I am a self taught Front End Developer. So far, I have created projects to solve everyday problems that I have and I have been contributing to open source projects. Through my self taught journey, I have fallen in love with ReactJs, Redux, JavaScript, and Web Developing in general! I have been programming since I was around nine years old starting with Python and eventually tried Web Development; I instantly knew that it was the career path for me! Although self taught is not conventional route, I did take a 6-month course at CodeCademy and completed the Front-End Development path at freeCodeCamp. With that, I have been motivated and dedicated for over half my life to being a Web Developer and I wont stop there!</p>
        <section id="skills">
          <h1 className='section-title'>Skills</h1>
          <div className='skill-tab'>
            <div className='skill'>
              <i class="fa-brands fa-square-js"></i>
              <p>JavaScript</p>
            </div>
            <div className='skill'>
              <i class="fa-brands fa-html5"></i>
              <p>HTML5</p>
            </div>
            <div className='skill'>
              <i class="fa-brands fa-css3-alt"></i>
              <p>CSS6</p>
            </div>
            <div className='skill'>
              <i class="fa-brands fa-python"></i>
              <p>Python</p>
            </div>
            <div className='skill'>
              <i class="fa-brands fa-react"></i>
              <p>ReactJs</p>
            </div>
            <div className='skill'>
              <i class="fa-brands fa-git-alt"></i>
              <p>Git</p>
            </div>
            <div className='skill'>
              <i class="fa-brands fa-github"></i>
              <p>Github</p>
            </div>
          </div>
        </section>
    </section>
  )
}

export default AboutComponent