import React, { useContext } from "react";
import { ThemeContext } from "../MainComponent";
import "./ContactComponent.css";

function ContactComponent() {
  const { theme } = useContext(ThemeContext);
  const contactStyle = {
    common: {
      transition: "all 1s ease",
    },
  };

  const themeStyle = {
    ...contactStyle.common,
  };

  return (
    <section
      id="contact-section"
      className={
        theme === "dark"
          ? "dark pb-[100px] m-auto text-black-500 dark:text-white-500 bg-white-500 dark:bg-black-500 w-full transition-all duration-300"
          : "light w-full pb-[100px] m-auto text-black-500 dark:text-white-500 bg-white-500 dark:bg-black-500 transition-all duration-300"
      }
    >
      <div className="w-[60%] m-auto">
      <h1 className="section-title">Contact Me</h1>
      <div className="contact-buttons flex justify-center gap-[10px] flex-wrap">
        <a
          className="w-full m-auto flex no-underline"
          href="mailto:nehemiahdias@gmail.com"
          rel="noreferrer"
          target="_blank"
        >
          <button
            className="w-3/5 h-[50px] hover:bg-[#FAF8FF] hover:text-black-500 hover:cursor-pointer dark:bg-black-500 bg-white-500 text-black-500 dark:text-white-500 rounded-sm border-2 border-[#ACA7CB] m-auto relative text-2xl"
          >
            <i className="fa-solid fa-envelope absolute left-[10px] top-0 bottom-0 my-auto h-fit mx-0"></i>{" "}
            Email
          </button>
        </a>
        <a
          className="w-full m-auto flex no-underline"
          href="https://github.com/SWELLZ"
          rel="noreferrer"
          target="_blank"
        >
          <button
            className="w-3/5 h-[50px] hover:bg-[#FAF8FF] hover:text-black-500 hover:cursor-pointer dark:bg-black-500 bg-white-500 text-black-500 dark:text-white-500 rounded border-2 border-[#ACA7CB] m-auto relative text-2xl"
          >
            <i className="fa-brands fa-github absolute left-[10px] top-0 bottom-0 my-auto h-fit mx-0"></i>{" "}
            Github
          </button>
        </a>
        <a
          className="w-full m-auto flex no-underline"
          href="https://www.linkedin.com/in/nehemiah-dias-2504a61a1/"
          rel="noreferrer"
          target="_blank"
        >
          <button
            className="w-3/5 h-[50px] hover:bg-[#FAF8FF] hover:text-black-500 hover:cursor-pointer dark:bg-black-500 bg-white-500 text-black-500 dark:text-white-500 rounded-sm border-2 border-[#ACA7CB] m-auto relative text-2xl"
          >
            <i className="fa-brands fa-linkedin absolute left-[10px] top-0 bottom-0 my-auto h-fit mx-0"></i>{" "}
            LinkedIn
          </button>
        </a>
      </div>
      <form
        name="contact-form"
        className="block m-auto w-3/5 pt-[70px]"
        method="POST"
        data-netlify="true"
        onSubmit="submit"
        netlify
      >
        <input
          type="hidden"
          name="form-name"
          value="contact-form"
        />
        <div className="block">
          <p className="mb-[5px] text-xl">Name</p>
          <input
            className="mb-[20px] rounded-sm p-1 h-[40px] w-full dark:bg-textFieldBg-500 dark:text-offP-500 text-xl border-2 bg-[#faf8ff] dark:border-textFieldBg-500 text-black-500 border-[#BCBCBC] focus:border-lightPurple-500 outline-none"
            type="text"
            name="name"
            required
          />
        </div>
        <div className="block">
          <p className="mb-[5px] text-xl">Email</p>
          <input
            className="mb-[20px] rounded-sm p-1 h-[40px] w-full dark:bg-textFieldBg-500 dark:text-offP-500 text-xl border-2 dark:border-textFieldBg-500 bg-[#faf8ff] text-black-500 border-[#BCBCBC] focus:border-lightPurple-500 outline-none"
            type="email"
            name="email"
            required
          />
        </div>
        <div className="block">
          <p className="mb-[5px] text-xl">Any Comments?</p>
          <textarea
            className="rounded-sm p-1 h-[70px] w-full dark:bg-textFieldBg-500 dark:text-offP-500 text-xl border-2 dark:border-textFieldBg-500 bg-[#faf8ff] text-black-500 border-[#BCBCBC] focus:border-lightPurple-500 outline-none"
            name="comments"
            required
          ></textarea>
        </div>

        <button
          className="py-[10px] px-[20px] border-2 bg-transparent rounded-sm mt-[20px] transition-all dark:text-white-500 dark:border-white-500 text-black-500 border-black-500 hover:bg-lightPurple-500/20 hover:cursor-pointer"
          type="submit"
        >
          Submit
        </button>
      </form>
      </div>
    </section>
  );
}

export default ContactComponent;
