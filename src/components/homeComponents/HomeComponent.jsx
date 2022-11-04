import React from "react";

function HomeComonent() {
  return (
    <section
      className="text-center h-screen w-full m-auto bg-white-500 dark:bg-black-500 transition-all duration-300"
      id="welcome-section"
    >
      <div className="h-full w-4/5 md:w-3/5 mx-auto flex justify-center items-start flex-col text-left">
        <p className="sub-text text-lightPurple-500">Hi, my name is</p>
        <h1 className="md:text-7xl sm:text-5xl text-4xl  mt-1 dark:text-white-500 text-black-500">
          Nehemiah Dias
        </h1>
        <h1 className="md:text-6xl sm:text-4xl text-3xl text-lightOffP-500 dark:text-offP-500 mt-2 ">
          Front-End Web Developer
        </h1>
      </div>
    </section>
  );
}

export default HomeComonent;
