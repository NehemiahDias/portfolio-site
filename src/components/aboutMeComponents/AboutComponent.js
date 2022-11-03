import React from "react";
import "./AboutComponent.css";

function AboutComponent() {
  return (
    <section id="about-me" className="w-[60%] pb-[100px] m-auto">
      <h1 className="section-title pb-[50px]">About Me</h1>
      <p className="text-center leading-8">
        Hi, I am a self taught Front End Developer. So far, I have created
        projects to solve everyday problems that I have and I have been
        contributing to open source projects. Through my self taught journey, I
        have fallen in love with ReactJs, Redux, JavaScript, and Web Development
        in general! I have been programming since I was around nine years old
        starting with Python and eventually tried Web Development; I instantly
        knew that it was the career path for me! Although self taught is not
        conventional route, I did take a 6-month course at CodeCademy and
        completed the Front-End Development path at freeCodeCamp. With that, I
        have been motivated and dedicated for over half my life to being a Web
        Developer and I wont stop there!
      </p>
      <section id="skills">
        <h2 className="text-[2rem] text-center my-[50px] mx-0">Skills</h2>
        <div className="flex justify-evenly text-center flex-wrap gap-5">
          <div className="skill">
            <i className="fa-brands fa-square-js text-[50px] mb-3"></i>
            <p className="sub-text">JavaScript</p>
          </div>
          <div className="skill">
            <i className="fa-brands fa-html5 text-[50px] mb-3"></i>
            <p className="sub-text">HTML5</p>
          </div>
          <div className="skill">
            <i className="fa-brands fa-css3-alt text-[50px] mb-3"></i>
            <p className="sub-text">CSS6</p>
          </div>
          <div className="skill">
            <i className="fa-brands fa-python text-[50px] mb-3"></i>
            <p className="sub-text">Python</p>
          </div>
          <div className="skill">
            <i className="fa-brands fa-react text-[50px] mb-3"></i>
            <p className="sub-text">ReactJs</p>
          </div>
          <div className="skill">
            <i className="fa-brands fa-git-alt text-[50px] mb-3"></i>
            <p className="sub-text">Git</p>
          </div>
          <div className="skill">
            <i className="fa-brands fa-github text-[50px] mb-3"></i>
            <p className="sub-text">Github</p>
          </div>
        </div>
      </section>
    </section>
  );
}

export default AboutComponent;
