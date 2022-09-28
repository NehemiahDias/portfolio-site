import React, { useContext } from 'react';
import './ProjectComponent.css';
import { ThemeContext } from '../MainComponent';

function ProjectComponent() {
    const { theme } = useContext(ThemeContext);

    const projectStyle = {
        common: {
            transition: 'all 1s ease'
        }
    }

    const themeStyle = {
        ...projectStyle.common,
    }

    return (
        <section id="projects-section" style={themeStyle} className={theme === 'dark' ? 'dark' : 'light'}>
            <h1 className="section-title">Projects</h1>
            <div className="projects">

                <div className="project thedeck">
                    <div className='project-intro'>
                        <div className='cover-color'>
                        </div>
                        <h2 className="project-title off-purple">The Deck - Study help</h2>
                        <p>A site originally made for my girlfriend to help her study. This was a solo project where I did the design, sourced color palette, and of course, coded alone. This site is supposed to be a version of Quizlet without the annoying sign in popups and more snappy functionality.</p>
                    </div>
                    <div className='project-details'>
                        <h3>Technology Used</h3>
                        <ul>
                            <li>ReactJs</li>
                            <li>React Router v6</li>
                            <li>localStorage</li>
                        </ul>
                        <h3>What I learned / Results</h3>
                        <ul>
                            <li>The more I work, the more I realize how snappy react is</li>
                            <li>I learned how to really take advantage of localStorage</li>
                            <li>The results were great, I loved the design and the flow of the site.</li>
                        </ul>
                        <div className="project-buttons">
                            <a href="https://github.com/SWELLZ/flashcard" target="_blank" rel='noreferrer'><i class="fa-brands fa-github"></i></a>
                            <a href="https://thedeck.netlify.app/" target="_blank" rel='noreferrer'><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                        </div>
                    </div>
                </div>

                <div className='project bgmcguire'>
                    <div className='project-intro'>
                        <div className='cover-color'>
                        </div>
                        <h2 className='project-title off-purple'>BG McGuire Contruction</h2>
                        <p>A static web page I was hired to create for BG McGuire Construction Co. He wanted to completely re-create his site because his old one was dated and not mobile responsive. Because of that, there was no need for bells and wistles so I only used HTML and CSS</p>
                    </div>
                    <div className='project-details'>
                        <h3>Technology Used</h3>
                        <ul>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>JavaScript</li>
                        </ul>
                        <h3>What I learned / Results</h3>
                        <ul>
                            <li>My skills can be applied and be useful for others</li>
                            <li>Sometimes it's best to not overcomplicate every project</li>
                        </ul>
                        <div className="project-buttons">
                            <a href="https://github.com/SWELLZ/bgmcguire" target="_blank" rel='noreferrer'><i class="fa-brands fa-github"></i></a>
                            <a href="https://bgmcguire.netlify.app/" target="_blank" rel='noreferrer'><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                        </div>
                    </div>
                </div>

                {/* <div className="project randomorg">
                    <div className='project-intro'>
                        <div className='cover-color'>
                            <img src={randomOrg} alt="random.org clone demo" />
                        </div>
                        <h2 className="project-title off-purple">Random.org Clone (WIP)</h2>
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
                </div> */}

                <div className="project cmluxury">
                    <div className='project-intro'>
                        <div className='cover-color'>
                        </div>
                        <h2 className="project-title off-purple">CM Luxury Hair</h2>
                        <p>A static single page site I created for my girlfriend's new career of cosmetology. I made it to keep her motivated so as of now, there is no functionality but it is still mobile friendly and styled to her aesthetic.</p>
                    </div>
                    <div className='project-details'>
                        <h3>Technology Used</h3>
                        <ul>
                            <li>HTML5</li>
                            <li>CSS3</li>
                        </ul>
                        <h3>What I Learned / Results</h3>
                        <ul>
                            <li>It was one of my first sites so it taught me a lot about design</li>
                            <li>She got excited and more motivated</li>
                        </ul>
                        <div className="project-buttons">
                            <a href="https://github.com/SWELLZ/CM-Luxury" target="_blank" rel='noreferrer'><i class="fa-brands fa-github"></i></a>
                            <a href="https://cmluxury.netlify.app/" target="_blank" rel='noreferrer'><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                        </div>
                    </div>
                </div>

                <div className="project quote-generator">
                    <div className='project-intro'>
                        <div className='cover-color'>
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

                <div className="project promo-code">
                    <div className='project-intro'>
                        <div className='cover-color'>
                        </div>
                        <h2 className="project-title off-purple">Promo Code Generator</h2>
                        <p>A command line project with the purpose of generating a Promo Code and emailing it to a customers' email automatically. I made this for a business that I started years ago in order to promote organic growth.</p>
                    </div>
                    <div className='project-details'>
                        <h3>Technology Used</h3>
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
            </div>
        </section>
    )
}

export default ProjectComponent