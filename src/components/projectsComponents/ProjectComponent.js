import React from 'react';
import './ProjectComponent.css';
import promoGen from '../images/promo-gen-ss.png';
import randomOrg from '../images/random-org-ss.png';
import quoteGen from '../images/quote-generator-ss.png';

function ProjectComponent() {
  return (
    <section id="projects-section">
        <h1 className="section-title">Projects</h1>
        <div className="projects">
            <div className="project promo-code">
                <div className='project-intro'>
                    <div className='cover-color'>
                        <img src={promoGen} alt="Promo Generator Demo"/>
                    </div>
                    <h2 className="project-title off-purple">Promo Code Generator</h2>
                    <p>A command line project with the purpose of generating a Promo Code and emailing it to a customers' email automatically. I made this for a business that I started years ago in order to promote organic growth.</p>
                </div>
                <div className='project-details'>
                    <h3>Technology Used:</h3>
                    <ul>
                        <li>Python</li>
                        <li>GMAIL Libraries and APIs</li>
                        <li>Text file parsing and read/writing</li>
                    </ul>
                    <h3>What I learned / Results</h3>
                    <ul>
                        <li>Any problem can be solved with programming</li>
                        <li>It made me want to keep learning</li>
                        <li>Customers loved it!</li>
                    </ul>
                    <div className="project-buttons">
                        <a href="https://youtu.be/AhK9sPZQXcU" target="_blank" rel='noreferrer'><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                </div>
            </div>

            <div className="project randomorg">
                <div className='project-intro'>
                    <div className='cover-color'>
                        <img src={randomOrg} alt="random.org clone demo" />
                    </div>
                    <h2 className="project-title off-purple">Random.org Clone</h2>
                    <p>A clone of the site, random.org. I made this because I use the original site to shuffle my spotify playlist but because the real sites' features are out of the scope, I only added the ones I use most or use the most. I made it a single page app because I wanted it to be fast and I love using React!</p>
                </div>
                <div className='project-details'>
                    <h3>Technology Used:</h3>
                    <ul>
                        <li>ReactJs</li>
                        <li>React Router v6</li>
                        <li>JavaScript</li>
                    </ul>
                    <h3>What I learned / Results</h3>
                    <ul>
                        <li>I can make any site much faster with React</li>
                        <li>It was way more responsive and produced mass lists much faster</li>
                        <li>I refined my skills in creating single page applications</li>
                    </ul>
                    <div className="project-buttons">
                        <a href="https://github.com/SWELLZ/randomorg-clone" target="_blank" rel='noreferrer'><i class="fa-brands fa-github"></i></a>
                        <a href="https://randomorg-clone.netlify.app/" target="_blank" rel='noreferrer'><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                </div>
            </div>

            <div className="project quote-generator">
                <div className='project-intro'>
                    <div className='cover-color'>
                        <img src={quoteGen} alt='quote generator demo' />
                    </div>
                    <h2 className="project-title off-purple">Quote Generator</h2>
                    <p>A simple single page site that produces a new quote along with the author every time you click 'New Quote'. The site also has the functionality to automatically post the quote and author in text format to Twitter or Tumblr by clicking the logo.</p>
                </div>
                <div className='project-details'>
                    <h3>Technology Used</h3>
                    <ul>
                        <li>ReactJs</li>
                        <li>Quotable API</li>
                    </ul>
                    <h3>What I Learned / Results</h3>
                    <ul>
                        <li>Made me more comfortable with the use of APIs</li>
                        <li>The use of Twitter / Tumblr to automatically format post</li>
                    </ul>
                    <div className="project-buttons">
                        <a href="https://github.com/SWELLZ/quote-generator" target="_blank" rel='noreferrer'><i class="fa-brands fa-github"></i></a>
                        <a href="https://quote-generator-nd.netlify.app/" target="_blank" rel='noreferrer'><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProjectComponent