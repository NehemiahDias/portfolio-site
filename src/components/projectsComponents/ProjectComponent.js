import React from "react";
import "./ProjectComponent.css";

function ProjectComponent() {
  return (
    <section
      className="bg-white-500 dark:bg-black-500 text-black-500 dark:text-white-500 w-full pb-[100px] m-auto transition-all duration-300"
      id="projects"
    >
      <div className="md:w-3/5 w-4/5 m-auto">
        <h1 className="section-title font-bold">Projects</h1>
        <div className="w-full flex flex-wrap gap-[10px] justify-evenly">
          <div className="w-[400px] z-10 sm:text-xs bg-[#272533] p-5 flex flex-col rounded-md text-white-500 text-[0.6rem] stay-lucid">
            <div className="project-intro">
              <div className="h-[200px] w-full rounded-sm bg-lightPurple-500 bg-no-repeat bg-cover cover-color"></div>
              <h2 className="text-offP-500 my-[15px] text-center text-lg sm:text-xl font-bold">
                Stay Lucid
              </h2>
              <p>
                A lucid dream assistant site with a social media aspect named
                the Dream Forum. The user is given the ability to create dreams
                and upload them to the dream forum if they choose. The user can
                also add 'tags' to their dream so they can easily differentiate
                between each dream. In the Dream Forum, other users can like
                posts that are accumulated and updated on the posters' profile
                page. On that profile page, the user can change their username
                and profile picture.
              </p>
            </div>
            <div className="h-full mt-[10px] flex flex-col justify-evenly">
              <h3 className="text-center text-base sm:text-lg font-bold">Technology Used</h3>
              <ul className="my-5">
                <li className="py-[5px] pl-[10px] pr-[5px] list-item">
                  ReactJS
                </li>
                <li className="py-[5px] pl-[10px] pr-[5px] list-item">
                  Firebase Realtime Database
                </li>
                <li className="py-[5px] pl-[10px] pr-[5px] list-item">
                  Firebase Authentication
                </li>
                <li className="py-[5px] pl-[10px] pr-[5px] list-item">
                  Firebase Storage
                </li>
                <li className="py-[5px] pl-[10px] pr-[5px] list-item">
                  React Router
                </li>
                <li className="py-[5px] pl-[10px] pr-[5px] list-item">CSS3</li>
              </ul>
              <h3 className="text-center text-base sm:text-lg font-bold">
                What I learned / Results
              </h3>
              <ul className="my-5">
                <li className="py-[5px] pl-[10px] pr-[5px] list-item">
                  I learned a lot about Firebase
                </li>
                <li className="py-[5px] pl-[10px] pr-[5px] list-item">
                  I learned social media is much easier than it looks
                </li>
                <li className="py-[5px] pl-[10px] pr-[5px] list-item">
                  The features are very snappy and the design is clean
                </li>
              </ul>
              <div className="w-full p-[10px] flex justify-evenly">
                <a
                  href="https://github.com/SWELLZ/lucid-dream"
                  target="_blank"
                  className="text-white-500 text-[30px] transition-all hover:text-lightPurple-500"
                  rel="noreferrer"
                >
                  <i class="fa-brands fa-github"></i>
                </a>
                <a
                  href="https://staylucid.netlify.app/"
                  target="_blank"
                  className="text-white-500 text-[30px] transition-all hover:text-lightPurple-500"
                  rel="noreferrer"
                >
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="w-[400px] z-10 sm:text-xs bg-[#272533] p-5 flex flex-col rounded-md text-white-500 text-[0.6rem] thedeck">
            <div className="project-intro">
              <div className="h-[200px] w-full rounded-sm bg-lightPurple-500 bg-no-repeat bg-cover cover-color"></div>
              <h2 className="text-offP-500 my-[15px] text-center text-lg sm:text-xl font-bold">
                The Deck - Study help
              </h2>
              <p>
                A site made for a client that uses User Authentication and
                Realtime Databases to help them study using flashcards. This was
                a solo project where I did the design, sourced color palette,
                and coding. This site requires an account to create 'Decks' of
                flashcards which you can make with an email or you can sign up
                with Google.
              </p>
            </div>
            <div className="h-full mt-[10px] flex flex-col justify-evenly">
              <h3 className="text-center text-base sm:text-lg font-bold">Technology Used</h3>
              <ul className="my-5">
                <li className="py-[5px] pl-[10px] pr-[5px] list-item">
                  ReactJs
                </li>
                <li className="py-[5px] pl-[10px] pr-[5px] list-item">
                  Firebase Realtime Database
                </li>
                <li className="py-[5px] pl-[10px] pr-[5px] list-item">
                  Firebase Authentication
                </li>
                <li className="py-[5px] pl-[10px] pr-[5px] list-item">
                  React Router v6
                </li>
                <li className="py-[5px] pl-[10px] pr-[5px] list-item">
                  localStorage
                </li>
                <li className="py-[5px] pl-[10px] pr-[5px] list-item">CSS3</li>
              </ul>
              <h3 className="text-center text-base sm:text-lg font-bold">
                What I learned / Results
              </h3>
              <ul className="my-5">
                <li className="py-[5px] pl-[10px] pr-[5px] list-item">
                  I learned how to take advantage of Firebase's services
                </li>
                <li className="py-[5px] pl-[10px] pr-[5px] list-item">
                  I learned how to really take advantage of localStorage
                </li>
                <li className="py-[5px] pl-[10px] pr-[5px] list-item">
                  The results were great, I loved the design and the flow of the
                  site.
                </li>
              </ul>
              <div className="w-full p-[10px] flex justify-evenly">
                <a
                  href="https://github.com/SWELLZ/flashcard"
                  target="_blank"
                  className="text-white-500 text-[30px] transition-all hover:text-lightPurple-500"
                  rel="noreferrer"
                >
                  <i class="fa-brands fa-github"></i>
                </a>
                <a
                  href="https://thedeck.netlify.app/"
                  target="_blank"
                  className="text-white-500 text-[30px] transition-all hover:text-lightPurple-500"
                  rel="noreferrer"
                >
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="w-[400px] z-10 sm:text-xs bg-[#272533] p-5 flex flex-col rounded-md text-white-500 text-[0.6rem] bgmcguire">
            <div className="project-intro">
              <div className="h-[200px] w-full rounded-sm bg-lightPurple-500 bg-no-repeat bg-cover cover-color"></div>
              <h2 className="text-offP-500 my-[15px] text-center text-lg sm:text-xl font-bold">
                BG McGuire Contruction
              </h2>
              <p>
                A static web page I was hired to create for BG McGuire
                Construction Co. He wanted to completely re-create his site
                because his old one was dated and not mobile responsive. Because
                of that, there was no need for bells and wistles so I only used
                HTML and CSS
              </p>
            </div>
            <div className="h-full mt-[10px] flex flex-col justify-evenly">
              <h3 className="text-center text-base sm:text-lg font-bold">Technology Used</h3>
              <ul className="my-5">
                <li className="py-[5px] pl-[10px] pr-[5px] list-item">HTML5</li>
                <li className="py-[5px] pl-[10px] pr-[5px] list-item">CSS3</li>
                <li className="py-[5px] pl-[10px] pr-[5px] list-item">
                  JavaScript
                </li>
              </ul>
              <h3 className="text-center text-base sm:text-lg font-bold">
                What I learned / Results
              </h3>
              <ul className="my-5">
                <li className="py-[5px] pl-[10px] pr-[5px] list-item">
                  My skills can be applied and be useful for others
                </li>
                <li className="py-[5px] pl-[10px] pr-[5px] list-item">
                  Sometimes it's best to not overcomplicate every project
                </li>
              </ul>
              <div className="w-full p-[10px] flex justify-evenly">
                <a
                  href="https://github.com/SWELLZ/bgmcguire"
                  target="_blank"
                  className="text-white-500 text-[30px] transition-all hover:text-lightPurple-500"
                  rel="noreferrer"
                >
                  <i class="fa-brands fa-github"></i>
                </a>
                <a
                  href="https://bgmcguire.netlify.app/"
                  target="_blank"
                  className="text-white-500 text-[30px] transition-all hover:text-lightPurple-500"
                  rel="noreferrer"
                >
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="w-[400px] z-10 sm:text-xs bg-[#272533] p-5 flex flex-col rounded-md text-white-500 text-[0.6rem] shuffle">
            <div className="project-intro">
              <div className="h-[200px] w-full rounded-sm bg-lightPurple-500 bg-no-repeat bg-cover cover-color"></div>
              <h2 className="text-offP-500 my-[15px] text-center text-lg sm:text-xl font-bold">
                Shuffle For Spotify
              </h2>
              <p>
                A site that utilizes the Spotify API, React, and Tailwind. It
                prompts the user to sign in and receive an access token to
                access the API. When the user clicks on one of their playlists,
                it will display a Shuffle, Confirm, and Cancel button along with
                all the songs in a list view. They can Shuffle until satisfied
                with the random order and then click Confirm to translate those
                changes to Spotify using their API, promoting a seamless and
                quick rearranging of their playlists.
              </p>
            </div>
            <div className="h-full mt-[10px] flex flex-col justify-evenly">
              <h3 className="text-center text-base sm:text-lg font-bold">Technology Used</h3>
              <ul className="my-5">
                <li className="py-[5px] pl-[10px] pr-[5px] list-item">
                  ReactJs
                </li>
                <li className="py-[5px] pl-[10px] pr-[5px] list-item">
                  Spotify API
                </li>
                <li className="py-[5px] pl-[10px] pr-[5px] list-item">
                  Tailwind CSS
                </li>
                <li className="py-[5px] pl-[10px] pr-[5px] list-item">
                  React Router
                </li>
              </ul>
              <h3 className="text-center text-base sm:text-lg font-bold">
                What I Learned / Results
              </h3>
              <ul className="my-5">
                <li className="py-[5px] pl-[10px] pr-[5px] list-item">
                  Allowed me to use different Methods with the Fetch API
                </li>
                <li className="py-[5px] pl-[10px] pr-[5px] list-item">
                  I learned how to use the Spotify API which gave me a ton of
                  data
                </li>
                <li className="py-[5px] pl-[10px] pr-[5px] list-item">
                  I saw the power and ease of use of Tailwind CSS
                </li>
              </ul>
              <div className="w-full p-[10px] flex justify-evenly">
                <a
                  href="https://github.com/SWELLZ/spotify-shuffle"
                  target="_blank"
                  className="text-white-500 text-[30px] transition-all hover:text-lightPurple-500"
                  rel="noreferrer"
                >
                  <i class="fa-brands fa-github"></i>
                </a>
                <a
                  href="https://shuffleforspotify.netlify.app/"
                  target="_blank"
                  className="text-white-500 text-[30px] transition-all hover:text-lightPurple-500"
                  rel="noreferrer"
                >
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="w-[400px] z-10 sm:text-xs bg-[#272533] p-5 flex flex-col rounded-md text-white-500 text-[0.6rem] cmluxury">
            <div className="project-intro">
              <div className="h-[200px] w-full rounded-sm bg-lightPurple-500 bg-no-repeat bg-cover cover-color"></div>
              <h2 className="text-offP-500 my-[15px] text-center text-lg sm:text-xl font-bold">
                CM Luxury Hair
              </h2>
              <p>
                A static single page site I created for my girlfriend's new
                career of cosmetology. I made it to keep her motivated so as of
                now, there is no functionality but it is still mobile friendly
                and styled to her aesthetic.
              </p>
            </div>
            <div className="h-full mt-[10px] flex flex-col justify-evenly">
              <h3 className="text-center text-base sm:text-lg font-bold">Technology Used</h3>
              <ul className="my-5">
                <li className="py-[5px] pl-[10px] pr-[5px] list-item">HTML5</li>
                <li className="py-[5px] pl-[10px] pr-[5px] list-item">CSS3</li>
              </ul>
              <h3 className="text-center text-base sm:text-lg font-bold">
                What I Learned / Results
              </h3>
              <ul className="my-5">
                <li className="py-[5px] pl-[10px] pr-[5px] list-item">
                  It was one of my first sites so it taught me a lot about
                  design
                </li>
                <li className="py-[5px] pl-[10px] pr-[5px] list-item">
                  She got excited and more motivated
                </li>
              </ul>
              <div className="w-full p-[10px] flex justify-evenly">
                <a
                  href="https://github.com/SWELLZ/CM-Luxury"
                  target="_blank"
                  className="text-white-500 text-[30px] transition-all hover:text-lightPurple-500"
                  rel="noreferrer"
                >
                  <i class="fa-brands fa-github"></i>
                </a>
                <a
                  href="https://cmluxury.netlify.app/"
                  target="_blank"
                  className="text-white-500 text-[30px] transition-all hover:text-lightPurple-500"
                  rel="noreferrer"
                >
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="w-[400px] z-10 sm:text-xs bg-[#272533] p-5 flex flex-col rounded-md text-white-500 text-[0.6rem] quote-generator">
            <div className="project-intro">
              <div className="h-[200px] w-full rounded-sm bg-lightPurple-500 bg-no-repeat bg-cover cover-color"></div>
              <h2 className="text-offP-500 my-[15px] text-center text-lg sm:text-xl font-bold">
                Quote Generator
              </h2>
              <p>
                A simple single page site that produces a new quote along with
                the author every time you click 'New Quote'. The site also has
                the functionality to automatically post the quote and author in
                text format to Twitter or Tumblr by clicking the logo.
              </p>
            </div>
            <div className="h-full mt-[10px] flex flex-col justify-evenly">
              <h3 className="text-center text-base sm:text-lg font-bold">Technology Used</h3>
              <ul className="my-5">
                <li className="py-[5px] pl-[10px] pr-[5px] list-item">
                  ReactJs
                </li>
                <li className="py-[5px] pl-[10px] pr-[5px] list-item">
                  Quotable API
                </li>
              </ul>
              <h3 className="text-center text-base sm:text-lg font-bold">
                What I Learned / Results
              </h3>
              <ul className="my-5">
                <li className="py-[5px] pl-[10px] pr-[5px] list-item">
                  Made me more comfortable with the use of APIs
                </li>
                <li className="py-[5px] pl-[10px] pr-[5px] list-item">
                  The use of Twitter / Tumblr to automatically format post
                </li>
              </ul>
              <div className="w-full p-[10px] flex justify-evenly">
                <a
                  href="https://github.com/SWELLZ/quote-generator"
                  target="_blank"
                  className="text-white-500 text-[30px] transition-all hover:text-lightPurple-500"
                  rel="noreferrer"
                >
                  <i class="fa-brands fa-github"></i>
                </a>
                <a
                  href="https://quote-generator-nd.netlify.app/"
                  target="_blank"
                  className="text-white-500 text-[30px] transition-all hover:text-lightPurple-500"
                  rel="noreferrer"
                >
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectComponent;
