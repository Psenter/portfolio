import React from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import "./blogStyles.css";

export default function BlogTwelve() {
  return (
    <div className="container">
      <div className="title purp-txt text-center">
        Starting the final project.
      </div>
      <div className="row mt-4 pt-4 justify-content-center border-top">
        <div className="col-12 purp-txt text-center mb-3 lrg-txt">
          Question 1: After making it through the tech stack, where do you think
          your current gaps are?
        </div>
        <div className="col-12 text-light text-center">
          I think my gaps are currently in the back end, I feel like I don't
          have as good of a grasp on Python and Django as I do with the front
          end.
        </div>
      </div>
      <div className="row mt-4 pt-4 justify-content-center border-top">
        <div className="col-12 purp-txt text-center mb-3 lrg-txt">
          Question 2: Without considering the complexity, what is a custom hook
          you would write to help you in aspect of web development?
        </div>
        <div className="col-12 text-light text-center">
          One hook I can think of is to create one that gets every table of a
          database and allows the dev to access every part of those tables
          making it easy to import into a file as well as get any data the dev
          needs to put onto the page.
        </div>
      </div>
      <div className="row mt-4 pt-4 justify-content-center border-top border-bottom pb-4">
        <div className="col-12 purp-txt text-center mb-3 lrg-txt">
          Question 3: What is your opinion on documentation?
        </div>
        <div className="col-12 text-light text-center">
          My opinion on documentation is I think it is important. Things like
          Pseudocode and MVPs give other people on the team or others who look
          at your work and idea of what is going on within your mind and how
          your work has gone on. It also helps you stay on track with working on
          your project incase you ever lose track of what you need to work on
          next.
        </div>
      </div>
      <Link href={`/blogSnippets`} className="purp-txt back-btn no-decor">
        <div className="text-center mt-5 mb-5">Back</div>
      </Link>
    </div>
  );
}
