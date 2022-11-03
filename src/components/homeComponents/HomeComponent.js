import React from "react";

function HomeComonent() {
  return (
    <section
      className="text-center h-screen w-[60%] m-auto"
      id="welcome-section"
    >
      <div className="h-full flex justify-center items-start flex-col text-left">
        <p className="sub-text text-lightPurple-500">Hi, my name is</p>
        <h1 className="text-7xl mt-1 dark:text-white-500 text-black-500">
          Nehemiah Dias
        </h1>
        <h1 className="text-7xl text-lightOffP-500 dark:text-offP-500 mt-2 ">
          Front-End Web Developer
        </h1>
      </div>
    </section>
  );
}

export default HomeComonent;
